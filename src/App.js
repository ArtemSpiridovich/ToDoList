import React from 'react';
import './App.css';
import './ToDoListTitle.js'
import './AddNewItemForm.js';
import './ToDoListTasks.js';
import './ToDoListFooter.js';
import ConnectedTodoList from "./ToDoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodoListAC, onDeleteTodoListAC} from "./redux/reducer";

class App extends React.Component {

    nextToDoListId = 0

    addItem = (newTitle) => {
        let newtodolist = {id: this.nextToDoListId, title: newTitle, filterValue: 'All', nextTaskId: 1, tasks: []};
        ++this.nextToDoListId;
        this.props.addItem(newtodolist)
    }

    onDeleteTodoList = (todolistId) => {
        this.props.onDeleteTodoList(todolistId)
    }


    render = () => {
        const newtodolists = this.props.todolists.map(tl =>
            <ConnectedTodoList id={tl.id} title={tl.title} filterValue={tl.filterValue} nextTaskId={tl.nextTaskId}
                               tasks={tl.tasks} onDeleteTodoList={this.onDeleteTodoList}/>
        )
        return (
            <div>
                <AddNewItemForm addItem={this.addItem}/>
                <div className="App">
                    {newtodolists}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (NewList) => {
            dispatch(addTodoListAC(NewList))
        },
        onDeleteTodoList: (todolistId) => {
            dispatch(onDeleteTodoListAC(todolistId))
        }
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp;


