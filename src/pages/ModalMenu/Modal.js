import React, { useState } from "react";
import "./Modal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import{Link} from 'react-router-dom'
export default function Modal() {
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
            
                <i  onClick={toggleModal} class="color bi bi-list"></i>


            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        
                        <ul className="ul_list">
                            
                            <li > <Link onClick={toggleModal} to ='/code'>Mã e-voucher</Link></li>
                            <li > <Link onClick={toggleModal} to ='/voucher'>Khuyến mãi</Link></li>
                            <li > <Link onClick={toggleModal} to ='/menu'>Thực đơn</Link></li>
                            <li > <Link onClick={toggleModal}  to ='/follow'>Theo dõi đơn hàng </Link></li>
                            <li ><Link to ='/'>Cam kết</Link></li>
                            <li > <Link to ='/'>Lịch sử</Link></li>
                            <li > <Link to ='/'>Tuyển dụng</Link></li>
                            <li > <Link to ='/'>Danh sách cửa hàng</Link></li>

                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}