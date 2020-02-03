const ADD_TODOLIST = 'ADD_TODOLIST'
const ADD_TASK = 'ADD_TASK'
const CHANGE_TASK = 'CHANGE_TASK'
const CHANGE_FILTER = 'CHANGE_FILTER'
const DELETE_TODOLIST = 'DELETE_TODOLIST'
const DELETE_TASK = 'DELETE_TASK'


let initialstate = {todolists: []}

const TodoListReducer = (state = initialstate, action) => {
    switch(action.type){
        case(ADD_TODOLIST):
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist]
            }
        case(ADD_TASK):
            return{
            ...state,
            todolists: state.todolists.map(tl => {
                    if(action.todolistId === tl.id) {
                       return {...tl, nextTaskId: tl.nextTaskId+1 ,tasks: [...tl.tasks, action.newTask]}
                    } else {
                       return tl
                    }
                })
            }
        case(CHANGE_TASK):
            return{
                ...state,
                todolists: state.todolists.map(tl => {
                    if(action.todolistId === tl.id) {
                        return{
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if(action.taskId === t.id){
                                    return {...t, ...action.newTask}
                                } else {
                                    return t
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            }
        case(CHANGE_FILTER):
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if(action.todolistId === tl.id) {
                        return {
                            ...tl,
                            filterValue: action.newFilter
                        }
                    } else {
                        return tl
                    }
                })
            }
        default:
            return state
    }
}

export const addTodoListAC = (newTodolist) => {
    return{
        type: ADD_TODOLIST,
        newTodolist
    }
}

export const addTaskAC = (newTask, todolistId) => {
    return{
        type: ADD_TASK,
        newTask,
        todolistId
    }
}

export const changeTaskAC = (taskId, newTask, todolistId) => {
    return{
        type: CHANGE_TASK,
        taskId,
        newTask,
        todolistId
    }
}

export const changeFilterAC = (newFilter, todolistId) => {
    return{
        type: CHANGE_FILTER,
        newFilter,
        todolistId
    }
}

export default TodoListReducer