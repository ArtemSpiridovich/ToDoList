import React from 'react';
import './App.css';
import './ToDoListHeader.js';
import './ToDoListTasks.js';
import './ToDoListFooter.js';
import ToDoListHeader from "./ToDoListHeader";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";

class App extends React.Component {

    nextTaskId = 5;

    state = {
        tasks: [
            {id: 0, title: 'CSS', isDone: true, priority: 'High'},
            {id: 1, title: 'HTML', isDone: true, priority: 'High'},
            {id: 2, title: 'JS', isDone: false, priority: 'Low'},
            {id: 3, title: 'ReactJS', isDone: true, priority: 'Low'},
            {id: 4, title: 'Yo', isDone: false, priority: 'Low'}
        ],
        filterValue: 'All'
    }

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
        // let newTask = this.state.tasks.map(t => {
        //     if(t.id !== taskId){
        //         return t;
        //     } else {
        //         return {...t, isDone: isDone}
        //     }
        // });
        // this.setState({
        //     tasks: newTask
        // })
};

    changeInput = (titleId, title) => {
        this.changeTask(titleId, {title: title})
        // let newTitle = this.state.tasks.map(t => {
        //     if(t.id === titleId){
        //         return {...t, title: title}
        //     } else {
        //         return {...t}
        //     }
        // })
        // this.setState({
        //     tasks: newTitle
        // })
    }

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if(t.id !== taskId){
                return t
            } else {
                return {...t, ...obj}
            }
        })
        this.setState({
            tasks: newTasks
        })
    }

    changeFilter = (NewFilterValue) => {
        this.setState({
            filterValue: NewFilterValue
        })

    }

    addTask = (newTitle) => {
        let newTask = {id: this.nextTaskId++, title: newTitle, isDone: false, priority: 'Low'};
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
                    <ToDoListTasks changeStatus = {this.changeStatus} changeInput={this.changeInput} state={this.state} tasks={this.state.tasks.filter(t => {
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


