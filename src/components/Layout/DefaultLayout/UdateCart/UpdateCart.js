import React, { useContext,useEffect, useState } from "react";
import CartContext from "../../../../Context/CartContext";
import styles from "./UpdateCart.module.css"

export default function UpdateCart({img, name, cost, setShow}){

    const {changeCart, setChange} = useContext(CartContext);


    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(0);
    // const [cart, setCart] = useState({})


    const handleUp = () => {
        setCount(count + 1)
    }

    const handleDown = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handleX = () => {
        setShow(false);
        setChange("close");
    }

    useEffect(() => {
        setPrice(count * cost)
        console.log(img);
    })

    const updateItem = () =>{
        postItemCart()
    }




    // PUT Api:
    function postItemCart() {
        console.log("......")
        // fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/Cart", {
        //     method: "PUT",
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(item => console.log(item))
        //     .catch(err => console.log(err))
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

                    <button className={styles.add_cart} onClick={updateItem}>Cap nhat gio hang <span className={styles.price}>{price}</span>đ</button>
                </div>
            </div>
        </div>

        {changeCart===true&&(
            <div className={styles.alert}>Click <span style={{"color":"red","margin":"10px"}}> X </span> to close</div>
        )}
    </div>
    )
}