import React from 'react';
import './App.css';
import './AddNewItemForm.js';
import './ToDoListTasks.js';
import './ToDoListFooter.js';
import AddNewItemForm from "./AddNewItemForm";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";
import ToDoListTitle from "./ToDoListTitle";
import {addTaskAC} from "./redux/reducer";
import {connect} from "react-redux";

class ToDoList extends React.Component {

    state = {
        tasks: [],
        filterValue: 'All',
        nextTaskId: 1
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
            if (t.id !== taskId) {
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
        let newTask = {id: this.state.nextTaskId++, title: newTitle, isDone: false, priority: 'Low'};
        // let newTasks = [...this.state.tasks, newTask];
        // this.setState({
        //     tasks: newTasks
        // });
        this.props.addTask(newTask, this.props.id)
    }


    render = () => {
        return (
            <div className="todoList">
                    <ToDoListTitle title={this.props.title} id={this.props.id}/>
                    <AddNewItemForm addItem={this.addTask}/>
                    <ToDoListTasks changeStatus={this.changeStatus} changeInput={this.changeInput} state={this.state}
                                   tasks={this.props.tasks.filter(t => {
                                       if (this.state.filterValue === "All")
                                           return true;
                                       if (this.state.filterValue === "Completed")
                                           return t.isDone === true;
                                       if (this.state.filterValue === "Active")
                                           return t.isDone === false;
                                   })}/>
                    <ToDoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newTask, todolistId) => {
            dispatch(addTaskAC(newTask, todolistId))
        }
    }
}

const ConnectedTodoList = connect(null, mapDispatchToProps)(ToDoList)

export default ConnectedTodoList;


