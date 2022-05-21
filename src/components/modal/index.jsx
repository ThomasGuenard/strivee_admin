import '../../styles/modal.css'

function Modal(props){
    if(!props.showModal){
        return null;
    }
    return (
        <div className='modal-back'>
            <div className="modal">
                <div className="modal-header">
                    <h1>{props.title}</h1>
                    <span>{props.description}</span>
                </div>
                <div className="modal-content">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <button className='normalButton whiteButton' onClick={e => props.toggle(false)}>Annuler</button>
                    <button className='normalButton greenButton' onClick={e => props.toggle(false)}>Enregistrer Bon de réduction</button>
                </div>
            </div>
        </div>);
}

export default Modal