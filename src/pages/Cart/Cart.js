import CartContext from '../../Context/CartContext';
import React, { useContext, useEffect, useState } from 'react';
import styles from "./Cart.module.css";
import { Link } from 'react-router-dom';
import UpdateCart from '../../components/Layout/DefaultLayout/UdateCart/UpdateCart';
import UpdatePizzaCart from '../../components/Layout/DefaultLayout/UdateCart/UpdatePizzaCart';
import LoginContext from '../../Context/LoginContext';


export default function Cart() {
    const { changeCart, setChange } = useContext(CartContext)
    const { loginName, setLogin } = useContext(LoginContext)
    // console.log(changeCart);

    const [data, setData] = useState([]);
    const [check, setCheck] = useState(1)
    const [totalPrice, setTotal] = useState(0);
    // console.log(check);
    const [show, setShow] = useState(false)
    const [id, setId] = useState()
    const [imgItem, setImg] = useState();
    const [cost, setCost] = useState();
    const [name, setName] = useState();
    const [typeItem, setType] = useState('');
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
                        if (data[i].user === loginName) {
                            cartItem.push(data[i]);
                        }
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



    // Delete Item 
    function deleteCart(el) {
        let idItem = el.target.parentElement.id;
        fetch(`https://627a232473bad506858340e5.mockapi.io/api/pizza/Cart/${idItem}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(res => res.json())
            .then(() => {
                // const item = document.querySelector(`.${idItem}`)
                // item.remove();
            })
        setChange("delete")
    }

    // Handle edit
    const handleEdit = (el) => {
        const parrent = el.target.parentElement
        const parrentList = parrent.parentElement
        const liList = parrentList.querySelectorAll('li')
        const idItem = parrentList.id;
        console.log(parrentList);
        setId(idItem);
        setCount(parrentList.querySelector("h1").innerHTML)
        setType(parrentList.querySelector("p").innerHTML)
        console.log(parrentList.querySelector("p").innerHTML);
        setCost(liList[3].innerHTML)
        setName(liList[1].innerHTML)
        // setCount(liList[2].innerHTML)
        setImg(parrent.querySelector(`img`).getAttribute("src"));
        // console.log((<UpdateCart/>));
        setShow(true);
    }


    // Post Checkout:
    function checkoutData(item) {
        fetch('https://627a232473bad506858340e5.mockapi.io/api/pizza/CheckoutData', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(e => e)
    }

    const checkout = (e) => {
        const parent = e.target.parentElement;
        const idItem = parent.querySelectorAll('.id');
        let arr = []
        for (let i = 0; i < idItem.length; i++) {
            arr.push(idItem[i].id)
        }

        // console.log(arr);
        let dataItem = {
            "user": loginName,
            "data": data
        }
        // console.log(dataItem);
        checkoutData(dataItem);



        arr.forEach(el => {
            deleteItemCheckout(el);
            // console.log(el);
        })
        setChange("deleteItems")
        setCheck(0)
        // console.log(data);
    }




    // Sau khi checkout, du lieu trong gio hang se bi xoa
    function deleteItemCheckout(e) {
        fetch(`https://627a232473bad506858340e5.mockapi.io/api/pizza/Cart/${e}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(res => res.json())
            .then((res) => {
                // const item = document.querySelector(`#${e}`)
                console.log(res);
                // item.remove();
            })

    }



    return (
        <div className={styles.sub_cart} id="flex-1">
            {(loginName !== "default") && (
                <>
                    {(check < 1) && (
                        <>
                            <div className={styles.img}>
                                <img src='https://dominos.vn/img/illustration/empty-cart.svg' />
                            </div>
                            <div className={styles.infomation}>
                                <p className={styles.p}>Gi??? h??ng ch??a c?? s???n ph???m.</p>
                                <p className={styles.p}>Xin m???i b???n mua h??ng</p>
                                <button className={styles.btn}><Link style={{ color: "white", "fontSize": "18px" }} to='/menu'>Tiep tuc mua hang</Link></button>
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
                                <>
                                    <div className={`id ${styles.list}`} id={e.id}>
                                        <h1 style={{ "display": "none" }}>{e.count}</h1>
                                        <p style={{ "display": "none" }}>{e.type}</p>
                                        <li>
                                            <img className={styles.img_cart} src={e.img} />
                                            <button className={styles.editBtn} onClick={handleEdit}>Edit</button>
                                        </li>
                                        <li style={{ "width": "60%", "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }}>{e.name}</li>
                                        <li>{e.count}</li>
                                        <li>{e.price}</li>
                                        <div onClick={deleteCart}>x</div>
                                    </div>
                                   
                                </>
                            ))}

                            <div style={{
                                "textAlign": "center",
                                "fontWeight": "bolder",
                                "marginTop": "50vh",
                                
                            }}><span style={{
                                "color": "red"
                            }}>Tong tien: </span><span>{totalPrice}</span>
                            </div>
                            <button style={{
                                        "margin": "auto",
                                        "padding": "6.5px",
                                        "backgroundColor": "red",
                                        "color": "white",
                                        "display": "block",
                                        "borderRadius": "3px",
                                        "fontSize": "20px"
                                    }} onClick={checkout}>Thanh to??n</button>

                            {changeCart === "deleteItems" && (
                                <div className={styles.alert}>
                                    <div className={styles.alert_cotent}>

                                        <span style={{ "color": "red", "margin": "10px" }}>Thanh to??n th??nh c??ng</span>
                                        <button style={{
                                            "fontSize": "20px",
                                            "color": "green",
                                            "fontWeight": "bold",
                                            "padding": ".5rem 2.5rem",
                                            "borderRadius": "5px"
                                        }} onClick={() => setChange("default")}>OK</button>
                                    </div>
                                </div>
                            )}

                           
                        </div>
                    )}



                </>
            )}

            {(loginName === "default") && (
                <>
                    <div className={styles.img}>
                        <img src='https://dominos.vn/img/illustration/empty-cart.svg' />
                    </div>
                    <div className={styles.infomation}>
                        <p className={styles.p}>Gi??? h??ng ch??a c?? s???n ph???m.</p>
                        <p className={styles.p}>Xin m???i b???n mua h??ng</p>
                        <button className={styles.btn}><Link style={{ color: "white", "fontSize": "18px" }} to='/menu'>Tiep tuc mua hang</Link></button>
                    </div>
                </>
            )}




            {/* Modal Alert */}

            {changeCart === "delete" && (
                <div className={styles.alert}>
                    <div className={styles.alert_cotent}>

                        <span style={{ "color": "red", "margin": "10px" }}>Xoa thanh cong</span>
                        <button style={{
                            "fontSize": "20px",
                            "color": "green",
                            "fontWeight": "bold",
                            "padding": ".5rem 2.5rem",
                            "borderRadius": "5px"
                        }} onClick={() => setChange("default")}>OK</button>
                    </div>
                </div>
            )}




            {/* UI Update Cart */}
            {(show && typeItem === "none") && (
                <UpdateCart setShow={setShow} img={imgItem} name={name} cost={cost} idItem={id} countItem={countItem} />
            )}

            {(show && (typeItem === "premium" || typeItem === "signature" || typeItem === "favorite")) && (
                <UpdatePizzaCart setShow={setShow} img={imgItem} name={name} cost={cost} idItem={id} />
            )}


        </div>
    )
}

