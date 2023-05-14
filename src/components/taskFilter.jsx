import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../config/taskFilters';


const TaskFilter = ({setFilter}) => {
    const select = useRef()
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            setFilter(select.current.value)
        }}>
            <select ref={select}>
                <option value={SHOW_ALL} defaultValue>ALL</option>
                <option value={SHOW_ACTIVE}>Active</option>
                <option value={SHOW_COMPLETED}>Completed</option>
            </select>
            <button type='submit'>
                Select Filter
            </button>
        </form>
        
    );
};


TaskFilter.propTypes = {
    setFilter:PropTypes.func.isRequired
};


export default TaskFilter;
