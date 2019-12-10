import React from 'react';
import './App.css';
import './ToDoListHeader.js';
import './ToDoListTasks.js';
import './ToDoListFooter.js';
import ToDoListHeader from "./ToDoListHeader";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";

class App extends React.Component {
    filterValue = "All";
    tasks = [
        {title: 'CSS', isDone: true, priority: 'High'},
        {title: 'HTML', isDone: true, priority: 'High'},
        {title: 'JS', isDone: false, priority: 'Low'},
        {title: 'ReactJS', isDone: true, priority: 'Low'},
        {title: 'Yo', isDone: false, priority: 'Low'}
    ];

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader/>
                    <ToDoListTasks tasks={this.tasks}/>
                    <ToDoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;


