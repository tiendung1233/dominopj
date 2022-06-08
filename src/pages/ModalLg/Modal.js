import React, { useState } from "react";
import "./Modal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom'
import Styles from './ModalLg.module.css'
import imgLg1 from './imgLg/dmlimglgsm.png'
export default function ModalLg() {
    const [modal, setModal] = useState(false);
    // const [modalOpen, setModalOpen] = useState('')

    // if(modalOpen =='register'){
    //     console.log(1)
    //     document.querySelector('.form_login').classList.add('display_none')
    //     document.querySelector('.form_regin').classList.remove('display_none')
    // }
    // if(modalOpen =='login'){
    //     console.log(2)
    //     document.querySelector('.form_regin').classList.add('display_none')
    //     document.querySelector('.form_login').classList.remove('display_none')


    // }
    const regin = () =>{
        document.querySelector('.form_login').classList.add('display_none')
        document.querySelector('.form_regin').classList.remove('display_none')
    }
    
    const login = () =>{
        document.querySelector('.form_regin').classList.add('display_none')
        document.querySelector('.form_login').classList.remove('display_none')
    }
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
        
    } else {

        document.body.classList.remove('active-modal')
    }
    const number_ip =document.querySelectorAll('.number_ip')
    const eroorList = document.querySelectorAll('.eroor')
    console.log(number_ip)
    const erorr = () =>{

        number_ip.forEach((number_item)=>{
            if(number_item.value == ''){
                eroorList.forEach((eroorItem) =>{
                    eroorItem.classList.remove('display_none')
                })
            }
        })
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
                        <div className={`${Styles.box_lg} form_login`}>
                            <div className={Styles.btn_login}>
                                <div className={`${Styles.btn_login1} qwds g12343`}>

                                    Đăng nhập</div>
                                <div className={`${Styles.btn_login2} h123j`} 
                                // onClick={() => {
                                //     setModalOpen('register')
                                // }}
                                onClick = {regin}
                                >Tạo tài khoản</div>
                            </div>
                            <div className="">
                                <div className={Styles.Email_text}> Email</div>
                                <div className={Styles.email}>
                                    <input className={`${Styles.email_ip} number_ip`} onBlur={erorr}  typeof="email" placeholder="Nhập tên đăng nhập" />
                                </div>
                                <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập số điện thoại của bạn!</div>
                                <div className={Styles.pass_text}>Mật khẩu</div>
                                <div className={Styles.pass}>

                                    <input className={`${Styles.pass_ip} number_ip`} onBlur={erorr}  typeof="password" placeholder="Nhập mật khẩu" />
                                </div>
                                <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập số điện thoại của bạn!</div>
                                <button className={Styles.ss}>Đăng nhập</button>
                            </div>
                        </div>

                        <div className={`${Styles.box_regin} form_regin display_none`}>
                            <div className={Styles.btn_regin}>
                                <div className={`${Styles.btn_login1} g12343`} 
                                onClick = {login}
                                // onClick={() => { setModalOpen('login') }}
                                >Đăng nhập</div>
                                <div className={`${Styles.btn_login2} qwds h123j`} >Tạo tài khoản</div>
                            </div>
                            <div className=" ">
                                <div className={Styles.name_text}> Họ và tên</div>
                                <div className={Styles.name}>
                                    <input className={`${Styles.name_ip} number_ip`} onBlur={erorr}  placeholder="Nhập họ và tên của bạn" />
                                </div>
                                <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập số điện thoại của bạn!</div>

                                <div className={Styles.number_text}>Số điện thoại</div>
                                <div className={Styles.number}>
                                    <input className={`${Styles.number_ip} number_ip`} onBlur={erorr}  placeholder="Nhập số điện thoại của bạn" />
                                </div>
                                <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập số điện thoại của bạn!</div>

                                <div className={Styles.number_text}>Email</div>
                                <div className={Styles.number}>
                                    <input className={`${Styles.number_ip} number_ip`} onBlur={erorr}  type="email" placeholder="Nhập Email của bạn" />
                                </div>
                                <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập số điện thoại của bạn!</div>

                                <div className={Styles.number_text}>Mật khẩu</div>
                                <div className={Styles.number}>
                                    <input className={`${Styles.number_ip} number_ip`} onBlur={erorr}  type="password" placeholder="Nhập Mật khẩu của bạn" />
                                </div>
                                <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập số điện thoại của bạn!</div>

                                <div className={Styles.number_text}>Xác nhận mật khẩu</div>
                                <div className={Styles.number}>
                                    <input className={`${Styles.number_ip} number_ip`} onBlur={erorr}  type="password" placeholder="Xác nhận mật khẩu của bạn" />
                                </div>
                                <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập số điện thoại của bạn!</div>


                                <button className={Styles.btn_regin_ss}>Đăng kí</button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}