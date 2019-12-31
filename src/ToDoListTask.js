import React from 'react';
import './App.css';

class ToDoListTask extends React.Component {
    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task, e.currentTarget.checked);

    }
    render = () => {
        let ClassForCheckBox = this.props.task.isDone === true ? 'done' : '';
        return (
            <div className="todoList-task">
                <input className={ClassForCheckBox} type="checkbox" checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                <span className={ClassForCheckBox}>{this.props.task.title}, priority: {this.props.task.priority}</span>
            </div>
        );
    }
}

export default ToDoListTask;
