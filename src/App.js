import React from 'react';
import './App.css';
import './ToDoListTitle.js'
import './AddNewItemForm.js';
import './ToDoListTasks.js';
import './ToDoListFooter.js';
import ConnectedTodoList from "./ToDoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodoListAC} from "./redux/reducer";

class App extends React.Component {


    state = {
        todolists: []
    }

    nextToDoListId = 0

    addItem = (newTitle) => {
        let newtodolist = {id: this.nextToDoListId, title: newTitle, tasks: []};
        // let newList = [...this.state.todolists, newtodolist];
        ++this.nextToDoListId;
        // this.setState({
        //     todolists: newList
        // });
        this.props.addItem(newtodolist)
    }


    render = () => {
        debugger
        const newtodolists = this.props.todolists.map(ti =>
            <ConnectedTodoList id={ti.id} title={ti.title} tasks={ti.tasks}/>
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
        }
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp;


