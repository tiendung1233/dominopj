import Styles from './Code.module.css'
function Code() {
    return (<div className={Styles.code}>
        <div className={Styles.code_box}>
            <div className={Styles.box_tb}>
                Bạn có mã E-voucher tại Domino's Pizza?
            </div>
            <div className={Styles.box_tm}>
                Nhập mã E-voucher của bạn ở khung dưới đây để được ưu đãi
            </div>
            <div className={Styles.box_ip}>
                <div className={Styles.box_ipc}>
                <input name="voucher" id="voucher" class="form-control" placeholder="Nhập mã E-voucher" />
                <butto className={Styles.box_ipbtn}>Áp Dụng</butto>
                </div>
            </div>
        </div>

    </div>);
}

export default Code;