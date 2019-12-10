import React from 'react';
import './App.css';

class ToDoListTask extends React.Component {
    render = () => {
        return (
                <div className="todoList-task">
                    <input type="checkbox" checked={true}/>
                    <span>CSS</span>
                </div>
        );
    }
}
export default ToDoListTask;
