import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from "./Sub_cart.module.css";
import { Link } from 'react-router-dom';


export default function Sub_cart(){


    return(
        <div className={styles.sub_cart}>
            <div className={styles.img}>
                <img  src='https://dominos.vn/img/illustration/empty-cart.svg'/>
            </div>
            <div className={styles.infomation}>
                <p className={styles.p}>Giỏ hàng chưa có sản phẩm.</p>
                <p className={styles.p}>Xin mời bạn mua hàng</p>
            </div>
        </div>
    )
}


