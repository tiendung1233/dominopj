import React from "react";
import Style from "./FormAC.module.css";

export default function FormSAC({ setShow , setRender ,idAC}) {
    const subMit = (e) => {
        e.preventDefault();
    }

    const fixDataAPI = (data,id)=>
    {
        fetch(`https://627a232473bad506858340e5.mockapi.io/api/pizza/Logi_User/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
    }
    const fixData = () => {
        const values = document.querySelectorAll("input")
        const userName = values[0].value;
        const passWord = values[1].value;
        const email = values[2].value;
        const phone = values[3].value;
        if (userName !== "" || passWord !== "" || email !== "" || phone !== "") {
            let data = {
                "userName":userName,
                "passWord":passWord,
                "email":email,
                "phone":phone,
            }
            fixDataAPI(data,idAC);
            setRender("render");
            values[0].value ="";
            values[1].value ="";
            values[2].value ="";
            values[3].value ="";
        }
        
    }

    return (
        <>
            <form className={Style.FormAC} onSubmit={subMit}>
                <div style={{ "fontWeight": "600" }}>
                    Sửa tài khoản
                </div>
                <div>
                    <label>userName</label><input type="text" /><br />
                </div>
                <div>
                    <label>passWord</label><input type="text" /><br />
                </div>
                <div>
                    <label>email</label><input type="text" /><br />
                </div>
                <div>
                    <label>phone</label><input type="text" /><br />
                </div>
                <div>
                    <button style={{ "textAlign": "center", "borderRadius": "3px", "background": "#1baf60", "marginTop": "10px", "padding": "4px" }} onClick={fixData}>Thêm</button>
                    <button style={{ "textAlign": "center", "borderRadius": "3px", "background": "red", "marginTop": "10px", "padding": "4px", "marginLeft": "10px" }} onClick={()=>{setShow(false)
                    setRender("open")}}>Đóng</button>
                </div>
            </form>
        </>
    )
}