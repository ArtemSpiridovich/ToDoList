import React from 'react';
import './App.css';

class ToDoListHeader extends React.Component {

    state = {
        error: false,
        title: ""
    }
    onAddTaskClick = () => {
        let newTitle = this.state.title;
        this.state.title = '';
        if(newTitle === '') {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false
            })
        }
        this.props.addTask(newTitle)
    }
    changeTextInput = (e) => {
        this.changeStatus(e.currentTarget.value)
        this.setState({
            error: false
        })
    }
    changeStatus = (value) => {
        this.setState({
            title: value
        })
}
    pressKey = (e) => {
        if(e.key === "Enter"){
            this.onAddTaskClick()
        }
    }
    render = () => {
        let errorClass = this.state.error ? 'error' : '';
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={errorClass} onChange={this.changeTextInput} value={this.state.title} type="text"
                           placeholder="New task name"
                           onKeyPress={this.pressKey}/>
                    <button onClick={this.onAddTaskClick} >Add</button>
                </div>
            </div>
        );
    }
}

export default ToDoListHeader;
