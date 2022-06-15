import React, { useEffect, useState } from "react";
import Styles from "./MenuAccount.module.css";
import HeaderAD from "../HeaderAd";
function MenuAccount() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/Logi_User?fbclid=IwAR2-4MBHgA6mtRxZ5X1-H8tTKIy37zeltGOvCOCCq8lNEdnREOl0Q6aA96w")
            .then((res) => res.json())
            .then((item) => {
                let itemArr = [];
                for (let i = 1; i < item.length; i++) {
                    itemArr.push(item[i]);
                }
                setData(itemArr);
            })
    }, [])
    return (
        <>
            <HeaderAD />
            <div className={Styles.MenuAccount}>
                <div style={{ "textAlign": "center", "fontWeight": "600","marginBottom":"10px","marginTop":"20px" }}>Danh sách tài khoản được cấp</div>
                <div className={Styles.MenuAccount_list}>
                    {data.map((e) =>
                    (
                        <>
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
                                    <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "10px" }}>Sửa</button>
                                    <button style={{ "background": "red", "borderRadius": "5px", "padding": "10px" }}>Xóa</button>
                                </div>
                            </ul>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MenuAccount;