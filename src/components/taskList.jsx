import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Task from './task';
import { SHOW_ACTIVE, SHOW_COMPLETED } from '../config/taskFilters';


const TaskList = ({taskContext,completeTask,deleteTask}) => {

    const context = useContext(taskContext);

    return (
        <ul>
            {
                context.tasks.filter((task)=>{
                    switch(context.filter){
                        case SHOW_ACTIVE:
                            return !task.completed;
                        case SHOW_COMPLETED:
                            return task.completed;
                        default:
                            return true
                    }
                }).map((task,index)=>(
                    <Task key={index} task={task} completeTask={()=>completeTask(task.id)} deleteTask={()=>deleteTask(task.id)}></Task>
                ))
            }
        </ul>
    );
}

TaskList.propTypes={
    taskContext:PropTypes.object.isRequired,
    completeTask:PropTypes.func.isRequired,
    deleteTask:PropTypes.func.isRequired
}


export default TaskList;
