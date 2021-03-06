import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import styles from "./Menu_detail.module.css";
import { Link } from 'react-router-dom';
import CartContext from '../../../../Context/CartContext';
import LoginContext from '../../../../Context/LoginContext';
import { type } from '@testing-library/user-event/dist/type';
import { EyeSlash } from 'react-bootstrap-icons';

export default function Menu_pizza_details({ img, name, showDetail, type }) {
    const [count, setCount] = useState(1);

    const { changeCart, setChange } = useContext(CartContext);
    const { loginName, setLogin } = useContext(LoginContext);

    // Get value options:
    const [valueDeBanh, setValueDeBanh] = useState('');
    const [valueCoBanh, setValueCoBanh] = useState(0);
    const [valueThem, setValueThem] = useState(0);
    const [valuePhoMai, setValuePhoMai] = useState(0);
    console.log(typeof valueCoBanh);
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
        showDetail(false)
        setChange("close")
    }

    const addToCart = (el) => {
        if (loginName !== "default") {
            if (valueDeBanh !== "" && valueCoBanh !== 0) {
                let data = {
                    "name": name,
                    "count": count,
                    "price": price,
                    "de_banh": valueDeBanh,
                    "img": img,
                    "type": type,
                    "user":loginName
                }

                // showDetail(false)
                setCart(data)
                console.log([data]);
                postItemCart(data);
                setChange(true);
            }
            else if ((valueDeBanh === "" || valueDeBanh === null) && (valueCoBanh === 0)) {
                alert("Vui l??ng ch???n ????? b??nh v?? c??? b??nh")
            }
            else if (valueDeBanh === "" || valueDeBanh === null) {
                alert("Vui l??ng ch???n ????? b??nh ")
            }

            else if (valueCoBanh === 0) {
                alert("Vui l??ng ch???n c??? b??nh ")
            }
        }

        else {
            alert('Vui long dang nhap');
        }


    }


    useEffect(() => {
        setPrice((valueCoBanh + valuePhoMai + valueThem) * count);
    })

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
            {/* {close === false && ( */}
            <div className={`${styles.container}`}>
                <div className={styles.img}>
                    <img src={img} />
                </div>

                <div className={styles.container_section}>
                    <div className={`${styles.header}`}>
                        <h1>{name}</h1>
                        <button className={`${styles.btn}`} onClick={handleX}>X</button>
                    </div>

                    <div className={`${styles.title}`}>Vo so loai sot cung voi hang loat options thu vi cho don quy khach </div>

                    <div className={`${styles.main_content}`}>

                        <div className={`${styles.section}`}>
                            <h3>Ch???n ????? b??nh</h3>
                            <div className={`${styles.section_content}`} onChange={(e) => setValueDeBanh(e.target.value)}>
                                <div>
                                    <div>
                                        <input type='radio' name='de_banh' value="????? m???ng gi??n" />
                                        <label>????? m???ng gi??n</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-base-1.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' name='de_banh' value="????? d??y x???p" />
                                        <label>????? d??y x???p</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-base-2.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' name='de_banh' value="????? v???a" />
                                        <label>????? v???a</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-base-3.png' />
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.section}`}>
                            <h3>Ch???n c??? b??nh</h3>
                            <div className={`${styles.section_content}`} onChange={(e) => {
                                console.log(Number(e.target.value));
                                setValueCoBanh(Number(e.target.value))
                            }}>
                                <div>
                                    <div>
                                        <input type='radio' name='co_banh' value="99000" />
                                        <label>C??? 7 inch =  99,000???</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-size-1.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' name='co_banh' value="189000" />
                                        <label>C??? 9 inch =  189,000???</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-size-2.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' name='co_banh' value="279000" />
                                        <label>C??? 12 inch =  279,000???</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-size-3.png' />
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.section}`}>
                            <h3>T??y ch???n th??m</h3>
                            <div className={`${styles.section_content}`} onChange={(e) => setValueThem(Number(e.target.value))}>
                                <div>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='pho_mai' value="15000" />
                                        <label>Th??m ph?? mai 9" = 15,000???</label>
                                    </div>
                                    <img src='https://img.dominos.vn/1phomai-v.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='pho_mai' value="25000" />
                                        <label>G???p ????i ph?? mai 9" = 25,000???</label>
                                    </div>
                                    <img src='https://img.dominos.vn/2phomai-v.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='pho_mai' value="35000" />
                                        <label>G???p ba ph?? mai 9" = 35,000???</label>
                                    </div>
                                    <img src='https://img.dominos.vn/3phomai-v.png' />
                                </div>
                            </div>
                        </div>


                        <div className={`${styles.section}`}>
                            <h3>T??y ch???n vi???n</h3>
                            <div className={`${styles.section_content}`} onChange={(e) => setValuePhoMai(Number(e.target.value))}>
                                <div>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='vien' value="59000" />
                                        <label>Vi???n ph?? mai 9" = 59,000???</label>
                                    </div>
                                    <img src='https://img.dominos.vn/phomai.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='vien' value="59000" />
                                        <label>Vi???n x??c x??ch 9" = 59,000???</label>
                                    </div>
                                    <img src='https://img.dominos.vn/xucxic.png' />
                                </div>
                                <div style={{
                                    "paddingBottom": "3rem",
                                    "marginBottom": "3rem"
                                }}>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='vien' value="79000" />
                                        <label>Vi???n x??c x??ch ph?? mai 9" = 79,000???</label>
                                    </div>
                                    <img src='https://img.dominos.vn/phomaixucxich.png' />
                                </div>
                            </div>
                        </div>

                        <div className={styles.list_btn}>
                            <div className={styles.up_down}>
                                <button onClick={handleDown}>-</button>
                                <span className={styles.count}>{count}</span>
                                <button onClick={handleUp}>+</button>
                            </div>

                            <button className={styles.add_cart} onClick={addToCart}>Th??m v??o gi??? h??ng <span className={styles.price}>{price}</span>??</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}

            {changeCart === true && (
                <>
                    <iframe src="https://embed.lottiefiles.com/animation/90283" autoplay speed="1" style=
                        {{
                            "position": "fixed",
                            "top": "50%",
                            left: "50%",
                            "transform": "translate(-50%,-50%)",
                            zIndex: "10000",
                            "backgroundColor": "transparent"
                        }}></iframe>
                    <div className={styles.alert}>Click <span style={{ "color": "red", "margin": "10px" }}> X </span> to close</div>
                </>
            )}
        </div>
    )
}
