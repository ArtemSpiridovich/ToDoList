import React from 'react';
import './App.css';
import './ToDoListTask.js'
import ToDoListTask from "./ToDoListTask";

class ToDoListTasks extends React.Component {
    render = () => {
        return (
            <div>
                <ToDoListTask title="CSS" isDone={false}/>
                <ToDoListTask title="JS" isDone={true}/>
                <ToDoListTask title="HTML" isDone={true}/>
                <ToDoListTask title="ReactJS" isDone={false}/>
            </div>

        );
    }
}

export default ToDoListTasks;
