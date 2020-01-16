import React from 'react';
import './App.css';
import './ToDoListTitle.js'
import './AddNewItemForm.js';
import './ToDoListTasks.js';
import './ToDoListFooter.js';
import ToDoLists from "./ToDoLists";
import AddNewItemForm from "./AddNewItemForm";

class App extends React.Component {


    state = {
        todolist: []
    }
    nextToDoListId = 0

    componentDidMount() {
        this.restoreState();
    }


    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('our-state', stateAsString);
    }

    restoreState = () => {
        let state = {
            todolist: []
        }
        let stateAsString = localStorage.getItem('our-state');
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString)
            this.nextToDoListId = state.todolist.length;
        }
        this.setState(state)
    }


    addItem = (newTitle) => {
        let newtodolist = {id: this.nextToDoListId, title: newTitle};
        let newList = [...this.state.todolist, newtodolist];
        ++this.nextToDoListId;
        this.setState({
            todolist: newList
        }, () => {
            this.saveState()
        });
    }


    render = () => {
        const newtodolists = this.state.todolist.map(ti =>
            <ToDoLists id={ti.id} title={ti.title}/>
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

export default App;


