import React, { useContext, useEffect, useState } from "react";
import styles from "./Menu_detail_food.module.css";
import CartContext from "../../../../Context/CartContext";
import LoginContext from "../../../../Context/LoginContext";
import { type } from "@testing-library/user-event/dist/type";

export default function Menu_detail_food({ img, name, cost, setOtherDetail, type }) {
    const { changeCart, setChange } = useContext(CartContext);
    const {loginName,setLogin} = useContext(LoginContext);

    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(0);
    const [cart, setCart] = useState({})


    const handleUp = () => {
        setCount(count + 1)
    }

    const handleDown = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }


    const handleX = () => {
        setOtherDetail(false);
        setChange("close");
    }

    useEffect(() => {
        setPrice(count * cost)
        console.log(img);
    })

    // Add to Cart
    const addToCart = (el) => {
        if(loginName!=="default"){
            let data = {
                "name": name,
                "count": count,
                "price": price,
                "de_banh": "",
                "img": img,
                "type": "none",
                "user":loginName
            }
            // setOtherDetail(false)
            setCart(data)
            console.log([data]);
            postItemCart(data);
            setChange(true);
            (<iframe src="https://embed.lottiefiles.com/animation/63075"></iframe>)
        }
        else{
            alert("Vui long dang nhap");
        }
       
        // setOtherDetail(false);
    }

    // Post Api:
    function postItemCart(data) {
        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/Cart", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(item => console.log(item))
            .catch(err => console.log(err))
    }


    return (
        <div className={styles.modal}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src={img} />
                </div>

                <div className={styles.container_section}>
                    <div className={`${styles.header}`}>
                        <h1>{name}</h1>
                        <button className={`${styles.btn}`} onClick={handleX}>X</button>
                    </div>

                    <div className={`${styles.title}`}> Tha ga lua chon nhieu mon an di kem  </div>

                    <div className={styles.list_btn}>
                        <div className={styles.up_down}>
                            <button onClick={handleDown}>-</button>
                            <span className={styles.count}>{count}</span>
                            <button onClick={handleUp}>+</button>
                        </div>

                        <button className={styles.add_cart} onClick={addToCart}>Thêm vào giỏ hàng <span className={styles.price}>{price}</span>đ</button>
                    </div>
                </div>
            </div>

            {changeCart === true && (
                <>
                <iframe src="https://embed.lottiefiles.com/animation/90283" autoplay speed="1"  style=
                {{"position":"fixed",
                "top":"50%",
                left:"50%",
                "transform":"translate(-50%,-50%)",
                zIndex:"10000",
                "backgroundColor":"transparent"}}></iframe>
                <div className={styles.alert}>Click <span style={{ "color": "red", "margin": "10px" }}> X </span> to close</div>
                </>
            )}
        </div>
    )
}