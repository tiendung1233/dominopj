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


    // Btn ????ng nh???p:
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
            // setShow(true);
            // alert("????ng nh???p th??nh c??ng")
            setModal(!modal);
            setChange("userData")
            setLogin(emailLogin.value);
            
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

                                    ????ng nh???p</div>
                                <div className={`${Styles.btn_login2} h123j`}
                                    // onClick={() => {
                                    //     setModalOpen('register')
                                    // }}
                                    onClick={regin}
                                >T???o t??i kho???n</div>
                            </div>
                            <div className="">
                                <div className={Styles.Email_text}> Email</div>
                                <div className={Styles.email}>
                                    <input className={`${Styles.email_ip} number_ip`} onBlur={erorr} typeof="email" placeholder="Nh???p t??n ????ng nh???p" id='loginBtn' />
                                </div>
                                <div className={`${Styles.erorr} eroor display_none`}>Vui l??ng t??i kho???n c???a b???n!</div>
                                <div className={Styles.pass_text}>M???t kh???u</div>
                                <div className={Styles.pass}>

                                    <input className={`${Styles.pass_ip} number_ip`} onBlur={erorr} typeof="password" placeholder="Nh???p m???t kh???u" id="loginPass" />
                                </div>
                                <div className={`${Styles.erorr} eroor display_none`}>Vui l??ng nh???p m???t kh???u c???a b???n!</div>
                                <button className={Styles.ss} onClick={loginBtn}>????ng nh???p
                                </button>
                            </div>
                        </div>

                        <div className={`${Styles.box_regin} form_regin display_none`}>
                            <div className={Styles.btn_regin}>
                                <div className={`${Styles.btn_login1} g12343`}
                                    onClick={login}
                                // onClick={() => { setModalOpen('login') }}
                                >????ng nh???p</div>
                                <div className={`${Styles.btn_login2} qwds h123j`} >T???o t??i kho???n</div>
                            </div>
                            <div className=" ">
                                <div>
                                    <div className={Styles.name_text}> H??? v?? t??n</div>
                                    <div className={Styles.name}>
                                        <input className={`${Styles.name_ip} number_ip`} onBlur={erorr} placeholder="Nh???p h??? v?? t??n c???a b???n" />
                                    </div>
                                    <div className={`${Styles.erorr} eroor display_none`}>Vui l??ng nh???p h??? t??n c???a b???n!</div>
                                </div>

                                <div>
                                    <div className={Styles.number_text}>S??? ??i???n tho???i</div>
                                    <div className={Styles.number}>
                                        <input className={`${Styles.number_ip} number_ip`} onBlur={erorr} placeholder="Nh???p s??? ??i???n tho???i c???a b???n" type="number" />
                                    </div>
                                    <div className={`${Styles.erorr} eroor display_none`}>Vui l??ng nh???p s??? ??i???n tho???i c???a b???n!</div>
                                </div>

                                <div>
                                    <div className={Styles.number_text}>Email</div>
                                    <div className={Styles.number}>
                                        <input className={`${Styles.number_ip} number_ip`} onBlur={erorr} type="email" placeholder="Nh???p Email c???a b???n" />
                                    </div>
                                    <div className={`${Styles.erorr} eroor display_none`}>Vui l??ng nh???p email c???a b???n!</div>
                                </div>

                                <div>
                                    <div className={Styles.number_text}>M???t kh???u</div>
                                    <div className={Styles.number}>
                                        <input className={`${Styles.number_ip} number_ip`} id="pass" onBlur={erorr} type="password" placeholder="Nh???p M???t kh???u c???a b???n" />
                                    </div>
                                    <div className={`${Styles.erorr} eroor display_none `}>Vui l??ng nh???p m???t kh???u c???a b???n!</div>
                                </div>

                                <div>
                                    <div className={Styles.number_text}>X??c nh???n m???t kh???u</div>
                                    <div className={Styles.number}>
                                        <input className={`${Styles.number_ip} number_ip`} id="checkPass" onBlur={erorr} type="password" placeholder="X??c nh???n m???t kh???u c???a b???n" />
                                    </div>
                                    <div className={`${Styles.erorr} eroor display_none `}>M???t kh???u kh??ng tr??ng kh???p!</div>
                                </div>

                                <button className={Styles.btn_regin_ss} onClick={register}>????ng k??</button>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {/* {(show) && (
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        ????NG NH???P TH??NH C??NG
                    </div>
                    <button 
                    style={{position:"absolute","top":"50%","padding":"0 25px",transform:"translate(-50%)",'borderRadius':"8px",fontWeight:"bold"}}
                    onClick={()=>{
                        setChange("user")
                        setShow(false);
                    }}>
                    OK</button>
                </div>
            )} */}
        </>
    );
}