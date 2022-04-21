import { Modal, Button, Form} from 'react-bootstrap';
import React, { useState } from 'react';

const AddProduct = ({show,handleClose, handleProduct}) => {
  let [title,setTitle] = useState("")
  let [descr,setDescr] = useState("")
  let [price,setPrice] = useState("")
  let [image,setImage] = useState("")

const handleAdd=(e)=>{
 e.preventDefault();

let newObj={
    title,
    descr,
    price,
    image,
    id: Date.now(),
};

console.log(newObj)
handleProduct(newObj)


// ? Для очищения инпутов после добавления
setTitle('')
setDescr('')
setPrice('')
setImage('')


handleClose()
}
    return (
      
        <Modal show={show} onHide={handleClose} size="lg" centered="true" >
        <Modal.Header closeButton>
          <Modal.Title>ADD PRODUCT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control className='my-3' size="lg" type="text" placeholder="Title" value ={title} onChange={(e) => setTitle(e.target.value)} />
        <Form.Control className='my-3' size="lg" type="text" placeholder="Description" value ={descr} onChange={(e) => setDescr(e.target.value)}/>
        <Form.Control className='my-3' size="lg" type="text" placeholder="Price" value ={price} onChange={(e) => setPrice(e.target.value)} />
        <Form.Control className='my-3' size="lg" type="text" placeholder="Image"  value ={image} onChange={(e) => setImage(e.target.value)} />


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
          Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default AddProduct;