import CartContext from '../../Context/CartContext';
import React, { useContext,useEffect,useState } from 'react';
import styles from "./Cart.module.css";
import { Link } from 'react-router-dom';


export default function Sub_cart() {
    const [change, setChange] = useState(false)
    // console.log(changeCart);

    const [data, setData] = useState([]);
    const [check, setCheck] = useState(1)
    const [totalPrice, setTotal] = useState(0);
    // console.log(check);
    

    function total(data) {
        let priceList = data.map(e => e.price);
        return priceList.reduce((a, b) => a + b, 0)
    }


    


    useEffect(() => {
        fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/Cart")
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
    }, [change])



    // Delete Item 
    function deleteCart(el){
        let idItem = el.target.parentElement.id;
        fetch(`https://627a232473bad506858340e5.mockapi.io/api/pizza/Cart/${idItem}`,{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        })
        .then(res=>res.json())
        .then(()=>{
            const item = document.querySelector(`.${idItem}`)
            item.remove();
        })
        setChange("delete")
    }



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
                        <button className={styles.btn}><Link style={{color:"white","fontSize":"18px"}} to='/menu'>Tiep tuc mua hang</Link></button>
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
                        <div className={styles.list} id={e.id}>
                            <li>
                                <img className={styles.img_cart} src={e.img} />
                            </li>
                            <li style={{ "width": "60%", "textOverflow": "clip","whiteSpace":"nowrap","overflow":"hidden" }}>{e.name}</li>
                            <li>{e.count}</li>
                            <li>{e.price}</li>
                            <div onClick={deleteCart}>x</div>
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


            {/* Modal Alert */}

            {change==="delete"&&(
                <div className={styles.alert}>
                    <div className={styles.alert_cotent}>
                    
                        <span style={{"color":"red","margin":"10px"}}>Xoa thanh cong</span>
                        <button style={{
                            "fontSize":"20px",
                            "color":"green",
                            "fontWeight":"bold",
                            "padding":".5rem 2.5rem",
                            "borderRadius":"5px"
                        }} onClick={()=>setChange("default")}>OK</button>
                    </div>
                </div>
            )}


        </div>
    )
}

