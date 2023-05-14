import React, { useReducer, useState } from 'react';
import { ADD_TASK, TOGGLE_TASK, FILTER_TASK, REMOVE_TASK } from '../config/taskActions';
import TaskList from './taskList';
import TaskForm from './taskForm';
import TaskFilter from './taskFilter';

const taskContext=React.createContext(null);

const initialTaskState={
    tasks:[],
    filter:'SHOW_ALL'
};


const TaskListContainer = () => {
    const [id, setId] = useState(0);

    const taskReducer=(state,action)=>{
        switch (action.type) {
            case ADD_TASK:
                setId(id+1);
                return {
                    tasks:[...state.tasks,{id:id,name:action.payload.name,completed:false}],
                    filter:state.filter
                };
            case REMOVE_TASK:
                return {
                    tasks:state.tasks.filter((task)=>task.id!==action.payload.id),
                    filter:state.filter
                };
            case FILTER_TASK:
                return {
                    tasks:state.tasks,
                    filter:action.payload.filter
                };
            case TOGGLE_TASK:
                return {
                    tasks:state.tasks.map((task)=>task.id===action.payload.id? {...task,completed:!task.completed}:task),
                    filter:state.filter
                };
        
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(taskReducer, initialTaskState)

    return (
        <taskContext.Provider value={state}>
            <TaskList taskContext={taskContext}
            completeTask={(id)=>dispatch({
                type:TOGGLE_TASK,
                payload:{
                    id
                }
            })}
            deleteTask={(id)=>dispatch({
                type:REMOVE_TASK,
                payload:{
                    id
                }
            })}></TaskList>
            <TaskForm createTask={(name)=>dispatch({
                type:ADD_TASK,
                payload:{
                    name
                }
            })}></TaskForm>
            <TaskFilter setFilter={(filter)=>dispatch({
                type:FILTER_TASK,
                payload:{
                    filter
                }
            })}></TaskFilter>
        </taskContext.Provider>
    );
}

export default TaskListContainer;
