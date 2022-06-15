import React from "react";
import style from "./HeaderAD.module.css"

export default function HeaderAD() {
    return (
        <div class="container-fluid">
            <div style={{"textAlign":"center","fontWeight":"800","fontSize":"20px","marginTop":"40px","marginBottom":"20px"}}>
                <p>
                    Quản lý tài khoản
                </p>
            </div>
            
            <div class="row" style={{"marginLeft":"40px"}}>
                <div class="col-md-12">
                    <div class="row">
                    <div className={`col-md-3 ${style.qlDonHang}`} >
                            <p>
                                Quản lý thực đơn
                            </p>
                        </div>
                        <div className={`col-md-3 ${style.qlDonHang}`} >
                            <p>
                                Quản lý đơn hàng
                            </p>
                        </div>
                        <div className={`col-md-3 ${style.qlDonHang}`} >
                            <p>
                                Quản lý tài khoản
                            </p>
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

