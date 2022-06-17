import React, { useEffect, useState } from "react";
import Styles from "./MenuAccount.module.css";
import HeaderAD from "../HeaderAd";
import FormAC from "../FormAD/FormAC";
import DeleteAC from "../FormAD/DeleteAC";
function MenuAccount() {
    const [data, setData] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [render, setRender] = useState("openning");
    const deleteDataAPI = (e) => 
    {
        fetch(`https://627a232473bad506858340e5.mockapi.io/api/pizza/Logi_User/${e}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res)=>res.json())
        .then(()=>{
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
                <div className={Styles.MenuAccount_Them}>
                    <div>
                        <p style={{ "alignItems": "center", "fontWeight": "600" }}> Thêm tài khoản:</p>
                    </div>
                    <div>
                        <button style={{ "background": "#1baf60", "borderRadius": "5px", "marginLeft": "30px", "padding": "10px" }} onClick={() => setShowCreate(true)}>Thêm</button>
                    </div>
                </div>
                <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "20px" }} >Danh sách tài khoản được cấp</div>
                <div className={Styles.MenuAccount_list}>
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
                            <ul className={Styles.MenuAccount_item}>
                                <li>{e.email}</li>
                            </ul>
                            <ul className={Styles.MenuAccount_item}>
                                <li>{e.phone}</li>
                            </ul>
                            <ul className={Styles.MenuAccount_item}>
                                <div className={Styles.MenuAccount_button}>
                                    <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "10px", "marginRight": "20px" }}>Sửa</button>
                                    <button style={{ "background": "red", "borderRadius": "5px", "padding": "10px" }} onClick={deleteData}>Xóa</button>
                                </div>
                            </ul>
                        </div>
                    ))}
                    {showDelete && (
                        <DeleteAC setShow={setShowDelete} setRender={setRender} />
                    )
                    }
                </div>
            </div>

        </div>
    );
}

export default MenuAccount;