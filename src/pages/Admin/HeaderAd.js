import React from "react";
import { Route, Routes, Link } from 'react-router-dom'
import style from "./HeaderAD.module.css"
import Admin from "./Admin";
import MenuBill from "./MenuBill/MenuBill";
import MenuAccount from "./MenuAccount/MenuAccount";
export default function HeaderAD() {
    return (
        <div class="container-fluid">
            
            <div class="row" style={{"marginLeft":"40px"}}>
                <div class="col-md-12">
                    <div class="row">
                    <div className={`col-md-3 ${style.qlDonHang}`} >
                            <Link to = '/admin/MenuManager' >
                                Quản lý thực đơn
                            </Link>
                        </div>
                        <div className={`col-md-3 ${style.qlDonHang}`} >
                            <Link to ='/admin/MenuBill'>
                                Quản lý đơn hàng
                            </Link>
                        </div>
                        <div className={`col-md-3 ${style.qlDonHang}`} >
                            <Link to ='/admin/MenuAccount'>
                                Quản lý tài khoản
                            </Link>
                        </div>
                        <div className={`col-md-3 ${style.qlDonHang}`} >
                            <p>
                                Quản lý khuyến mãi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

