import React, { useEffect, useState } from "react";
import Styles from "./MenuManager.module.css";
import FormAD from "../FormAD/FormAD";
import DeleteMD from "../FormAD/DeleteMD";
function MenuManager() {
    const [data, setData] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showDelete,setShowDelete]=useState(false);
    const [render,setRender]= useState("openning");
    const deleteDataAPI = (e) =>
    {
        fetch(`https://627a232473bad506858340e5.mockapi.io/api/pizza/pizza/${e}`,{
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
    const deleteData = (e)=>
    {   
        const parent = e.target.parentElement.parentElement.parentElement.id;
        console.log(parent);
        deleteDataAPI(parent);
        setRender("delete");
        setShowDelete(true);
    }
    useEffect(() => {
        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/pizza")
            .then((res) => res.json())
            .then((item) => {
                setData(item)
            })
    }, [render])

    return (
        <div className={Styles.MenuManager}>
            {showCreate && (
                    <FormAD setShow={setShowCreate} setRender={setRender} />
            )}
            
            <div className={Styles.MenuManager_Them}>
                <div>
                    <p style={{ "marginLeft": "400px", "alignItems": "center" }}>Thêm dữ liệu vào quản lý thực đơn :</p>
                </div>
                <div>
                    <button className="btn-themTD" style={{ "background": "#1baf60", "borderRadius": "5px", "marginLeft": "50px", "padding": "10px" }} onClick={() => setShowCreate(true)}>Thêm</button>
                </div>
            </div>
            <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "20px" }}>Danh sách thực đơn</div>
            <div className={Styles.MenuManager_list}>
                {data.map((e) => (
                    <div id={e.id}>
                        <ul  className={Styles.MenuManager_item}>
                            <li>{e.id}</li>
                        </ul>

                        <ul  className={Styles.MenuManager_item}>
                            <li>{e.name}</li>
                        </ul>

                        <ul className={Styles.MenuManager_item}>
                            <li>{e.cost}</li>
                        </ul>

                        <ul style={{"textOverflow":"clip","whiteSpace":"nowrap","overflow":"hidden"}} className={Styles.MenuManager_item}>
                            <li>{e.img}</li>
                        </ul>

                        <ul className={Styles.MenuManager_item}>
                            <div className={Styles.MenuManager_button}>
                                <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "15px" }}>Sửa</button>
                                <button style={{ "background": "red", "borderRadius": "5px", "padding": "15px","marginLeft":"20px" }} onClick={deleteData}>Xóa</button>
                            </div>
                        </ul>
                    </div>
                ))}
                {showDelete && (
                    <DeleteMD setShow={setShowDelete} setRender={setRender} />
                )}
            </div>
        </div>
    );
}

export default MenuManager;