import React from 'react';
import './App.css';
import './ToDoListTask.js'
import ToDoListTask from "./ToDoListTask";

class ToDoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map( t => <ToDoListTask task={t} changeStatus={this.props.changeStatus}/>);
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default ToDoListTasks;
