import React from 'react';
import './App.css';
import './AddNewItemForm.js';
import './ToDoListTasks.js';
import './ToDoListFooter.js';
import AddNewItemForm from "./AddNewItemForm";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";
import ToDoListTitle from "./ToDoListTitle";
import {addTaskAC, changeFilterAC, changeTaskAC, onDeleteTaskAC} from "./redux/reducer";
import {connect} from "react-redux";

class ToDoList extends React.Component {

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    };

    changeInput = (titleId, title) => {
        this.changeTask(titleId, {title: title})
    }

    changeTask = (taskId, obj) => {
        this.props.changeTask(taskId, obj, this.props.id)
    }

    changeFilter = (NewFilterValue) => {
        this.props.changeFilter(NewFilterValue, this.props.id)
    }

    addTask = (newTitle) => {
        let newTask = {id: this.props.nextTaskId, title: newTitle, isDone: false, priority: 'Low'};
        this.props.addTask(newTask, this.props.id)
    }

    onDeleteTask = (taskId) => {
        this.props.onDeleteTask(taskId, this.props.id)
    }


    render = () => {
        return (
            <div className="todoList">
                    <ToDoListTitle onDeleteTodoList={this.props.onDeleteTodoList} title={this.props.title} id={this.props.id}/>
                    <AddNewItemForm addItem={this.addTask}/>
                    <ToDoListTasks onDeleteTask={this.onDeleteTask} changeStatus={this.changeStatus} changeInput={this.changeInput}
                                   tasks={this.props.tasks.filter(t => {
                                       if (this.props.filterValue === "All")
                                           return true;
                                       if (this.props.filterValue === "Completed")
                                           return t.isDone === true;
                                       if (this.props.filterValue === "Active")
                                           return t.isDone === false;
                                   })}/>
                    <ToDoListFooter changeFilter={this.changeFilter} filterValue={this.props.filterValue}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newTask, todolistId) => {
            dispatch(addTaskAC(newTask, todolistId))
        },
        changeTask: (taskId, newTask, todolistId) => {
            dispatch(changeTaskAC(taskId, newTask, todolistId))
        },
        changeFilter: (NewFilterValue, todolistId) => {
            dispatch(changeFilterAC(NewFilterValue, todolistId))
        },
        onDeleteTask: (taskId, todolistId) => {
            dispatch(onDeleteTaskAC(taskId, todolistId))
        }
    }

}

const ConnectedTodoList = connect(null, mapDispatchToProps)(ToDoList)

export default ConnectedTodoList;


