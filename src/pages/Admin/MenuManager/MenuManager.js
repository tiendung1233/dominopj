import React, { useEffect, useState } from "react";
import Styles from "./MenuManager.module.css";
function MenuManager() {
    const [data, setData] = useState([]);
    useEffect(() => 
    {
        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/pizza")
            .then((res) => res.json())
            .then((item) => {
                setData(item)
                console.log(data);
            })
    },[])
    return (
        <div className={Styles.MenuManager}>
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
                                <button style={{"background":"#4dce1b","borderRadius":"5px","padding":"10px"}}>Sua</button>
                                <button style={{"background":"#ce334a","borderRadius":"5px","padding":"10px"}}>Xoa</button>
                            </div>
                        </ul>
                    </>
                ))}


            </div>
        </div>
    );
}

export default MenuManager;