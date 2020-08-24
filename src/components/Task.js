import React, {useState} from 'react';
import {Col, Card, CardBody, Button} from 'reactstrap';

const editBtn = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>);

const deleteBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-circle" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
</svg>);

const saveBtn = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2-circle" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd"
              d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
    </svg>);

function Task(props) {
    const {task, changeTaskStatus, deleteTask, saveButton} = props;

    const [editMode, setEditMode] = useState(false);
    const [taskUpdateInput, setTasUpdateInput] = useState(task.name);
    const alertColors = {1: 'badge badge-danger', 2: 'badge badge-warning', 3: 'badge badge-success'};
    const saveButtonHandler = () => {
        saveButton(task.id, taskUpdateInput);
        setEditMode(false)
    };

    return (
        <div className='card draggable'>
            <Col>
                <Card>
                    <div className='card-header'>
                        <span className={alertColors[task.priority]}>
                            Priority: {task.priority}
                            </span>
                        {task.priority < 3 &&
                        <Button className="btn btn-light btn-sm"
                                onClick={() => changeTaskStatus(task.id, 'down')}>↓</Button>}
                        {' '}
                        {task.priority > 1 &&
                        <Button className="btn btn-light btn-sm"
                                onClick={() => changeTaskStatus(task.id, 'up')}>↑</Button>}
                    </div>
{/*-----------------------------------------------------------*/}
                    <div className='card-body'>
                        {editMode
                            ? <>
                                <input type='text'
                                       onChange={e => setTasUpdateInput(e.target.value)}/>
                                <br/>
                                <button className='btn btn-outline-success btn-sm' onClick={saveButtonHandler}>{saveBtn}</button>
                            </>
                            : <h5 className='card-title'>{task.name}</h5>
                        }
                    </div>
{/*----------------------------------------------------------*/}
                    <CardBody>
                        <p/>
                        <span className='float-left'>
                    {task.status !== 'todo' &&
                    <button className="btn btn-outline-secondary btn-sm"
                            onClick={() => changeTaskStatus(task.id, 'left')}>←</button>}
                            {task.status !== 'done' &&
                            <button className="btn btn-outline-secondary btn-sm"
                                    onClick={() => changeTaskStatus(task.id, 'right')}>→</button>}
                            </span>
                        <p/>
                        <span className='float-right'>
                        <span onClick={() => deleteTask(task.id)}>{deleteBtn}</span>
                            <span onClick={() => setEditMode(true)}>{editBtn}</span>
                        </span>
                    </CardBody>
                </Card>
            </Col>

        </div>
    );
}

export default Task;