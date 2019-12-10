import React from 'react';
import './App.css';
import './ToDoListTask.js'
import ToDoListTask from "./ToDoListTask";

class ToDoListTasks extends React.Component {
    render = () => {

        let tasks = [
            {title: 'CSS', isDone: true},
            {title: 'HTML', isDone: false},
            {title: 'JS', isDone: false},
            {title: 'ReactJS', isDone: true}
        ];
        return (
            <div className="todoList-tasks">
                <ToDoListTask title={tasks[0].title} isDone={tasks[0].isDone}/>
                <ToDoListTask title={tasks[1].title} isDone={tasks[1].isDone}/>
                <ToDoListTask title={tasks[2].title} isDone={tasks[2].isDone}/>
                <ToDoListTask title={tasks[3].title} isDone={tasks[3].isDone}/>
            </div>
        );
    }
}

export default ToDoListTasks;
