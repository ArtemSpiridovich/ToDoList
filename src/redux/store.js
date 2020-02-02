import {createStore} from "redux";
import TodoListReducer from "./reducer";


let reducer = TodoListReducer;

let store = createStore(reducer);

export default store