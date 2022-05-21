import { Button, Modal } from 'react-bootstrap';

function GenericModal(props){
    if(!props.showModal){
        return null;
    }
    return (
      <Modal size="lg" show={props.showModal} onHide={() => props.toggle(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.Description}</p>
          {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.toggle(false)}>
            Annuler
          </Button>
          <Button variant="primary" onClick={() => props.toggle(false)}>
            Enregistrer bon de réduction
          </Button>
        </Modal.Footer>
      </Modal>);
}

export default GenericModal