import React from 'react'
import { Modal,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/modalMsg.css'

const ModalMessage = ({show,onHide,message,route,textevent}) =>{

    return(
        <Modal show={show} onHide={()=>onHide()}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal title</Modal.Title> */}
                </Modal.Header>

            <Modal.Body>
                    <p>{message}</p>
            </Modal.Body>

            <Modal.Footer>
                    <Button className="btn btn-primary" ><Link className="btn-msg" to={route}>{textevent}</Link></Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMessage;