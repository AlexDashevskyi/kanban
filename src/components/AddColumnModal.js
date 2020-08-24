// import React, {useState} from 'react';
// import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, Input, Col, Row} from 'reactstrap'
//
// function AddColumnModal(props) {
//
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [newTitle, setNewTitle] = useState('');
//     const addButtonHandler = () => {
//         props.addNewColumn(newTitle)
//         setIsModalOpen(false)
//     };
//     return (
//         <>
//             <Button onClick={() => setIsModalOpen(true)}>Add new column</Button>
//             <Modal isOpen={isModalOpen}>
//                 <ModalHeader>Add new column</ModalHeader>
//
//                 <ModalBody>
//
//                     <Label>New Column</Label>
//
//                     <Input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
//
//
//
//                 </ModalBody>
//
//                 <ModalFooter>
//                     <Button onClick={addButtonHandler}>Add new column</Button>
//                     {' '}
//                     <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
//                 </ModalFooter>
//             </Modal>
//         </>
//     );
// }
//
// export default AddColumnModal;