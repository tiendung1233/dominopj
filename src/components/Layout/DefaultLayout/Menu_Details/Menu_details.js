import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from "./Menu_detail.module.css";
import { Link } from 'react-router-dom';

export default function Menu_pizza_details({ img, name, showDetail }) {

    const [count, setCount] = useState(1);

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
    }

    const addToCart = (el) => {
        if(valueDeBanh!==""&&valueCoBanh!==0){
            let data = {
                "name": name,
                "count": count,
                "price": price,
                "de_banh": valueDeBanh,
                "img":img
            }
    
            setCart(data)
            console.log([data]);
            postItemCart(data);
        }
        else if((valueDeBanh===""||valueDeBanh===null)&&(valueCoBanh===0)){
            alert("Vui lòng chọn đế bánh và cỡ bánh")
        }
        else if(valueDeBanh===""||valueDeBanh===null){
            alert("Vui lòng chọn đế bánh ")
        }

        else if(valueCoBanh===0){
            alert("Vui lòng chọn cỡ bánh ")
        }
    }


    useEffect(() => {
        setPrice((valueCoBanh + valuePhoMai + valueThem) * count);
    })

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
            .then(res=>res.json())
            .then(item=>console.log(item))
            .catch(err=>console.log(err))
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
                            <h3>Chọn đế bánh</h3>
                            <div className={`${styles.section_content}`} onChange={(e) => setValueDeBanh(e.target.value)}>
                                <div>
                                    <div>
                                        <input type='radio' name='de_banh' value="Đế mỏng giòn" />
                                        <label>Đế mỏng giòn</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-base-1.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' name='de_banh' value="Đế dày xốp" />
                                        <label>Đế dày xốp</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-base-2.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' name='de_banh' value="Đế vừa" />
                                        <label>Đế vừa</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-base-3.png' />
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.section}`}>
                            <h3>Chọn cỡ bánh</h3>
                            <div className={`${styles.section_content}`} onChange={(e) => {
                                console.log(Number(e.target.value));
                                setValueCoBanh(Number(e.target.value))
                            }}>
                                <div>
                                    <div>
                                        <input type='radio' name='co_banh' value="99000" />
                                        <label>Cỡ 7 inch =  99,000₫</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-size-1.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' name='co_banh' value="189000" />
                                        <label>Cỡ 9 inch =  189,000₫</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-size-2.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' name='co_banh' value="279000" />
                                        <label>Cỡ 12 inch =  279,000₫</label>
                                    </div>
                                    <img src='https://dominos.vn/img/icon/pizza-size-3.png' />
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.section}`}>
                            <h3>Tùy chọn thêm</h3>
                            <div className={`${styles.section_content}`} onChange={(e) => setValueThem(Number(e.target.value))}>
                                <div>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='pho_mai' value="15000" />
                                        <label>Thêm phô mai 9" = 15,000₫</label>
                                    </div>
                                    <img src='https://img.dominos.vn/1phomai-v.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='pho_mai' value="25000" />
                                        <label>Gấp đôi phô mai 9" = 25,000₫</label>
                                    </div>
                                    <img src='https://img.dominos.vn/2phomai-v.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='pho_mai' value="35000" />
                                        <label>Gấp ba phô mai 9" = 35,000₫</label>
                                    </div>
                                    <img src='https://img.dominos.vn/3phomai-v.png' />
                                </div>
                            </div>
                        </div>


                        <div className={`${styles.section}`}>
                            <h3>Tùy chọn viền</h3>
                            <div className={`${styles.section_content}`} onChange={(e) => setValuePhoMai(Number(e.target.value))}>
                                <div>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='vien' value="59000" />
                                        <label>Viền phô mai 9" = 59,000₫</label>
                                    </div>
                                    <img src='https://img.dominos.vn/phomai.png' />
                                </div>
                                <div>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='vien' value="59000" />
                                        <label>Viền xúc xích 9" = 59,000₫</label>
                                    </div>
                                    <img src='https://img.dominos.vn/xucxic.png' />
                                </div>
                                <div style={{
                                    "paddingBottom": "3rem",
                                    "marginBottom": "3rem"
                                }}>
                                    <div>
                                        <input type='radio' className={`${styles.options}`} name='vien' value="79000" />
                                        <label>Viền xúc xích phô mai 9" = 79,000₫</label>
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

                            <button className={styles.add_cart} onClick={addToCart}>Thêm vào giỏ hàng <span className={styles.price}>{price}</span>đ</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </div>
    )
}
