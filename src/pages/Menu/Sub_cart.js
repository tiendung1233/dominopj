import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from "./Sub_cart.module.css";
import { Link } from 'react-router-dom';


export default function Sub_cart() {

    const [data, setData] = useState([]);
    const [check, setCheck] = useState(data.length)
    const [totalPrice, setTotal] = useState(0);
    // console.log(check);

    function total(data){
        let priceList = data.map(e=>e.price);
        return priceList.reduce((a,b)=>a+b,0)
    }


    
    useEffect(() => {
        fetch("http://localhost:3000/Cart")
            .then(res => res.json())
            .then(item => {
                setCheck(item.length)
                let cartItem = [];
                for (let i = 1; i < item.length; i++) {
                    cartItem.push(item[i]);
                }
                setData(cartItem)
                // console.log(typeof data[1].price);
                let totalCart =total(cartItem);
                console.log(totalCart);
                setTotal(totalCart)

                
                // console.log(item.length);
            })
    }, [])




    return (
        <div className={styles.sub_cart}>
            {(check === 1) && (
                <div>
                    <div className={styles.img}>
                        <img src='https://dominos.vn/img/illustration/empty-cart.svg' />
                    </div>
                    <div className={styles.infomation}>
                        <p className={styles.p}>Giỏ hàng chưa có sản phẩm.</p>
                        <p className={styles.p}>Xin mời bạn mua hàng</p>
                    </div>
                </div>
            )}

            {(check > 1) && (
                <div className={`${styles.cart}`}>
                    <div className={`${styles.list} ${styles.bonus}`} style={{ 
                            "borderBottom":"solid black 1.5px"
                         }}>
                        <li style={{ "width": "60%"}}>Tên sản phẩm</li>
                        <li>Số lượng</li>
                        <li>Giá</li>
                    </div>
                    {data.map(e => (
                        <div className={styles.list}>
                            <li style={{ "width": "60%" }}>{e.name}</li>
                            <li>{e.count}</li>
                            <li>{e.price}</li>
                            <div>x</div>
                        </div>
                    ))}

                    <div>{totalPrice}</div>
                </div>
            )}
        </div>
    )
}


