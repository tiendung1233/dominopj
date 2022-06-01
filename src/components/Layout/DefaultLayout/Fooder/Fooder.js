import styles from './Fooder.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Fooder() {
    return <div className={styles.Fooder}>
        <div className={styles.Fooder_container}>
            <div className={`${styles.Fooder_start} py-5`}>
                <div className={` ${styles.Fooder_start_text}`}>
                Kết nối Domino's Pizza Việt Nam:
                </div>
                <div className={styles.Fooder_start_icon}>
                    <i class="bi bi-facebook px-5"></i>
                    <i class="bi bi-instagram"></i>
                </div>
            </div>
            
            <div className={styles.boder}></div>
            
            <div className={`${styles.Fooder_conten} row py-5`}>
                <div className={`col-lg-4 col-md-6 ${styles.Fooder_conten_contac} row`}>
                    <div className={`${styles.boder_y} col-lg-4 col-md-4`}> 
                        <img className={styles.contac_img} src='https://dominos.vn/img/logo/domino.svg'/>
                    </div>

                    <div className={`col-lg-7 col-md-8  ` }>
    
                        <div className={styles.hotline}>
                             Hotline Đặt Hàng
                        </div>
                        <div className={styles.number}>
                            03849 28573
                        </div>
                    </div>
                </div>
    
                <div className={`col-lg-6 row col-md-4`}>
                    <ul className={`${styles.list} col-lg-4`}>
                        <li className={styles.list_item}>Cam kết</li>
                        <li className={styles.list_item}>Lịch sử</li>
                        <li className={styles.list_item}>Tuyển dụng</li>
                    </ul>
    
                    <ul className={`${styles.list} col-lg-4`}>
                        <li className={styles.list_item}>Thực đơn</li>
                        <li className={styles.list_item}>Mã e-voucher</li>
                        <li className={styles.list_item}>Khuyến mãi</li>
                    </ul>
    
                    <ul className={`${styles.list} col-lg-4`}>
                        <li className={styles.list_item}>Theo dõi đơn hàng</li>
                        <li className={styles.list_item}>Danh sách cửa hàng</li>
                    </ul>
                </div>
    
                <div className={`col-lg-2 col-md-2`}>
                    <img className={styles.car_img} src='https://dominos.vn/img/credentials.png'/>
                </div>
            </div>

            <div className={styles.end}>
                <div className={styles.domino_vn} >© 2020 Domino’s Pizza Vietnam | Privacy Policy</div>
                <div className={styles.btn_lg}>Switch to English version</div>
            </div>
        </div>
    </div>;
}

export default Fooder;