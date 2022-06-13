import React, { useEffect, useState } from "react";
import Styles from "./MenuManager.module.css";
function MenuManager() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/pizza")
            .then((res) => res.json())
            .then((item) => {
                setData(item)
            })
    }, [])
    return (
        <div className={Styles.MenuManager}>
            <div className={Styles.MenuManager_Them}>
                <div>
                    <p style={{ "marginLeft": "400px", "alignItems": "center" }}>Thêm dữ liệu vào quản lý thực đơn :</p>
                </div>
                <div>
                    <button className="btn-themTD" style={{"background":"#1baf60","borderRadius":"5px","marginLeft":"50px","padding":"10px"}}>Thêm</button>
                </div>
            </div>
            <div style={{ "textAlign": "center", "fontWeight": "600","marginBottom":"10px","marginTop":"20px" }}>Danh sách thực đơn</div>
            <div className={Styles.MenuManager_list}>
                {data.map((e) => (
                    <>
                        <ul className={Styles.MenuManager_item}>
                            <li>{e.id}</li>
                        </ul>

                        <ul className={Styles.MenuManager_item}>
                            <li>{e.name}</li>
                        </ul>

                        <ul className={Styles.MenuManager_item}>
                            <li>{e.cost}</li>
                        </ul>

                        <ul className={Styles.MenuManager_item}>
                            <li>{e.img}</li>
                        </ul>

                        <ul className={Styles.MenuManager_item}>
                            <div className={Styles.MenuManager_button}>
                                <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "10px" }}>Sửa</button>
                                <button style={{ "background": "red", "borderRadius": "5px", "padding": "10px" }}>Xóa</button>
                            </div>
                        </ul>
                    </>
                ))}


            </div>
        </div>
    );
}

export default MenuManager;