import Styles from './Follow.module.css'
function Follow() {
    return (
        <div className={Styles.Follow}>
            <div className={Styles.conten}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-5">
                                    <img alt="Bootstrap Image Preview" className={Styles.img_width} src="https://dominos.vn/img/stock-stracking.png" />
                                </div>
                                <div class="col-md-7 mt-4">
                                    <h3 className={Styles.conten_text}>
                                        Kiểm tra đơn hàng của bạn
                                    </h3>
                                    <div className={Styles.box_ip}>
                                        <input className={Styles.input} placeholder='Nhập só điện thoại của bạn'/>
                                         <butto className={Styles.box_ipbtn}><i className={`bi bi-search ${Styles.icon_s}`}></i></butto>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Follow;