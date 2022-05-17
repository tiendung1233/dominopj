import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.css'
function Header() {
    return (
            <div>
                <div className={`container-fluid ${styles.bk} color-white` }>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
                                </div>
                                <div className="col-md-6 color-white">
                                    <h3 className={styles.text_cl}>
                                        DOMINO'S PIZZA
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-8 ${styles.wrap}`}>
                            <div className={`row `}>
                                <div className={`col-md-3 ${styles.block}`}>
                                    <span className={`badge badge-default `}>MÃ E-VOUCHER</span>
                                </div>
                                <div className={`col-md-3 ${styles.block}`}>
                                    <span className={`badge badge-default `}>Khuyen Mai</span>
                                </div>
                                <div className={`col-md-3 ${styles.block}`}>
                                    <span className={`badge badge-default `}>Thuc Don</span>
                                </div>
                                <div className={`col-md-3 ${styles.block}`}>
                                    <span className={`badge badge-default `}>Theo doi don hang</span>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-2`}>
                            <div className={`row ${styles.wrap}`} >
                                <div className={`col-md-4`}>
                                    <span className={`badge badge-default`}>Label</span>
                                </div>
                                <div className={`col-md-4`}>
                                    <span className={`badge badge-default`}>Label</span>
                                </div>
                                <div className={`col-md-4`}>
                                    <span className={`badge badge-default`}>Label</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;