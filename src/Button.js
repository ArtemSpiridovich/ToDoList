import React from 'react';
import './App.css';

class Button extends React.Component {
    render = () => {
        return (
            <div className="todoList-footer">
                    <button onClick={this.props.onClick} className={this.props.className}>{this.props.textButton}</button>
            </div>
        );
    }
}

export default Button;