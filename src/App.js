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
            {title: 'CSS', isDone: true},
            {title: 'HTML', isDone: true},
            {title: 'JS', isDone: false},
            {title: 'ReactJS', isDone: true},
            {title: 'Yo', isDone: false}
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


