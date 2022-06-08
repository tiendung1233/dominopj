import Styles from './Follow.module.css'
function Follow() {
    const erorr = () =>{
       if( document.querySelector('.djehr').value == ''){
           document.querySelector('.eroor').classList.remove('display_none')
       }else{
        document.querySelector('.eroor').classList.add('display_none')

       }
    }
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
                                        <input className={`${Styles.input} djehr`} onBlur={erorr} placeholder='Nhập só điện thoại của bạn'/>
                                        
                                         <button className={Styles.box_ipbtn}><i className={`bi bi-search ${Styles.icon_s}`}></i></button>
                                    </div>
                                    <div className={`${Styles.erorr} eroor display_none`}>Vui lòng nhập số điện thoại của bạn!</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Follow;