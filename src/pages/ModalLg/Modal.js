import React, { useState } from "react";
import "./Modal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom'
import Styles from './ModalLg.module.css'
import imgLg1 from './imgLg/dmlimglgsm.png'
export default function ModalLg() {
    const [modal, setModal] = useState(false);
    const toggleLogin = () =>{
        console.log( document.getElementsByClassName('box_lg12'))
       document.getElementsByClassName('box_lg12').classList.add('.display_none')  
              
    }
    const toggleRegin = () =>{
        document.getElementsByClassName('box_regin1k2s').classList.add('display_block')  
        document.getElementsByClassName('box_lg12').classList.add('display_none')  
            
     }
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

            <i onClick={toggleModal} className={`bi bi-person-fill block_icon_lg`}></i>
            {modal && (
                <div className={"modal"}>
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className={Styles.modal_content}>
                        <div >
                            <img src={imgLg1} className={Styles.img_Lg_sm} />
                        </div>
                        <div className={`${Styles.box_lg} box_lg12`}>
                            <div className={Styles.btn_login}>
                                    <div className={`${Styles.btn_login1} g12343` } onClick ={toggleLogin}>Đăng nhập</div>
                                   <div className={`${Styles.btn_login2} h123j` } onClick={toggleRegin}>Tạo tài khoản</div>
                            </div>
                            <div className={Styles.Email_text}> Email</div>
                            <div className={Styles.email}>
                                <input className={Styles.email_ip} typeof="email" placeholder="Nhập tên đăng nhập" />
                            </div>
                            <div className={Styles.pass_text}>Mật khẩu</div>
                            <div className={Styles.pass}>

                                <input className={Styles.pass_ip} typeof="password" placeholder="Nhập mật khẩu" />
                            </div>
                            <button className={Styles.ss}>Đăng nhập</button>
                        </div>

                        <div className={`${Styles.box_regin} box_regin1k2`}>
                            <div className={Styles.btn_regin}>
                            <div className={`${Styles.btn_login1} g12343` } onClick ={toggleLogin}>Đăng nhập</div>
                                   <div className={`${Styles.btn_login2} h123j` } onClick={toggleRegin}>Tạo tài khoản</div>
                            </div>
                            <div className={Styles.name_text}> Họ và tên</div>
                            <div className={Styles.name}>
                                <input className={Styles.name_ip} placeholder="Nhập họ và tên của bạn" />
                            </div>
                            <div className={Styles.number_text}>Số điện thoại</div>
                            <div className={Styles.number}>
                                <input className={Styles.number_ip}  placeholder="Nhập số điện thoại của bạn" />
                            </div>
                            <div className={Styles.number_text}>Số điện thoại</div>
                            <div className={Styles.number}>
                                <input className={Styles.number_ip}  placeholder="Nhập số điện thoại của bạn" />
                            </div>
                            <div className={Styles.number_text}>Số điện thoại</div>
                            <div className={Styles.number}>
                                <input className={Styles.number_ip}  placeholder="Nhập số điện thoại của bạn" />
                            </div>
                            <div className={Styles.number_text}>Số điện thoại</div>
                            <div className={Styles.number}>
                                <input className={Styles.number_ip}  placeholder="Nhập số điện thoại của bạn" />
                            </div>

                            <button className={Styles.btn_regin_ss}>Đăng kí</button>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}