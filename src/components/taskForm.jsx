import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({createTask}) => {
    const name = useRef();
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            createTask(name.current.value)
        }}>
            <input type='text' ref={name}/>
            <button type='submit'>
                Create
            </button>
        </form>
    );
}
TaskForm.propTypes={
    createTask:PropTypes.func.isRequired
}

export default TaskForm;
