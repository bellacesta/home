import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormProdutos from '../../Inputs/UserForm/Forms/FormProdutos.js/index.js';


export default function CtaModalProdutos(props) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
         <span className="p-2 " onClick={() => handleShow(v)}> {props.text}</span>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title><h3 className='fw-light'>Escolha os Produtos:</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <FormProdutos/>
        </Modal.Body>
      </Modal>
    </>
  );
}