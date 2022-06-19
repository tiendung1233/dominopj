import React from "react";
import Style from "./FormAC.module.css";

export default function FormAC({ setShow , setRender}) {
    const subMit = (e) => {
        e.preventDefault();
    }

    const pushDataAPI = (data)=>
    {
        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/Logi_User?fbclid=IwAR2-4MBHgA6mtRxZ5X1-H8tTKIy37zeltGOvCOCCq8lNEdnREOl0Q6aA96w", {
            method: "POST",
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
    const pushData = () => {
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
            pushDataAPI(data);
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
                    Thêm tài khoản
                </div>
                <div>
                    <label>Tài khoản</label><input type="text" /><br />
                </div>
                <div>
                    <label>Mật khẩu</label><input type="text" /><br />
                </div>
                <div>
                    <label>Email</label><input type="text" /><br />
                </div>
                <div>
                    <label>Điện thoại</label><input type="text" /><br />
                </div>
                <div>
                    <button style={{ "textAlign": "center", "borderRadius": "3px", "background": "#1baf60", "marginTop": "10px", "padding": "4px" }} onClick={pushData}>Thêm</button>
                    <button style={{ "textAlign": "center", "borderRadius": "3px", "background": "red", "marginTop": "10px", "padding": "4px", "marginLeft": "10px" }} onClick={()=>{setShow(false)
                    setRender("open")}}>Đóng</button>
                </div>
            </form>
        </>
    )
}