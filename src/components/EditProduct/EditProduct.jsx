import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const EditProduct = ({
  handleEditClose,
  editModal,
  editProduct,
  handleSave,
}) => {

  const [product, setProduct] = useState(editProduct);
  const editTitle = (e) => {
    let newObj = {
      ...product,
      title: e.target.value,
    };
    setProduct(newObj);
  };

  const editDescr = (e) => {
    let newObj = {
      ...product,
      descr: e.target.value,
    };
    setProduct(newObj);
  };

  const editPrice = (e) => {
    let newObj = {
      ...product,
      price: e.target.value,
    };
    setProduct(newObj);
  };

  const editImage = (e) => {
    let newObj = {
      ...product,
      image: e.target.value,
    };
    setProduct(newObj);
  };

  return (
    <Modal show={editModal} onHide={handleEditClose} size="lg" centered="true">
      <Modal.Header closeButton>
        <Modal.Title>EDIT PRODUCT</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Control
          className="my-3"
          size="lg"
          type="text"
          placeholder="Title"
          value={product.title}
           onChange={editTitle}
        />
        <Form.Control
          className="my-3"
          size="lg"
          type="text"
          placeholder="Description"
          value={product.descr}
            onChange={editDescr}
        />
        <Form.Control
          className="my-3"
          size="lg"
          type="text"
          placeholder="Price"
          value={product.price}
            onChange={editPrice}
        />
        <Form.Control
          className="my-3"
          size="lg"
          type="text"
          placeholder="Image"
          value={product.image}
            onChange={editImage}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleEditClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>handleSave(product)}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProduct;