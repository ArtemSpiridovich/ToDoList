import React from 'react';
import './App.css';

class AddNewItemForm extends React.Component {

    state = {
        error: false,
        title: ""
    }
    onAddItemClick = () => {
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
        this.props.addItem(newTitle)
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
            this.onAddItemClick()
        }
    }
    render = () => {
        let errorClass = this.state.error ? 'error' : '';
        return (
            <div className="todoList-header">
                <div className="todoList-newTaskForm">
                    <input className={errorClass} onChange={this.changeTextInput} value={this.state.title} type="text"
                           placeholder="New task name"
                           onKeyPress={this.pressKey}/>
                    <button onClick={this.onAddItemClick} >Add</button>
                </div>
            </div>
        );
    }
}

export default AddNewItemForm;
