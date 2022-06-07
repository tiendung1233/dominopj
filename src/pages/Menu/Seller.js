import React, { useState } from "react";
import styles from "./Seller.module.css"
import Menu_pizza_details from "../../components/Layout/DefaultLayout/Menu_Details/Menu_details";
import { Link } from "react-router-dom";

export default function Seller() {
    // Set Props
    const [img, setImg] = useState('');
    const [name, setName] = useState();
    const [type,setType] = useState();
    const [detail,setDetail] = useState();

   const handleClick = (el)=>{
    const parentEl = el.target.parentElement.parentElement;
    setImg(el.target.src)
    // document.querySelector()
    setName(parentEl.querySelectorAll("h3")[0].innerHTML)
    console.log(name);
    setType("favorite")
    setDetail(true)
   }


    return (
        <div className={styles.main} >
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="row my-5" style={{ borderBottom: "1px solid #ccc" }}>
                            <div className="col-md-3 cardItem ">
                                <h1 style={{ "fontWeight": "bolder" }}>
                                    Hôm nay ăn gì
                                </h1>
                            </div>
                            <div className="col-md-3 cardItem ">
                                <h3 style={{ "fontWeight": "bolder" }}>
                                    Khuyến mãi mỗi ngày
                                </h3>
                            </div>
                            <div className="col-md-3 cardItem ">
                                <h3 style={{ "fontWeight": "bolder", "color": "red" }} className={styles.seller}>
                                    Best Seller
                                </h3>
                            </div>
                            <div className="col-md-3 cardItem ">
                            </div>
                        </div>
                    </div>
                </div>
                {/* Edit */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                            </div>
                        </div>
                        <div className="row">
                            <div className={`col-md-3 text-center ${styles.product}`}>
                                <div>
                                    <img onClick={handleClick} className={styles.img} alt="Bootstrap Image Preview" src="https://img.dominos.vn/pizza-lap-xuong2.jpg" />

                                </div>
                                <h3 style={{ "wordBreak": "break-word",color:"blue"}}>
                                PIZZA LẠP XƯỞNG XỐT TRỨNG MUỐI MAYONNAISE - SAIGON MANIA PIZZA
                                </h3>
                                <h3>
                                    99 000d
                                </h3>
                            </div>
                            <div className={`col-md-3 text-center ${styles.product}`}>
                                <div>
                                    <img onClick={handleClick} className={styles.img} alt="Bootstrap Image Preview" src="https://img.dominos.vn/Okonomiyaki.jpg" />

                                </div>

                                <h3 style={{ "wordBreak": "break-word",color:"blue"}}>
                                PIZZA BÁNH XÈO NHẬT - OKONOMIYAKI
                                </h3>
                                <h3>
                                    99 000d
                                </h3>
                            </div>
                            <div className={`col-md-3 text-center ${styles.product}`}>
                                <div>
                                    <img onClick={handleClick} className={styles.img} alt="Bootstrap Image Preview" src="https://img.dominos.vn/Ocean-mania.jpg" />

                                </div>
                                <h3 style={{ "wordBreak": "break-word",color:"blue"}}>
                                PIZZA HẢI SẢN XỐT MAYONNAISE - OCEAN MANIA
                                </h3>
                                <h3>
                                    99 000d
                                </h3>
                            </div>
                            <div className={`col-md-3 text-center ${styles.product}`}>
                                <div>
                                    <img onClick={handleClick} className={styles.img} alt="Bootstrap Image Preview" src="https://img.dominos.vn/Pizzaminsea.jpg" />

                                </div>
                                <h3 style={{ "wordBreak": "break-word",color:"blue"}}>
                                PIZZA HẢI SẢN NHIỆT ĐỚI XỐT TIÊU - PIZZAMIN SEA
                                </h3>
                                <h3>
                                    99 000d
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
             style={{"display":"block",
            "backgroundColor":"#0078ae",
            "color":"white",
            "margin":"35px auto",
            "borderRadius":"3px",
            "padding":"7px",
            "fontSize":"18px"}}>
            <Link to='/menu' style={{"color":"white"}}>Xem thêm</Link>
            </button>

            {detail&&(
                <Menu_pizza_details img={img} name={name} type={type} showDetail={setDetail}/>
            )}
        </div>
    )
}