import React from "react";

export default function DeleteMD({setShow,setRender})
{
    const test = setShow;
    return(
        <>
            <div style={{"padding":"30px","background":"yellow","textAlign":"center","width":"500px","display":"flex","flexDirection":"column","margin":"auto","position":"fixed","zIndex":"100","top":"30%","left":"50%","transform":"translate(-50%)"}}>
                <div>Ban vua xoa thanh cong du lieu</div>
                <div style={{"margin":"auto"}}><button style={{"background":"red","padding":"10px","borderRadius":"5px"}} 
                onClick={
                ()=>{
                setShow(false)
                console.log(test);
                setRender("close")}}>OK</button></div>
            </div>
        </>
    )
}