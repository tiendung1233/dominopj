import React from "react";
import Style from "./ModalBill.module.css"

export default function ModalBill({ setShow, name, price, count }) {
    console.log(name);
    return (
        <div className={Style.ModalBill}>
            <div className={Style.ModalBill_items}>
                <div style={{ "fontWeight": "600","textAlign":"center"}}>
                    Chi tiết hóa đơn
                </div>
                <div className={Style.ModalBill_item}>
                    <div>
                        <label>Tên</label>
                        <div>
                            {name.map(e=>(
                                <>
                                <li>{e}</li>
                                </>
                            ))}
                        </div>
                    </div>
                    <div> 
                        <label>Giá</label>
                        <div>
                            {price.map(e=>(
                                <>
                                <li>{e}</li>
                                </>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label>Số lượng</label>
                        <div>
                            {count.map(e=>(
                                <><li>{e}</li></>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={Style.ModalBill_bt}>
                    <button onClick={() => {
                        setShow(false)
                    }} style={{ "textAlign": "center", "borderRadius": "3px", "background": "red", "marginTop": "10px", "padding": "4px", "marginLeft": "10px","color":"white" }}>Đóng</button>
                </div>
            </div>
        </div>
        
    )

}