import React from 'react';
import './App.css';
import './ToDoListHeader.js';
import './ToDoListTasks.js';
import './ToDoListFooter.js';
import ToDoListHeader from "./ToDoListHeader";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";

class App extends React.Component {
    render = () => {
        let tasks = [
            {title: 'CSS', isDone: true, priority: 'High'},
            {title: 'HTML', isDone: true, priority: 'High'},
            {title: 'JS', isDone: false, priority: 'Medium'},
            {title: 'ReactJS', isDone: true, priority: 'Low'},
            {title: 'Yo', isDone: false, priority: 'Low'}
        ];
        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader/>
                    <ToDoListTasks tasks={tasks}/>
                    <ToDoListFooter/>
                </div>
            </div>
        );
    }
}

export default App;


