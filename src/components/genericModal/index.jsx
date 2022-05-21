//import '../../styles/modal.css'
import { Button, Modal } from 'react-bootstrap';

function GenericModal(props){
    if(!props.showModal){
        return null;
    }
    return (
        <Modal show={props.showModal} onHide={() => props.toggle(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.toggle(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => props.toggle(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>);
}

export default GenericModal