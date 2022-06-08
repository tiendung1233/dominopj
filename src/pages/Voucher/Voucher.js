import Styles from './Voucher.module.css'
import {Link} from 'react-router-dom'
function Voucher() {
    return (
        <div className={Styles.Voucher_page}>
            <div className={Styles.Voucher_conten}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class={`col-md-3 ${Styles.img_style}`}>
                                    <img alt="Bootstrap Image Preview" className='img_width' src="https://img.dominos.vn/Banner+Promotion_COMBO+T%E1%BA%B6NG+%C4%90%E1%BB%96+MI+N%C3%94-04.png" />
                                </div>
                                <div className={`col-md-9 ${Styles.tab_voucher}`}>
                                    <h3 className={Styles.title}>
                                        COMBO XỈU CHỒNG XỈU ĐỔ TIẾT KIỆM ĐẾN 30% & TẶNG ĐỖ MI NÔ LEO NÚI

                                    </h3>
                                    <p className={Styles.conten1w}>
                                        <p>
                                            * Combo Ngon Xỉu Chồng 299K (2-3 người): 1 Pizza Lạp Xưởng Xốt Trứng Muối Mayonnaise cỡ vừa, 1 Pizza Favorite cỡ vừa, 3 thức uống nhỏ & Tặng 1 Đỗ Mi Nô Leo Núi phiên bản giới hạn.

                                        </p>
                                        <p>
                                            * Combo Vui Xỉu Đổ 449K (4-5 người): 1 Pizza Lạp Xưởng Xốt Trứng Muối Mayonnaise cỡ vừa, 1 Pizza Favorite cỡ vừa, Xúc xích xông khói (8pcs)/ Cánh gà BBQ kiểu Mỹ (4pcs), 1 Choco Pizza, 4 thức uống nhỏ & Tặng 1 Đỗ Mi Nô Leo Núi phiên bản giới hạn. </p>

                                    </p>
                                    <div className={Styles.btn_voucher}>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>Ngon Xỉu Chồng 299K</Link> </button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>Vui Xỉu Đổ 449k</Link> </button>

                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class={`col-md-3 ${Styles.img_style}`}>
                                    <img alt="Bootstrap Image Preview" className='img_width' src="https://img.dominos.vn/Promotion-70-pizza-thu-2.png" />
                                </div>
                                <div className={`col-md-9 ${Styles.tab_voucher}`}>
                                    <h3 className={Styles.title}>
                                        GIẢM 70% CHO PIZZA THỨ 2 - ÁP DỤNG MUA MANG VỀ & GIAO HÀNG TẬN NƠI

                                    </h3>
                                    <p className={Styles.conten1w}>
                                        <p>
                                            * Mua Pizza size M hoặc L kèm nước uống nguyên giá được giảm 70% cho bánh Pizza thứ 2 cùng size có giá bằng hoặc thấp hơn Pizza thứ nhất.

                                        </p>
                                        <p>
                                            * Áp dụng cho Mua Mang Về & Giao Hàng Tận Nơi tất cả các ngày trong tuần.

                                        </p>
                                    </p>
                                    <div className={Styles.btn_voucher}>
                                        <button className={Styles.btn_voucher_item}><Link to = '/menu'> Đặt Size M</Link> </button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>Đặt Size L</Link> </button>

                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class={`col-md-3 ${Styles.img_style}`}>
                                    <img alt="Bootstrap Image Preview" className='' src="https://img.dominos.vn/Promotion%2BVN-EN-1.png" />
                                </div>
                                <div className={`col-md-9 ${Styles.tab_voucher}`}>
                                    <h3 className={Styles.title}>
                                        MIX-MATCH - TIẾT KIỆM 45%, PIZZA CHỈ TỪ 89K
                                    </h3>
                                    <p className={Styles.conten1w}>
                                        <p>
                                            * Giá: 89K/pizza dòng Favorite (size M). Thêm 30K/pizza và 60K/pizza để nâng lên dòng Premium và Signature.

                                        </p>
                                        <p>
                                            * Giá: 159K/pizza dòng Favorite (size L). Thêm 20K/pizza và 60K/pizza để nâng lên dòng Premium và Signature.

                                        </p>
                                        <p>
                                            * Áp dụng khi mua 02 pizza đồng thời.</p>

                                    </p> 
                                    <div className={Styles.btn_voucher}>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>02 Favorite (M)</Link> </button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>02 Premium (M)</Link>  </button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>02 Signature (M)</Link> </button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu' >01 Favorite (M) + 01 Premium (M)</Link></button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>01 Signature (M) + 01 Premium (M)</Link></button>
                                        <button className={Styles.btn_voucher_item}><Link to = '/menu'> 02 Favorite (L)</Link> </button>
                                        <button className={Styles.btn_voucher_item}><Link to = '/menu'> 01 Signature (L) + 01 Premium (L)</Link> </button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'> 02 Signature (L)</Link></button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>01 Premium (L) + 01 Favorite (L)</Link> </button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>01 Signature (L) + 01 Favorite (L)</Link> </button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>01 Signature (M) + 01 Favorite (M)</Link> </button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>02 Premium (L)</Link> </button>

                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class={`col-md-3 ${Styles.img_style}`}>
                                    <img alt="Bootstrap Image Preview" className='img_width' src="https://img.dominos.vn/Promotion+Deal+cho+nhom+VN_EN-1.png" />
                                </div>
                                <div className={`col-md-9 ${Styles.tab_voucher}`}>
                                    <h3 className={Styles.title}>
                                        DEAL SIÊU TO CHO NHÓM</h3>
                                    <p className={Styles.conten1w}>
                                        <p>
                                            * Combo 229K cho 2 người gồm 1 pizza size M dòng Premium + 1 phần món phụ + 1 chai nước (390ml)

                                        </p>
                                        <p>
                                            * Combo 309K cho 3-4 người gồm 1 pizza size L dòng Favorite + 2 phần món phụ + 2 chai nước (390ml)

                                        </p>
                                        <p>
                                            * Combo 339K cho 3-4 người gồm 1 pizza size L dòng Premium + 2 phần món phụ + 1 chai nước (1.5L)</p>

                                    </p>
                                    <div className={Styles.btn_voucher}>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>Combo 229K</Link></button>
                                        <button className={Styles.btn_voucher_item}> <Link to = '/menu'>Combo 309K</Link> </button>
                                        <button className={Styles.btn_voucher_item}><Link to = '/menu'> Combo 339K </Link></button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Voucher;