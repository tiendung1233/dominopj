import React, { useEffect, useState } from "react";
import Styles from "./MenuManager.module.css";
import FormAD from "../FormAD/FormAD";
import FormSMD from "../FormAD/FormSMD";
import DeleteMD from "../FormAD/DeleteMD";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
function MenuManager() {
    const [data, setData] = useState([]);
    const [miY, setMiY] = useState([]);
    const [monPhu, setMonPhu] = useState([]);
    const [trangMieng, setTrangMieng] = useState([]);
    const [nuocUong, setNuocUong] = useState([]);

    const [showCreate, setShowCreate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showFix, setShowFix] = useState(false);
    const [saveValue, setSaveValue] = useState("PIZA");
    const [id, setId] = useState();
    const [render, setRender] = useState("openning");
    const deleteDataAPI = (e) => {
        fetch(`https://627a232473bad506858340e5.mockapi.io/api/pizza/pizza/${e}`, {
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
        setShowDelete(true);
    }


    const fixData = (e) => {
        const parent = e.target.parentElement.parentElement.parentElement.id;
        setId(parent);
        setShowFix(true);
    }
    useEffect(() => {
        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/pizza")
            .then((res) => res.json())
            .then((item) => {
                let itemArr = [];
                let itemMiY = [];
                let itemMonPhu = [];
                let itemTrangMieng = [];
                let itemNuocUong = [];
                for (let i = 1; i < item.length; i++) {
                    if (item[i].title === "Tat ca") {
                        itemArr.push(item[i]);
                    }
                    if (item[i].title === "My y") {
                        itemMiY.push(item[i]);
                    }
                    if (item[i].title === "Mon phu") {
                        itemMonPhu.push(item[i]);
                    }
                    if (item[i].title === "Trang mieng") {
                        itemTrangMieng.push(item[i]);
                    }
                    if (item[i].title === "Nuoc uong") {
                        itemNuocUong.push(item[i]);
                    }
                }
                console.log(itemMiY);
                console.log(itemMonPhu);
                setData(itemArr);
                setMiY(itemMiY);
                setMonPhu(itemMonPhu);
                setTrangMieng(itemTrangMieng);
                setNuocUong(itemNuocUong);

            })
    }, [render])

    return (
        <div className={Styles.MenuManager}>
            {showCreate && (<FormAD setShow={setShowCreate} setRender={setRender} />)}
            {showFix && (<FormSMD setShow={setShowFix} setRender={setRender} idItem={id} />)}
            <div className={Styles.MenuManager_Them}>
                <div><i class="bi bi-person-circle" style={{ "marginLeft": "400px","fontSize":"50px"}}></i></div>
                <div>
                    <p style={{ "marginLeft": "20px","alignItems": "center", "fontWeight": "600" }}>Th??m d??? li???u v??o qu???n l?? th???c ????n :</p>
                </div>
                <div>
                    <button className="btn-themTD" style={{ "background": "#1baf60", "borderRadius": "5px", "marginLeft": "50px", "padding": "10px" }} onClick={() => setShowCreate(true)}>Th??m</button>
                </div>
            </div>
            <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "20px" }}>Danh s??ch th???c ????n</div>
            <select style={{ "textAlign": "center", "margin": "auto", "display": "block", "fontWeight": "500" }} onChange={(ev) => {
                if (ev.target.value === "PIZA") {
                    setSaveValue(ev.target.value);
                }
                if (ev.target.value === "MIY") {
                    setSaveValue(ev.target.value);
                }
                if (ev.target.value === "MONPHU") {
                    setSaveValue(ev.target.value);
                }
                if (ev.target.value === "TRANGMIENG") {
                    setSaveValue(ev.target.value)
                }
                if (ev.target.value === "DOUONG") {
                    setSaveValue(ev.target.value)
                }

            }}>
                <option value="PIZA">Piazza</option>
                <option value="MIY">M??? ??</option>
                <option value="MONPHU">M??n ph???</option>
                <option value="TRANGMIENG">Tr??ng mi???ng</option>
                <option value="DOUONG">????? u???ng</option>
            </select>
            {saveValue === "PIZA" && (
                <>
                    <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "100px" }}>Danh s??ch Piazza</div>
                    <div className={Styles.MenuManager_list} style={{ "fontWeight": "500" }}>
                        <div>
                            <ul className={Styles.MenuManager_item}>STT</ul>
                            <ul className={Styles.MenuManager_item}>T??n</ul>
                            <ul className={Styles.MenuManager_item}>Gi??</ul>
                            <ul className={Styles.MenuManager_item}>Link ???nh</ul>
                            <ul className={Styles.MenuManager_item}>X??? l??</ul>
                        </div>
                        {data.map((e, index) => (
                            <div id={e.id}>
                                <ul className={Styles.MenuManager_item}>
                                    <li>{index + 1}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <li>{e.name}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <li>{e.cost}</li>
                                </ul>

                                <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuManager_item}>
                                    <li>{e.img}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <div className={Styles.MenuManager_button}>
                                        <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "15px" }} onClick={fixData}>S???a</button>
                                        <button style={{ "background": "red", "borderRadius": "5px", "padding": "15px", "marginLeft": "20px" }} onClick={deleteData}>X??a</button>
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
                </>
            )}


            {saveValue === "MIY" && (
                <>
                    <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "100px" }}>Danh s??ch M??? ??</div>
                    <div className={Styles.MenuManager_list} style={{ "fontWeight": "500" }}>
                        <div>
                            <ul className={Styles.MenuManager_item}>STT</ul>
                            <ul className={Styles.MenuManager_item}>T??n</ul>
                            <ul className={Styles.MenuManager_item}>Gi??</ul>
                            <ul className={Styles.MenuManager_item}>Link ???nh</ul>
                            <ul className={Styles.MenuManager_item}>X??? l??</ul>
                        </div>
                        {miY.map((e, index) => (
                            <div id={e.id}>
                                <ul className={Styles.MenuManager_item}>
                                    <li>{index + 1}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <li>{e.name}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <li>{e.cost}</li>
                                </ul>

                                <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuManager_item}>
                                    <li>{e.img}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <div className={Styles.MenuManager_button}>
                                        <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "15px" }} onClick={fixData}>S???a</button>
                                        <button style={{ "background": "red", "borderRadius": "5px", "padding": "15px", "marginLeft": "20px" }} onClick={deleteData}>X??a</button>
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
                </>
            )}


            
            {saveValue === "MONPHU" && (
                <>
                    <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "100px" }}>Danh s??ch M??n ph???</div>
                    <div className={Styles.MenuManager_list} style={{ "fontWeight": "500" }}>
                        <div>
                            <ul className={Styles.MenuManager_item}>STT</ul>
                            <ul className={Styles.MenuManager_item}>T??n</ul>
                            <ul className={Styles.MenuManager_item}>Gi??</ul>
                            <ul className={Styles.MenuManager_item}>Link ???nh</ul>
                            <ul className={Styles.MenuManager_item}>X??? l??</ul>
                        </div>
                        {monPhu.map((e, index) => (
                            <div id={e.id}>
                                <ul className={Styles.MenuManager_item}>
                                    <li>{index + 1}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <li>{e.name}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <li>{e.cost}</li>
                                </ul>

                                <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuManager_item}>
                                    <li>{e.img}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <div className={Styles.MenuManager_button}>
                                        <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "15px" }} onClick={fixData}>S???a</button>
                                        <button style={{ "background": "red", "borderRadius": "5px", "padding": "15px", "marginLeft": "20px" }} onClick={deleteData}>X??a</button>
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
                </>
            )}



            {saveValue === "TRANGMIENG" && (
                <>
                    <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "100px" }}>Danh s??ch Tr??ng mi???ng</div>
                    <div className={Styles.MenuManager_list} style={{ "fontWeight": "500" }}>
                        <div>
                            <ul className={Styles.MenuManager_item}>STT</ul>
                            <ul className={Styles.MenuManager_item}>T??n</ul>
                            <ul className={Styles.MenuManager_item}>Gi??</ul>
                            <ul className={Styles.MenuManager_item}>Link ???nh</ul>
                            <ul className={Styles.MenuManager_item}>X??? l??</ul>
                        </div>
                        {trangMieng.map((e, index) => (
                            <div id={e.id}>
                                <ul className={Styles.MenuManager_item}>
                                    <li>{index + 1}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <li>{e.name}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <li>{e.cost}</li>
                                </ul>

                                <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuManager_item}>
                                    <li>{e.img}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <div className={Styles.MenuManager_button}>
                                        <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "15px" }} onClick={fixData}>S???a</button>
                                        <button style={{ "background": "red", "borderRadius": "5px", "padding": "15px", "marginLeft": "20px" }} onClick={deleteData}>X??a</button>
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
                </>
            )}



            {saveValue === "DOUONG" && (
                <>
                    <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "100px" }}>Danh s??ch N?????c u???ng</div>
                    <div className={Styles.MenuManager_list} style={{ "fontWeight": "500" }}>
                        <div>
                            <ul className={Styles.MenuManager_item}>STT</ul>
                            <ul className={Styles.MenuManager_item}>T??n</ul>
                            <ul className={Styles.MenuManager_item}>Gi??</ul>
                            <ul className={Styles.MenuManager_item}>Link ???nh</ul>
                            <ul className={Styles.MenuManager_item}>X??? l??</ul>
                        </div>
                        {nuocUong.map((e, index) => (
                            <div id={e.id}>
                                <ul className={Styles.MenuManager_item}>
                                    <li>{index + 1}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <li>{e.name}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <li>{e.cost}</li>
                                </ul>

                                <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuManager_item}>
                                    <li>{e.img}</li>
                                </ul>

                                <ul className={Styles.MenuManager_item}>
                                    <div className={Styles.MenuManager_button}>
                                        <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "15px" }} onClick={fixData}>S???a</button>
                                        <button style={{ "background": "red", "borderRadius": "5px", "padding": "15px", "marginLeft": "20px" }} onClick={deleteData}>X??a</button>
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
                </>
            )}



            {showDelete && (
                <DeleteMD setShow={setShowDelete} setRender={setRender} />
            )}
        </div>
    );
}

export default MenuManager;