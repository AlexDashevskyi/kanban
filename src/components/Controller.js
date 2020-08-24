import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, Input, Col, Row} from 'reactstrap'

function Controller(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newPriority, setNewPriority] = useState(0)
    const [newStatus, setNewStatus] = useState('todo')
    const [addBtnDisabled, setBtnDisabled] = useState(true);
    const addButtonHandler = () => {
        props.addNewTask(newTitle, newPriority, newStatus)
        setIsModalOpen(false)
        setBtnDisabled(true)
    };
    const taskPriorityInput = (e) => {
        setNewPriority(e.target.value)
        setBtnDisabled(false)
    };
    const statusInput = (e) => {
      setNewStatus(e.target.value)
        setBtnDisabled(false)
    };
    return (
        <>
            <button className="btn btn-outline-dark" onClick={() => setIsModalOpen(true)}>Add new task</button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>Add new task</ModalHeader>

                <ModalBody>

                    <Label>New Task</Label>

                    <Input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='Input new task'/>

                    <Row>
                        <Col>
                            <Label>Priority</Label>
                            <select className='custom-select' onChange={taskPriorityInput} required>
                                <option value='0'>Select Priority</option>
                                <option value='3'>Low</option>
                                <option value='2'>Med</option>
                                <option value='1'>High</option>
                            </select>
                        </Col>

                        <Col>
                            <Label>Status</Label>
                            <select className='custom-select' onChange={statusInput}>
                                <option value={'Input Status'}>Input Status</option>
                                <option value={'todo'}>To do</option>
                                <option value={'progress'}>In progress</option>
                                <option value={'review'}>Review</option>
                                <option value={'done'}>Done</option>
                            </select>
                        </Col>
                    </Row>

                </ModalBody>

                <ModalFooter>
                    <Button disabled={addBtnDisabled} type='submit' onClick={addButtonHandler}>Add new task</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Controller;