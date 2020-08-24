import React from 'react';
import {Col} from 'reactstrap'
import Task from "./Task";

function Column(props) {
    const {tasks, changeTaskStatus, column, deleteTasks, saveButton} = props;
    return (
        <span className='col-sm'>
        {/*<Col>*/}
            <div className='card-header'>
            <h3>{column.title}</h3>
            </div>
            <p/>
            {tasks
                .filter(el => el.status === column.status)
                .sort((a, b) => b.priority - a.priority)
                .map(el => <Task task={el} key={Math.random()} changeTaskStatus={changeTaskStatus}
                                 deleteTask={deleteTasks} saveButton={saveButton}/>)}
            {/*</Col>*/}

    </span>
    );
}

export default Column;