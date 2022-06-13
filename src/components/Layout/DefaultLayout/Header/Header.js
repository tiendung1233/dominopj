import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Modal from '../../../../pages/ModalMenu/Modal';
import ModalLg from '../../../../pages/ModalLg/Modal';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js'
import LoginContext from '../../../../Context/LoginContext';
import { useContext } from 'react';
import CartContext from '../../../../Context/CartContext';
function Header() {

    const {loginName,setLogin} = useContext(LoginContext)
    const {changeCart,setChange} = useContext(CartContext)

    return (
        <div>
            <div className={` ${styles.bk} color-white`}>
                {/* pc */}
                <div className={`row ${styles.header_pc}`}>
                    <div className="col-md-2">
                        <Link to='/'>
                            <div className="row">
                                <div className="col-md-6">
                                    <img className={styles.logo_img} src='https://dominos.vn/img/logo/domino-horizontal-dark.svg' />
                                    <Link to='/home'>  <img className={styles.logo_img_mb} src='https://dominos.vn/img/logo/domino.svg' />
                                    </Link>
                                </div>
                                <div className="col-md-6 color-white">
                                    <h3 className={styles.text_cl}>
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={`col-md-8 ${styles.wrap} ${styles.menu}`}>
                        <div className={`row `}>
                            <div className={`col-md-3 ${styles.block}`}>
                                <Link to='/code' className={`badge badge-default `}>MÃ E-VOUCHER</Link>
                            </div>
                            <div className={`col-md-3 ${styles.block}`}>
                                <Link to='/voucher' className={`badge badge-default `}>KHUYẾN MÃI</Link>
                            </div>
                            <div className={`col-md-3 ${styles.block}`}>
                                <Link to='/menu' className={`badge badge-default `}>THỰC ĐƠN</Link>
                            </div>
                            <div className={`col-md-3 ${styles.block}`}>
                                <Link to ='/follow' className={`badge badge-default `}>THEO DÕI ĐƠN HÀNG</Link>

                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`row ${styles.wrap} `} >

                        {/* Fix login*/}
                            {loginName==="default"&&(
                                <div className={`col-md-4 ${styles.block}`} style={{"cursor":"pointer"}}>
                                    <ModalLg />
                                </div>
                            )}

                            {loginName!=="default"&&(
                                <div className={`col-md-4 ${styles.block}`}>
                                   <p style={{"cursor":"pointer", "color":"red","fontSize":"14px","width":"100px","textAlign":"center"}}
                                   onClick={()=>{
                                    setLogin("default");
                                    setChange('default');
                                   }}>
                                   Đăng xuất
                                   </p>
                                </div>
                            )}
                            
                            <div className={`col-md-4 ${styles.block}`}>
                                <Link to='/cart'><i class={`bi bi-basket-fill ${styles.block_icon}`}></i></Link>
                            </div>


                        </div>
                    </div>
                </div>
                {/* tablet */}
                <div className={styles.header_tl}>
                    <div className={styles.logo_img}>
                        <img src='https://dominos.vn/img/logo/domino-horizontal-dark.svg' />
                    </div>
                </div>
                {/* mobile */}
                <div className={styles.header_mb}>
                    <ul className={styles.nav_item}>
                        <li className={styles.nav_icon}>
                            <Link to='/'><img className={styles.nav_icon_img} src='https://dominos.vn/img/logo/domino.svg' /></Link>
                        </li>
                        <li className={styles.nav_icon}>
                            <Link to='/follow'><i class="color bi bi-cart-fill"></i></Link>
                        </li>
                        <li className={styles.nav_icon}>
                            <Link to='/voucher'><img src='	https://dominos.vn/img/logo/promotion-1.svg' /></Link>
                        </li>
                        <li className={styles.nav_icon}>
                            <Link to='/menu'><img src='	https://dominos.vn/img/logo/menu.svg' /></Link>
                        </li>
                        <li className={styles.nav_icon}><i class="color bi bi-person-fill"></i></li>
                        <li className={styles.nav_icon}><i class="color bi bi-basket-fill"></i></li>
                        <li className={styles.nav_icon}>
                            <Modal />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;