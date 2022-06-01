import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import styles from "./Sub_cart.module.css";
import { Link } from 'react-router-dom';
import CartContext from '../../Context/CartContext';


export default function Sub_cart() {
    const {changeCart} = useContext(CartContext)
    console.log(changeCart);

    const [data, setData] = useState([]);
    const [check, setCheck] = useState(1)
    const [totalPrice, setTotal] = useState(0);
    // console.log(check);
    

    function total(data) {
        let priceList = data.map(e => e.price);
        return priceList.reduce((a, b) => a + b, 0)
    }


    


    useEffect(() => {
        fetch("http://localhost:3000/Cart")
            .then(res => res.json())
            .then(item => {
                let cartItem = [];
                function loop(data) {
                    for (let i = 1; i < data.length; i++) {
                        cartItem.push(data[i]);
                    }
                }
                loop(item);
                setData(cartItem)
                // console.log(data);
                setCheck(cartItem.length)
                let totalCart = total(cartItem);
                // console.log(totalCart);
                setTotal(totalCart);
                // console.log(item.length);
            })
    }, [changeCart])






    return (
        <div className={styles.sub_cart} id="flex-1">
            {(check < 1) && (
                <>
                    <div className={styles.img}>
                        <img src='https://dominos.vn/img/illustration/empty-cart.svg' />
                    </div>
                    <div className={styles.infomation}>
                        <p className={styles.p}>Giỏ hàng chưa có sản phẩm.</p>
                        <p className={styles.p}>Xin mời bạn mua hàng</p>
                    </div>
                </>
            )}

            {(check >= 1) && (
                <div className={`${styles.cart}`}>
                    <div className={`${styles.list} ${styles.bonus}`} style={{
                        "borderBottom": "solid black 1.5px"
                    }}>
                        <li style={{ "width": "60%" }}>Don hang cua ban</li>
                    </div>
                    {data.map(e => (
                        <div className={styles.list}>
                            <li>
                                <img className={styles.img_cart} src={e.img} />
                            </li>
                            <li style={{ "width": "60%", "textOverflow": "clip","whiteSpace":"nowrap","overflow":"hidden" }}>{e.name}</li>
                            <li>{e.count}</li>
                            <li>{e.price}</li>
                            <div>x</div>
                        </div>
                    ))}

                    <div style={{
                        "textAlign":"center",
                        "fontWeight":"bolder",
                        "marginTop":"80%"
                    }}><span style={{
                        "color":"red"
                    }}>Tong tien: </span>{totalPrice}</div>
                </div>
            )}
        </div>
    )
}


