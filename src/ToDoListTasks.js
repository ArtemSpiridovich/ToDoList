import React from 'react';
import './App.css';
import './ToDoListTask.js'
import ToDoListTask from "./ToDoListTask";

class ToDoListTasks extends React.Component {
    render = () => {
        return (
            <div>
                <ToDoListTask/>
                <ToDoListTask/>
                <ToDoListTask/>
                <ToDoListTask/>
            </div>

        );
    }
}

export default ToDoListTasks;
