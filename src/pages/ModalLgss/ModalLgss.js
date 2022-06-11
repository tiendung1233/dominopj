import React, { useState } from "react";
import "./modal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import{Link} from 'react-router-dom'
export default function ModalLgss() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')

    } else {
        
        document.body.classList.remove('active-modal')
    }
   
    return (
        <>
            
                <i  onClick={toggleModal} class="color bi bi-x"></i>


            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        ĐĂNG NHẬP THÀNH CÔNG
                    </div>
                </div>
            )}
        </>
    );
}