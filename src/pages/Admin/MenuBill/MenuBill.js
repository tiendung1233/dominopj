import React, { useEffect, useState } from "react";
import Styles from "./MenuBill.module.css";
import HeaderAD from "../HeaderAd";
function MenuBill() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://627a232473bad506858340e5.mockapi.io/api/pizza/CheckoutData?fbclid=IwAR1WyrTaBJXTxJExoaliOJh1b97yyk2WSJ4VwFba-rBJ4i01M3biYUI_cd0")
      .then((res) => res.json())
      .then((item) => {
        let itemArr = [];
        let itemArrUser = [];
        const itemLength = item.length;
        for (let i = 1; i < itemLength; i++) {
          itemArr.push(item[i]);
        }
        console.log(itemArr);
        for (let i = 0; i < itemArr.length; i++) {
          itemArrUser.push(itemArr[i].user);
        }
        console.log(itemArrUser);
        //bat trung lap du lieu
        let userItem = Array.from(new Set(itemArrUser));
        console.log(userItem);
        let userData = [];


        const newData = [...new Set(userItem.forEach(e=>
          {
            for (let i = 0; i < itemArr.length; i++) {
              if(e===itemArr[i].user)
              {
                userData.push({e:itemArr[i].data});
              }
            }
          }))]
        console.log(newData);
        // userItem.forEach((e) => {
        //   const name=e.target;
        //   for (let i = 0; i < itemArr.length; i++) {
        //     if (e === itemArr[i].user) {
        //       userData.push({[name]:itemArr[i].data});
        //     }
        //   }
        // })
        console.log(userData);
      }, [])
  })
  return (
    <>
      <HeaderAD />
      <div className={Styles.MenuBill}>
        <div className={Styles.MenuBill_Them}>
          <div>
            <p style={{ "marginLeft": "400px", "alignItems": "center" }}>Thêm tài khoản có quyền quản trị ADMIN :</p>
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
                <li>{e.id - 1}</li>
              </ul>
              <ul className={Styles.MenuBill_item}>
                <li>{e.user}</li>
              </ul>
              <ul className={Styles.MenuBill_item}>
                <li>
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