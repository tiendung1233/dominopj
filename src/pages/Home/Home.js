import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.css'
import Slider from '../Slider/Slider';
import Seller from '../Menu/Seller';
function Home() {
    return (
            <div>
                <Slider/>
                <div>
                    <div className={styles.btn_oder}>
                       <div className={styles.conten}>
                            <button className={styles.btn_oder1}>Giao hàng tận nơi</button>
                            <button className={styles.btn_oder2}>Đặt đến lấy</button>
                       </div>
                       <div className={styles.box_input}>
                        <input className={styles.input} placeholder='Vui lòng nhập địa chỉ nhận hàng'/>
                        <i className={`bi bi-search ${styles.seacher}`}></i>
                       </div>
                    </div>
                </div>
                <Seller/>
            </div>
    )
}

export default Home;