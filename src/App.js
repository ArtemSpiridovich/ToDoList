import React from 'react';
import './App.css';
import './ToDoListHeader.js';
import './ToDoListTasks.js';
import './ToDoListFooter.js';
import ToDoListHeader from "./ToDoListHeader";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
        setTimeout(() => {
                let newTask = {title: 'Rudy', isDone: true, priority: 'High'};
                let newTasks = [...this.state.tasks, newTask];
                this.setState({
                    tasks: newTasks
                });
            }
            , 2000);

    }

    state = {
        tasks: [
            {title: 'CSS', isDone: true, priority: 'High'},
            {title: 'HTML', isDone: true, priority: 'High'},
            {title: 'JS', isDone: false, priority: 'Low'},
            {title: 'ReactJS', isDone: true, priority: 'Low'},
            {title: 'Yo', isDone: false, priority: 'Low'}
        ],
        filterValue: "All"
    }


    onAddNewTaskOnClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = ''
        let newTask = {title: newText, isDone: true, priority: 'High'};
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
    }


    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    {/*<ToDoListHeader/>*/}
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>
                            <button onClick={this.onAddNewTaskOnClick}>Add</button>
                        </div>
                    </div>
                    <ToDoListTasks tasks={this.state.tasks}/>
                    <ToDoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;


