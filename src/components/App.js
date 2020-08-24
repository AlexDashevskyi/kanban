import React, {useState} from 'react';
import {Container, Row} from 'reactstrap';
import Column from "./Column";
import Controller from "./Controller";
// import AddColumnModal from "./AddColumnModal";

function App() {
    const taskList = [
        {id: Math.random(), name: 'First task', priority: 1, status: 'todo'},
        {id: Math.random(), name: 'Second task', priority: 1, status: 'progress'},
        {id: Math.random(), name: 'Third task', priority: 1, status: 'review'},
        {id: Math.random(), name: 'Fourth task', priority: 1, status: 'todo'},
        {id: Math.random(), name: 'Fourth task', priority: 1, status: 'do again'}
    ]
    const columnList = [
        {id: Math.random(), title: 'To do', status: 'todo'},
        {id: Math.random(), title: 'In progress', status: 'progress'},
        {id: Math.random(), title: 'Review', status: 'review'},
        {id: Math.random(), title: 'Done', status: 'done'}
    ]
    const [tasks, setTasks] = useState(taskList);
    const [column, setColumn] = useState(columnList);

    const statuses = ['Input Status', 'todo', 'progress', 'review', 'done',]
    const taskPriority = [0, 1, 2, 3];

    const addNewTask = (newTitle, newPriority, newStatus) => {
        const newTask = {
            id: Math.random(),
            name: newTitle,
            priority: newPriority,
            status: newStatus
        }
        const newTasks = [...tasks, newTask]
        setTasks(newTasks);
    };
    const saveButton = (id, newTitle) => {
        const newTask = tasks.map(el => {
            if (el.id === id) {
                return ({...el, name: newTitle})
            } else {
                return el;
            }
        })
        setTasks(newTask);
    };
    // const addNewColumn = (title) => {
    //   const newColumn = {
    //       id: Math.random(),
    //       title,
    //       status: 'do again'
    //   }
    //   const newColumns = [...columnList, newColumn];
    //   setColumn(newColumns)
    // };

    const changeTaskStatus = (taskId, direction) => {
        const newTask = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === 'right') el.status = statuses[statuses.indexOf(el.status) + 1]
                if (direction === 'left') el.status = statuses[statuses.indexOf(el.status) - 1]
                if (direction === 'up') el.priority = taskPriority[taskPriority.indexOf(el.priority) - 1]
                if (direction === 'down') el.priority = taskPriority[taskPriority.indexOf(el.priority) + 1]
            }
            return el;
        })
        setTasks(newTask);
    };

    const deleteTask = (taskId) => {
        const newList = tasks.filter(el => el.id !== taskId);
        setTasks(newList);
    };

    return (
        <div>
            <Container>
                <Controller addNewTask={addNewTask}/>
                {/*<AddColumnModal addNewColumn={addNewColumn}/>*/}

                <Row>
                    {column.map(el => <Column column={el} key={Math.random() * 10} tasks={tasks}
                                              changeTaskStatus={changeTaskStatus} deleteTasks={deleteTask} saveButton={saveButton}/>)}
                </Row>
            </Container>
        </div>
    );
}

export default App;
