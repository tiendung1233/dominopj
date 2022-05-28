import React, { useEffect, useState } from "react";
import styles from "./Menu_detail_food.module.css";

export default function Menu_detail_food({ img, name, cost, setOtherDetail }) {

    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(0);
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
    }

    useEffect(() => {
        setPrice(count * cost)
        console.log(img);
    })


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

                        <button className={styles.add_cart}>Thêm vào giỏ hàng <span className={styles.price}>{price}</span>đ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}