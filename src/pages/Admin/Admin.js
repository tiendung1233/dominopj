import React from "react";
import HeaderAD from "./HeaderAd";
import MenuManager from "./MenuManager/MenuManager";
import MenuBill from "./MenuBill/MenuBill";
import MenuAccount from "./MenuAccount/MenuAccount";


export default function Admin()
{
    return(
       <div>
            <HeaderAD/>
            <MenuManager/>
            <MenuBill/>
            <MenuAccount/>
            
       </div>
    )
}