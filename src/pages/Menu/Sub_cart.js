import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import styles from "./Sub_cart.module.css";
import { Link } from 'react-router-dom';
import CartContext from '../../Context/CartContext';
import UpdateCart from '../../components/Layout/DefaultLayout/UdateCart/UpdateCart';




export default function Sub_cart() {
    const { changeCart,setChange } = useContext(CartContext)
    console.log(changeCart);

    const [data, setData] = useState([]);
    const [check, setCheck] = useState(1)
    const [totalPrice, setTotal] = useState(0);
    const [show,setShow] = useState(false)
    // console.log(check);

    const [imgItem,setImg] =useState();
    const [cost,setCost] = useState();
    const [name,setName] = useState();
    const [countItem, setCount] = useState(0);


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
    }, [changeCart])




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

    const heandleEdit = (el)=>{
        const parrent = el.target.parentElement
        const parrentList = parrent.parentElement
        const liList = parrentList.querySelectorAll('li')
        console.log(liList[3]);
        setCost(liList[3].innerHTML)
        setName(liList[1].innerHTML)
        setCount(liList[2].innerHTML)
        setImg(parrent.querySelector(`img`).getAttribute("src"));
        // console.log((<UpdateCart/>));
        setShow(true);
    }



    return (
        <>
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
                    <div className={`${styles.bonus}`} style={{
                        "borderBottom": "solid black 1.5px"
                    }}>
                        <li style={{ "width": "60%" }}>Don hang cua ban</li>
                    </div>
                    {data.map(e => (
                        <>
                            <div className={styles.list} id={e.id}>
                                <li>
                                    <img className={styles.img_cart} src={e.img} />
                                    <button className={styles.editBtn} onClick={heandleEdit}>Edit</button>
                                </li>
                                <li className={styles.name} style={{ "width": "60%", "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }}>{e.name}</li>
                                <li className={styles.count}>{e.count}</li>
                                <li className={styles.cost}>{e.price}</li>
                                <div onClick={deleteCart}>x</div>
                            </div>
                        </>
                    ))}
                    <div style={{
                                "textAlign": "center",
                                "fontWeight": "bolder",
                                "marginTop": "80%"
                            }}><span style={{
                                "color": "red"
                            }}>Tong tien: </span>{totalPrice}</div>

                </div>
            )}


            {changeCart==="delete"&&(
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

          {/* UI Update Cart */}
          {show&&(
                <UpdateCart setShow={setShow} img={imgItem} name = {name} cost = {cost}/>
            )}

        </>
    )
}


