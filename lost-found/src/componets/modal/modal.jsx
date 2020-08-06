import React from 'react';
//import { ButtonModal } from './modal.styles';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormEx from '../form/form.jsx';


const ModalEx = () => {
  

     const [lgShow, setLgShow] = React.useState(false);

  
    return (
      <>

       <Button onClick={() => setLgShow(true)}>ADD</Button>  

        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Enter your own
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <FormEx></FormEx>
        </Modal.Body>
      </Modal>
    </>
    );
  };
  
 export default ModalEx;