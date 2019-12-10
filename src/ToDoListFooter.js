import React from 'react';
import './App.css';

class ToDoListFooter extends React.Component {
    render = () => {
        return (
            <div className="todoList-footer">
                <button className={"filter-active"}>All </button>
                <button>Completed</button>
                <button>Active</button>
            </div>
        );
    }
}

export default ToDoListFooter;
