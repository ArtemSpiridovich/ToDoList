import React from 'react';
import './App.css';

class ToDoListTitle extends React.Component {

    onDeleteTodoList = () => {
        this.props.onDeleteTodoList(this.props.id)
    }


    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">{this.props.title}</h3>
                <button onClick={this.onDeleteTodoList}>X</button>
            </div>
        );
    }
}

export default ToDoListTitle;
