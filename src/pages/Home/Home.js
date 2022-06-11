import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.css'
import Slider from '../Slider/Slider';
import Seller from '../Menu/Seller';
function Home() {
    return (
            <div>
                <Slider/>
                {/* <div>
                    <div className={styles.btn_oder}>
                        <button className={styles.btn_oder1}>Giao hàng tận nơi</button>
                        <button className={styles.btn_oder1}>Đặt đến lấy</button>
                    </div>
                </div> */}
                <Seller/>
            </div>
    )
}

export default Home;