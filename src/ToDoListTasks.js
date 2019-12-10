import React from 'react';
import './App.css';
import './ToDoListTask.js'
import ToDoListTask from "./ToDoListTask";

class ToDoListTasks extends React.Component {
    render = () => {
        return (
            <div className="todoList-tasks">
                <ToDoListTask title={this.props.tasks[0].title} isDone={this.props.tasks[0].isDone}/>
                <ToDoListTask title={this.props.tasks[1].title} isDone={this.props.tasks[1].isDone}/>
                <ToDoListTask title={this.props.tasks[2].title} isDone={this.props.tasks[2].isDone}/>
                <ToDoListTask title={this.props.tasks[3].title} isDone={this.props.tasks[3].isDone}/>
            </div>
        );
    }
}

export default ToDoListTasks;
