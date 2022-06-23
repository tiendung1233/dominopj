import React, { useEffect, useState } from "react";
import Styles from "./MenuBill.module.css";
import HeaderAD from "../HeaderAd";
import DeleteMNB from "../FormAD/DeleteMNB";
import ModalBill from "../FormAD/ModalBill";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
function MenuBill() {
  const [data, setData] = useState([]);
  const [showDelete, setShowDelete] = useState(false);

  // showbill
  const [showCount, setShowCount] = useState();
  const [showName, setShowName] = useState();
  const [showPrice, setShowPrice] = useState();


  const [showBill, setShowBill] = useState(false);
  const [id, setId] = useState();
  const [render, setRender] = useState("openning");

  // xu ly show intail
  const handleDetail = () => {
    setShowBill(true);
  }



  const deleteDataAPI = (e) => {
    fetch(`https://627a232473bad506858340e5.mockapi.io/api/pizza/CheckoutData/${e}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then(() => {
        console.log("delete");
      })
  }

  const deleteData = (e) => {
    const parent = e.target.parentElement.parentElement.parentElement.parentElement.id;
    console.log(parent);
    deleteDataAPI(parent);
    setRender("delete");
    setShowDelete(true);
  }

  useEffect(() => {
    fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/CheckoutData")
      .then((res) => res.json())
      .then((item) => {
        let itemArr = [];
        let itemArrUser = [];
        const itemLength = item.length;
        for (let i = 1; i < itemLength; i++) {
          itemArr.push(item[i]);
        }

        for (let i = 0; i < itemArr.dlength; i++) {
          itemArrUser.push(itemArr[i].user);
        }


        let newData = [...new Set(itemArr.map(d => d.user))].map(user => {
          return {
            user,
            data: itemArr.filter(d => d.user === user).map(d => d.data),
            cost: itemArr.filter(d => d.user === user).map(d => d.data).map(e=>e.map(el=>el.price)).reduce((a,b)=>a.concat(b)).reduce((a,b)=>a+b),
            "count": itemArr.filter(d => d.user === user).map(d => d.data).map(e => e.map(f => f.count)).reduce((a, b) => a.concat(b)),
            "name": itemArr.filter(d => d.user === user).map(d => d.data).map(e => e.map(f => f.name)).reduce((a, b) => a.concat(b)),
            "price": itemArr.filter(d => d.user === user).map(d => d.data).map(e => e.map(f => f.price)).reduce((a, b) => a.concat(b)),
          }
        })
        console.log(newData);
        setData(newData);
        data.forEach(e => {
        setShowCount(e.count);
        setShowName(e.name);
        setShowPrice(e.price);
      })
  }, [render])
})
return (
  <>
    <HeaderAD />
    <div className={Styles.MenuBill}>
    <div><i class="bi bi-person-circle" style={{ "marginLeft": "400px","fontSize":"50px"}}></i></div>
      <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "20px" }}>Danh sách đơn hàng</div>

      <div className={Styles.MenuBill_list}>
        <div className={Styles.MenuBill_items} style={{ "fontWeight": "500" }}>
          <ul className={Styles.MenuBill_item}>STT</ul>
          <ul className={Styles.MenuBill_item}>Tên khách hàng</ul>
          <ul className={Styles.MenuBill_item}>Số lượng đơn hàng</ul>
          <ul className={Styles.MenuBill_item}>Tổng tiền</ul>
          <ul className={Styles.MenuBill_item}>Xử lý</ul>
        </div>


        {data.map((e, index) =>
        (
          <div id={index}>
            <div className={Styles.MenuBill_items}>
              <ul className={Styles.MenuBill_item}>
                <li>{index + 1}</li>
              </ul>
              <ul style={{ "textOverflow": "clip", "whiteSpace": "nowrap", "overflow": "hidden" }} className={Styles.MenuBill_item}>
                <li>{e.user}</li>
              </ul>
              <ul className={Styles.MenuBill_item}>
                <li>{e.data.length}</li>
              </ul>
              <ul className={Styles.MenuBill_item}>
                <li>{e.cost}</li>
              </ul>
              <ul className={Styles.MenuBill_item}>
                <div className={Styles.MenuBill_button}>
                  <button style={{ "background": "red", "borderRadius": "5px", "padding": "10px" }} onClick={deleteData}>Xóa</button>
                  <button style={{ "background": "#7cab23", "borderRadius": "5px", "padding": "10px" }} onClick={handleDetail}>Chi tiết</button>
                </div>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {showDelete && (
        <DeleteMNB setRender={setRender} setShow={setShowDelete} />
      )}
      {showBill && (
        <ModalBill setShow={setShowBill} name={showName} count={showCount} price={showPrice}></ModalBill>
      )}
    </div>
  </>
);
}

export default MenuBill;