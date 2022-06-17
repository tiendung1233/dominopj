import React, { useState } from "react";
import Style from "./FormAD.module.css";
export default function FormAD({ setShow,setRender }) {

    const subMit = (e) => {
        e.preventDefault();
    }
    //them du lieu
    const pushDataAPI = (data) => {
        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/pizza", {
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
        const parent = document.querySelector("form");
        const values = document.querySelectorAll("input");
        const title = values[0].value;
        const type = values[1].value;
        const name = values[2].value;
        const image = values[3].value;
        const cost = values[4].value;
        const rate = values[5].value;
        if(title !=="" || type !=="" || name !=="" || image !=="" || cost !=="" || rate !=="" )
        {
        let data = {
            "type": type,
            "name": name,
            "img": image,
            "cost": cost,
            "rate": rate,
            "title":title
        }
        pushDataAPI(data);
        // setShow(false);
        setRender("render");
        values[0].value ="";
        values[1].value ="";
        values[2].value ="";
        values[3].value ="";
        values[4].value ="";
        values[5].value="";
        }
    }
    return (
        <>
            <form className={Style.FormAD} onSubmit={subMit}>
                <div style={{ "fontWeight": "600" }}>
                    Thêm thực đơn
                </div>
                <div>
                    <label>Title</label><input type="text"/><br />
                </div>
                <div>
                    <label>Type</label><input type="text"/><br />
                </div>
                <div>
                    <label>Name</label><input type="text"/><br />
                </div>
                <div>
                    <label> Image</label><input type="text" /><br />
                </div>
                <div>
                    <label>Cost</label><input type="text"/><br />
                </div>
                <div>
                    <label>Rate</label><input type="text"/><br />
                </div>
                <div>
                    <button onClick={pushData} style={{ "textAlign": "center", "borderRadius": "3px", "background": "#1baf60", "marginTop": "10px", "padding": "4px" }}>Thêm</button>
                    <button onClick={() => {setShow(false)
                    setRender("open")}} style={{ "textAlign": "center", "borderRadius": "3px", "background": "red", "marginTop": "10px", "padding": "4px", "marginLeft": "10px" }}>Đóng</button>
                </div>
            </form>
        </>)
}