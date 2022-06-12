import React, { useContext, useEffect, useState } from "react";
import "./Modal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom'
import Styles from './ModalLg.module.css'
import imgLg1 from './imgLg/dmlimglgsm.png'
import LoginContext from "../../Context/LoginContext";
import ModalLgss from "../ModalLgss/ModalLgss";
import CartContext from "../../Context/CartContext";
export default function ModalLg() {

    // Global State:
    const {changeCart,setChange} = useContext(CartContext);
    const { loginName, setLogin } = useContext(LoginContext)

    const [dataLogin, setDataLogin] = useState([]);
    const [modal, setModal] = useState(false);


    const [show, setShow] = useState(false);
    const [regis, setRegis] = useState(false);
    const [phone, setPhone] = useState()
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState();
    const [pass, setPass] = useState()
    const [checkPass, setCheckPass] = useState()

   



    // Register
    const register = () => {
        const listInput = document.querySelectorAll(".number_ip");
        // setUserName(listInput[2].value);
        // setPhone(listInput[3].value);
        // setEmail(listInput[4].value);
        // setPass(listInput[5].value)
        // setCheckPass(listInput[6].value)
        if (listInput[6].value === "" || listInput[5].value === "" || listInput[4].values === "" ||
            listInput[3].value === "" || listInput[2].value === "") {
            alert("Vui long nhap day du thong tin")
        }
        else if (listInput[5].value !== listInput[6].value) {
            alert("Vui long nhap lai mat khau")
        }
        else {
            let data = {
                "phone": listInput[3].value,
                "userName": listInput[2].value,
                "passWord": listInput[5].value,
                "email": listInput[4].value,
            }
            postApi(data);
            setRegis(listInput[4].value)
            alert("Dang ky thanh cong");
        }

        listInput[2].value = ""
        listInput[3].value = ""
        listInput[4].value = ""
        listInput[5].value = ""
        listInput[6].value = ""

    }

    // post Api:
    function postApi(data) {

        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/Logi_User", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // Call Api:
    function callApi() {
        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/Logi_User")
            .then(res => res.json())
            .then(data => {
                let user = [];
                for (let i = 1; i < data.length; i++) {
                    user.push(data[i]);
                }
                setDataLogin(user);

                // console.log(user);
            })
    }

    useEffect(() => {
        callApi();
    }, [regis])


    // Btn Đăng nhập:
    const loginBtn = () => {
        callApi();
        let emailLogin = document.querySelector('#loginBtn');
        let passLogin = document.querySelector('#loginPass');
        console.log(passLogin);
        // let emailValue = emailLogin.value;
        // let passValue = ;
        let check = dataLogin.some(e => {
            if ((emailLogin.value === e.email) && passLogin.value === e.passWord) {
                return true
            }
            return false
        })
        console.log(check);
        if (check) {
            setChange("userData")
            setLogin(emailLogin.value);
            setShow(true);
            setModal(!modal);
            // alert(loginName);
            // console.log();
        }
        else {
            alert("Tai khoan hoac mat khau cua ban bi sai");
        }

    }






    const regin = () => {
        document.querySelector('.form_login').classList.add('display_none')
        document.querySelector('.form_regin').classList.remove('display_none')
    }

    const login = () => {
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
    const number_ip = document.querySelectorAll('.number_ip')
    const eroorList = document.querySelectorAll('.eroor')
    // console.log(number_ip)
    const erorr = (el) => {

        let pass = document.querySelector('#pass');
        let checkPass = document.querySelector('#checkPass');
        console.log(pass);
        console.log(el.target);
        if (el.target.value == '') {
            // console.log(el.target.parentElement.parentElement);
            const parent = el.target.parentElement.parentElement;
            parent.querySelectorAll('div')[2].classList.remove('display_none');
            // eroorItem.classList.remove('display_none')
        }
        else if ((el.target.value !== '')) {
            const parent = el.target.parentElement.parentElement;
            parent.querySelectorAll('div')[2].classList.add('display_none');
        }

        if (pass.value !== checkPass.value) {
            const parent = checkPass.parentElement.parentElement;
            parent.querySelectorAll('div')[2].classList.remove('display_none');
        }



        // number_ip.forEach((number_item) => {
        //     if (number_item.value == '') {
        //         eroorList.forEach((eroorItem) => {
        //             eroorItem.classList.remove('display_none')
        //         })
        //     }
        // })
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
                                <div className={`${Styles.btn_login1} qwds g12343`} >

                                    Đăng nhập</div>
                                <div className={`${Styles.btn_login2} h123j`}
                                    // onClick={() => {
                                    //     setModalOpen('register')
                                    // }}
                                    onClick={regin}
                                >Tạo tài khoản</div>
                            </div>
                            <div className="">
                                <div className={Styles.Email_text}> Email</div>
                                <div className={Styles.email}>
                                    <input className={`${Styles.email_ip} number_ip`} onBlur={erorr} typeof="email" placeholder="Nhập tên đăng nhập" id='loginBtn' />
                                </div>
                                <div className={`${Styles.erorr} eroor display_none`}>Vui lòng tài khoản của bạn!</div>
                                <div className={Styles.pass_text}>Mật khẩu</div>
                                <div className={Styles.pass}>

                                    <input className={`${Styles.pass_ip} number_ip`} onBlur={erorr} typeof="password" placeholder="Nhập mật khẩu" id="loginPass" />
                                </div>
                                <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập mật khẩu của bạn!</div>
                                <button className={Styles.ss} onClick={loginBtn}>Đăng nhập
                                </button>
                            </div>
                        </div>

                        <div className={`${Styles.box_regin} form_regin display_none`}>
                            <div className={Styles.btn_regin}>
                                <div className={`${Styles.btn_login1} g12343`}
                                    onClick={login}
                                // onClick={() => { setModalOpen('login') }}
                                >Đăng nhập</div>
                                <div className={`${Styles.btn_login2} qwds h123j`} >Tạo tài khoản</div>
                            </div>
                            <div className=" ">
                                <div>
                                    <div className={Styles.name_text}> Họ và tên</div>
                                    <div className={Styles.name}>
                                        <input className={`${Styles.name_ip} number_ip`} onBlur={erorr} placeholder="Nhập họ và tên của bạn" />
                                    </div>
                                    <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập họ tên của bạn!</div>
                                </div>

                                <div>
                                    <div className={Styles.number_text}>Số điện thoại</div>
                                    <div className={Styles.number}>
                                        <input className={`${Styles.number_ip} number_ip`} onBlur={erorr} placeholder="Nhập số điện thoại của bạn" type="number" />
                                    </div>
                                    <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập số điện thoại của bạn!</div>
                                </div>

                                <div>
                                    <div className={Styles.number_text}>Email</div>
                                    <div className={Styles.number}>
                                        <input className={`${Styles.number_ip} number_ip`} onBlur={erorr} type="email" placeholder="Nhập Email của bạn" />
                                    </div>
                                    <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập email của bạn!</div>
                                </div>

                                <div>
                                    <div className={Styles.number_text}>Mật khẩu</div>
                                    <div className={Styles.number}>
                                        <input className={`${Styles.number_ip} number_ip`} id="pass" onBlur={erorr} type="password" placeholder="Nhập Mật khẩu của bạn" />
                                    </div>
                                    <div className={`${Styles.erorr} eroor display_none `}>Vui lòng nhập mật khẩu của bạn!</div>
                                </div>

                                <div>
                                    <div className={Styles.number_text}>Xác nhận mật khẩu</div>
                                    <div className={Styles.number}>
                                        <input className={`${Styles.number_ip} number_ip`} id="checkPass" onBlur={erorr} type="password" placeholder="Xác nhận mật khẩu của bạn" />
                                    </div>
                                    <div className={`${Styles.erorr} eroor display_none `}>Mật khẩu không trùng khớp!</div>
                                </div>

                                <button className={Styles.btn_regin_ss} onClick={register}>Đăng kí</button>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {show && (
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        ĐĂNG NHẬP THÀNH CÔNG
                    </div>
                    <button 
                    style={{position:"absolute","top":"50%","padding":"0 25px",transform:"translate(-50%)",'borderRadius':"8px",fontWeight:"bold"}}
                    onClick={()=>{
                        setChange("user")
                        setShow(false);
                    }}>
                    OK</button>
                </div>
            )}
        </>
    );
}