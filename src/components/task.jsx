import React from 'react';
import PropTypes from 'prop-types';

const Task = ({task, completeTask, deleteTask}) => {
    return (
        <li style={{
            color: task.completed?'green':'tomato'
        }}
        onClick={completeTask}>
            {task.id} - {task.name}
            <button onClick={deleteTask}>X</button>
        </li>
    );
}

Task.propTypes={
    task:PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        completed:PropTypes.bool.isRequired
    }).isRequired,
    completeTask:PropTypes.func.isRequired,
    deleteTask:PropTypes.func.isRequired
}

export default Task;
