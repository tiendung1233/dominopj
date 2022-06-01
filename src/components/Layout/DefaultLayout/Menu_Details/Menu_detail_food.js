import React, { useContext, useEffect, useState } from "react";
import styles from "./Menu_detail_food.module.css";
import CartContext from "../../../../Context/CartContext";

export default function Menu_detail_food({ img, name, cost, setOtherDetail }) {
    const {setChange} = useContext(CartContext);

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
        let data = {
            "name": name,
            "count": count,
            "price": price,
            "de_banh": "",
            "img":img
        }
        setOtherDetail(false)
        setCart(data)
        console.log([data]);
        postItemCart(data);
        setChange(true)
        // setOtherDetail(false);
    }

    // Post Api:
    function postItemCart(data) {
        fetch("http://localhost:3000/Cart", {
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
        </div>
    )
}