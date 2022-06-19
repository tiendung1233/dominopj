import React, { useEffect, useState } from "react";
import Styles from "./MenuBill.module.css";
import HeaderAD from "../HeaderAd";
function MenuBill() {
  const [data, setData] = useState([]);
  const [showCreate,setShowCreate] = useState(false);
  //const createDataAPI = ();
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

        for (let i = 0; i < itemArr.length; i++) {
          itemArrUser.push(itemArr[i].user);
        }
        function test() {
          let newData;
          return newData = [...new Set(itemArr.map(d => d.user))].map(user => {
            return {
              user,
              data: itemArr.filter(d => d.user === user).map(d => d.data)
            }
          })
        }
        console.log(test());
        setData(test());
      }, [])
  })
  return (
    <>
      <HeaderAD />
      <div className={Styles.MenuBill}>
        <div className={Styles.MenuBill_Them}>
          <div>
            <p style={{ "marginLeft": "400px", "alignItems": "center" }}></p>
          </div>
          <div>
            <button className="btn-themAC" style={{ "background": "#1baf60", "borderRadius": "5px", "marginLeft": "50px", "padding": "10px" }}>Thêm</button>
          </div>
        </div>
        <div style={{ "textAlign": "center", "fontWeight": "600", "marginBottom": "10px", "marginTop": "20px" }}>Danh sách tài khoản được cấp</div>
        <div className={Styles.MenuBill_list}>
          {data.map((e) =>
          (
            <>
              <ul className={Styles.MenuBill_item}>
                <li>{e.user}</li>
              </ul>
              <ul className={Styles.MenuBill_item}>
                <li>
                  {e.data.map(item=>{
                    item.map(it=>it.img)
                  })}
                </li>
              </ul>
              <ul className={Styles.MenuBill_item}>
                <div className={Styles.MenuBill_button}>
                  <button style={{ "background": "#00bff8", "borderRadius": "5px", "padding": "10px" }}>Sửa</button>
                  <button style={{ "background": "red", "borderRadius": "5px", "padding": "10px" }}>Xóa</button>
                </div>
              </ul>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuBill;