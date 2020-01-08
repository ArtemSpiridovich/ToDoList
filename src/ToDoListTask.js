import React from 'react';
import './App.css';

class ToDoListTask extends React.Component {

    state = {
        EditMod: false
    }


    activateEditMod = () => {
        this.setState({
            EditMod: true
        })
    };

    onDeactivateEditMode = () => {
        this.setState({
            EditMod: false
        })
    };

    onChangeInput = (e) => {
        this.props.changeInput(this.props.task.id, e.currentTarget.value)
    }

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    }

    render = () => {
        let ClassForCheckBox = this.props.task.isDone === true ? 'done' : '';
        return (
            <div className="todoList-task">
                <input className={ClassForCheckBox} type="checkbox" checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                {this.state.EditMod
                    ? <input onBlur={this.onDeactivateEditMode} onChange={this.onChangeInput} autoFocus={true} value = {this.props.task.title}/>
                    : <span onClick={this.activateEditMod}
                          className={ClassForCheckBox}>{this.props.task.id}- {this.props.task.title}</span>
                }, priority: {this.props.task.priority}
            </div>
        );
    }
}

export default ToDoListTask;
