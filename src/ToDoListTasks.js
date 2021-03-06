import React from 'react';
import './App.css';
import './ToDoListTask.js'
import ToDoListTask from "./ToDoListTask";

class ToDoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map( t => <ToDoListTask onDeleteTask={this.props.onDeleteTask} task={t} changeTask={this.props.changeTask} changeInput={this.props.changeInput} state={this.props.state} changeStatus={this.props.changeStatus}/>);
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default ToDoListTasks;
