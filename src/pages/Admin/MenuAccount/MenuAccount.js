import React, { useEffect, useState } from "react";
import Styles from "./MenuAccount.module.css";
import HeaderAD from "../HeaderAd";
import FormAC from "../FormAD/FormAC";
import FormSAC from "../FormAD/FormSAC";
import DeleteAC from "../FormAD/DeleteAC";
function MenuAccount() {
    const [data, setData] = useState([]);
    const [saveValue, setSaveValue] = useState("tkAD");
    const [showCreate, setShowCreate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showFixData, setShowFix] = useState(false);
    const [id, setId] = useState();
    const [render, setRender] = useState("openning");
    const deleteDataAPI = (e) => {
        fetch(`https://627a232473bad506858340e5.mockapi.io/api/pizza/Logi_User/${e}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then(() => {
                console.log("delete");
            })
    }

    const deleteData = (e) => {
        const parent = e.target.parentElement.parentElement.parentElement.id;
        console.log(parent);
        deleteDataAPI(parent);
        setRender("delete");
        setShowDelete(true)
    }


    const fixData = (e) => {
        const parent = e.target.parentElement.parentElement.parentElement.id;
        setId(parent);
        setShowFix(true);
    }

    useEffect(() => {
        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/Logi_User")
            .then((res) => res.json())
            .then((item) => {
                let itemArr = [];
                for (let i = 1; i < item.length; i++) {
                    itemArr.push(item[i]);
                }
                setData(itemArr);
            })
    }, [render])
    return (
        <div>
            <HeaderAD />
            <div className={Styles.MenuAccount}>
                {showCreate && (
                    <FormAC setShow={setShowCreate} setRender={setRender}></FormAC>
                )}
                {
                    showFixData && (
                        <FormSAC setShow={setShowFix} setRender={setRender} idAC={id} />
                    )
                }
                <select style={{ "textAlign": "center", "margin": "auto", "display": "block", "fontWeight": "500", "marginBottom": "20px" }} onChange={(ev) => {
                    if (ev.target.value === "tkAD") {
                        setSaveValue(ev.target.value);
                    }
                    if (ev.target.value === "tkND") {
                        setSaveValue(ev.target.value);
                    }
                }
                }>
                    <option value="tkAD">Tài khoản ADMIN</option>
                    <option value="tkND">Tài khoản người dùng</option>
                </select>
                <div className={Styles.MenuAccount_Them}>
                    <div>
                        <p style={{ "alignItems": "center", "fontWeight": "600" }}> Thêm tài khoản:</p>
                    </div>
                    <div>
                        <button style={{ "background": "#1baf60", "borderRadius": "5px", "marginLeft": "30px", "padding": "10px" }} onClick={() => setShowCreate(true)}>Thêm</button>
                    </div>
                </div>
                {saveValue === "tkAD" && (
                    <>
                        <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "20px" }} >Danh sách tài khoản người dùng</div>
                        <div className={Styles.MenuAccount_list}>
                            <div style={{ "fontWeight": "500" }}>
                                <ul className={Styles.MenuAccount_item}>STT</ul>
                                <ul className={Styles.MenuAccount_item}>Tài khoản</ul>
                                <ul className={Styles.MenuAccount_item}>Mật khẩu</ul>
                                <ul className={Styles.MenuAccount_item}>Email</ul>
                                <ul className={Styles.MenuAccount_item}>Điện thoại</ul>
                                <ul className={Styles.MenuAccount_item}>Xử lý</ul>
                            </div>

                            <div>
                                <ul className={Styles.MenuAccount_item}>
                                    <li>1</li>
                                </ul>
                                <ul className={Styles.MenuAccount_item}>
                                    <li>ADMIN1</li>
                                </ul>
                                <ul className={Styles.MenuAccount_item}>
                                    <li>123</li>
                                </ul>
                                <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuAccount_item}>
                                    <li>haidang@gmail.com</li>
                                </ul>
                                <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuAccount_item}>
                                    <li>0832801202</li>
                                </ul>
                                <ul className={Styles.MenuAccount_item}>
                                    <div className={Styles.MenuAccount_button}>
                                        <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "10px", "marginRight": "20px" }} onClick={fixData}>Sửa</button>
                                        <button style={{ "background": "red", "borderRadius": "5px", "padding": "10px" }} onClick={deleteData}>Xóa</button>
                                    </div>
                                </ul>
                            </div>

                            <div>
                                <ul className={Styles.MenuAccount_item}>
                                    <li>2</li>
                                </ul>
                                <ul className={Styles.MenuAccount_item}>
                                    <li>ADMIN2</li>
                                </ul>
                                <ul className={Styles.MenuAccount_item}>
                                    <li>1234</li>
                                </ul>
                                <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuAccount_item}>
                                    <li>haidang1@gmail.com</li>
                                </ul>
                                <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuAccount_item}>
                                    <li>0832801203</li>
                                </ul>
                                <ul className={Styles.MenuAccount_item}>
                                    <div className={Styles.MenuAccount_button}>
                                        <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "10px", "marginRight": "20px" }} onClick={fixData}>Sửa</button>
                                        <button style={{ "background": "red", "borderRadius": "5px", "padding": "10px" }} onClick={deleteData}>Xóa</button>
                                    </div>
                                </ul>
                            </div>
                        </div>

                    </>
                )}
                {saveValue === "tkND" && (
                    <>
                        <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "20px" }} >Danh sách tài khoản người dùng</div>
                        <div className={Styles.MenuAccount_list}>
                            <div style={{ "fontWeight": "500" }}>
                                <ul className={Styles.MenuAccount_item}>STT</ul>
                                <ul className={Styles.MenuAccount_item}>Tài khoản</ul>
                                <ul className={Styles.MenuAccount_item}>Mật khẩu</ul>
                                <ul className={Styles.MenuAccount_item}>Email</ul>
                                <ul className={Styles.MenuAccount_item}>Điện thoại</ul>
                                <ul className={Styles.MenuAccount_item}>Xử lý</ul>
                            </div>
                            {data.map((e) =>
                            (
                                <div id={e.id}>
                                    <ul className={Styles.MenuAccount_item}>
                                        <li>{e.id - 1}</li>
                                    </ul>
                                    <ul className={Styles.MenuAccount_item}>
                                        <li>{e.userName}</li>
                                    </ul>
                                    <ul className={Styles.MenuAccount_item}>
                                        <li>{e.passWord}</li>
                                    </ul>
                                    <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuAccount_item}>
                                        <li>{e.email}</li>
                                    </ul>
                                    <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuAccount_item}>
                                        <li>{e.phone}</li>
                                    </ul>
                                    <ul className={Styles.MenuAccount_item}>
                                        <div className={Styles.MenuAccount_button}>
                                            <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "10px", "marginRight": "20px" }} onClick={fixData}>Sửa</button>
                                            <button style={{ "background": "red", "borderRadius": "5px", "padding": "10px" }} onClick={deleteData}>Xóa</button>
                                        </div>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </>)}
                {showDelete && (
                    <DeleteAC setShow={setShowDelete} setRender={setRender} />
                )
                }
            </div>
        </div>
    );
}

export default MenuAccount;