import React from 'react';
import './App.css';
import './ToDoListHeader.js';
import './ToDoListTasks.js';
import './ToDoListFooter.js';
import ToDoListHeader from "./ToDoListHeader";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";

class App extends React.Component {

    state = {
        tasks: [
            {title: 'CSS', isDone: true, priority: 'High'},
            {title: 'HTML', isDone: true, priority: 'High'},
            {title: 'JS', isDone: false, priority: 'Low'},
            {title: 'ReactJS', isDone: true, priority: 'Low'},
            {title: 'Yo', isDone: false, priority: 'Low'}
        ],
        filterValue: 'All'
    }

    changeStatus = (task, isDone) => {
        let newTask = this.state.tasks.map(t => {
            if(t !== task){
                return t;
            } else {
                return {...t, isDone: isDone}
            }
        });
        this.setState({
            tasks: newTask
        })
}

    changeFilter = (NewFilterValue) => {
        this.setState({
            filterValue: NewFilterValue
        })

    }

    addTask = (newTitle) => {
        let newTask = {title: newTitle, isDone: false, priority: 'Low'};
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
    }


    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader addTask={this.addTask}/>
                    <ToDoListTasks changeStatus = {this.changeStatus} tasks={this.state.tasks.filter(t => {
                        if (this.state.filterValue === "All")
                            return true;
                        if (this.state.filterValue === "Completed")
                            return t.isDone === true;
                        if (this.state.filterValue === "Active")
                            return t.isDone === false;
                    })}/>
                    <ToDoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;


