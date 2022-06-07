// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from "./Menu.module.css";
import { Link } from 'react-router-dom';
import Menu_pizza_details from '../../components/Layout/DefaultLayout/Menu_Details/Menu_details';
import Sub_cart from './Sub_cart';
import Menu_detail_food from "../../components/Layout/DefaultLayout/Menu_Details/Menu_detail_food";
import CartContext from "../../Context/CartContext";
import UpdateCartContext from "../../Context/UpdateCartContext";

// import { type } from '@testing-library/user-event/dist/type';

export default function Menu() {
    const api = "https://627a232473bad506858340e5.mockapi.io/api/pizza/pizza";
    const headerBtn = ["My y", "Mon phu", "Trang mieng", "Nuoc uong"]; // List Button of TypeMenu
    const subHeaderBtn = ["Hai san", "Bo", "Ga", "Heo", "An chay"]; //List Button of subType
    let menuBtn = document.querySelectorAll(`.${styles.menu_btn}`)
    let subBtn = document.querySelectorAll(`.${styles.subMenu_btn}`)
    // console.log(subBtn[0]);

    const [menu, showMenu] = useState([]); //Get Data Menu from Api
    const [defaultMenu, checkDefaultMenu] = useState(true); //Check Pizza Menu or other Menu
    const [typeMenu, setType] = useState('Pizza'); //Set Type of Menu ::: Initial value = Pizza
    const [subType, setSubType] = useState('');// Set Type of Pizza Menu
    const [dataMenu, showData] = useState([]) // Get Menu from data
    const [firstTime, setFirst] = useState(true); // Check the first time visit =))

    // SHow detail Pizza Menu
    const [detail, showDetail] = useState(false);
    const [propsPizzaImg, setPropsPizzaImg] = useState('')
    const [propsPizzaName, setPropsPizzaName] = useState('')
    const [propsTypePizza, setTypePizza] = useState()
    // Show detail other Menu
    const [otherDetail, setOtherDetail] = useState(false);
    const [costItem, setCostItem] = useState(0);

    // Global State
    const [updateItems, setUpdate] = useState('') // Update items



    //Call api
    useEffect(() => {
        let mounted = true;
        fetch(api)
            .then(res => res.json())
            .then(data => {
                if (mounted) {
                    showMenu(data);
                    console.log(menu);
                }
            })
    }, [])

    //Set DefaultMenu --- Check Pizza Menu
    //If users choose btn Pizza: defaultMenu = true
    useEffect(() => {
        if (typeMenu === "Pizza" && subType === "") {
            // console.log(defaultMenu);
            // setSubType("Tat ca")
            checkDefaultMenu(true);
        }
        else if (typeMenu === "Pizza") {
            // console.log(defaultMenu);
            setSubType("")
            checkDefaultMenu(true);
            console.log(typeMenu);
        }
        else if (typeMenu !== "Pizza") {
            // setFirst(true)
            checkDefaultMenu(false)
            let itemMenu = menu.filter(e => e.title === typeMenu);
            showData(itemMenu);
            console.log(dataMenu);
        }
    }, [typeMenu])//Re-render when typeMenu change


    useEffect(() => {
        if (defaultMenu) {
            if (subType === "Tat ca" || subType === "") {
                let item = menu.filter(e => e.title === "Tat ca");
                showData(item);
                // console.log(dataMenu);
            }
            else {
                let items = menu.filter(e => e.type === subType);
                showData(items)
                // console.log(dataMenu);
            }
        }

    }, [subType])//Re-render when subType change

    // Show Pizza menu detail
    const showDetailMenu = (el) => {
        showDetail(true)
        let img = el.currentTarget.querySelector("div img").getAttribute("src")
        let name = el.currentTarget.querySelector("li").innerHTML;
        let rateType = el.currentTarget.querySelector("p").innerHTML;
        setPropsPizzaImg(img);
        setPropsPizzaName(name);
        setTypePizza(rateType);
        // document.querySelector("body").classList.add(styles.disable)
        setChange(false)
        // console.log(detail);
    }

    // Show Other menu detail
    const setOtherDetailMenu = (el) => {
        let cost = el.currentTarget.querySelector("span").innerHTML;
        console.log(el.currentTarget.querySelector("span"));
        setCostItem(Number(cost))
        setOtherDetail(true)
        let img = el.currentTarget.querySelector("div img").getAttribute("src")
        let name = el.currentTarget.querySelector("li").innerHTML;
        setPropsPizzaImg(img);
        setPropsPizzaName(name)
        setChange(false)
    }

    // const detailMenu = document.querySelectorAll(`.${styles.content_otherMenu}`);





    return (
            <UpdateCartContext.Provider value={{ updateItems, setUpdate }}>
                <div className={`${styles.container_menu}`}>
                    <div className={`${styles.content_menu}`} id="flex-2">
                        <div className={`${styles.header_menu}`}>
                            <Link to='/voucher' className={`${styles.link}`}>Khuyen mai moi ngay</Link>
                            <li className={`${styles.pizza_btn} ${styles.active}`} onClick={(el) => {
                                setFirst(false)//set the First time = false
                                setType("Pizza")
                                setSubType("Tat ca");
                                el.currentTarget.classList.add(styles.active);//Set Css
                                menuBtn.forEach(e => {
                                    e.classList.remove(styles.active);
                                })

                            }}>Pizza</li>
                            {headerBtn.map(e => (
                                <li key={e} value={e} className={`${styles.menu_btn}`} onClick={(el) => {
                                    setType(e)
                                    setFirst(false)
                                    // console.log(btnCheckMenu)

                                    //Set Css
                                    document.querySelector(`.${styles.pizza_btn}`).classList.remove(styles.active)
                                    menuBtn.forEach(e => {
                                        e.classList.remove(styles.active);
                                    })
                                    el.currentTarget.classList.add(styles.active)


                                    // console.log(defaultMenu);
                                }}>
                                    {e}
                                </li>
                            ))}
                        </div>



                        {/* If Default === false => Render UI of other Menu */}
                        {defaultMenu === false && (
                            <div className={styles.overflow}>
                                <div className={`${styles.rate_title}`}>
                                    <h1 className={`${styles.rate}`}>{typeMenu}</h1>
                                    <div className={`${styles.otherMenu}`}>
                                        {dataMenu.map(e => {
                                            return (
                                                <ul onClick={setOtherDetailMenu} className={`${styles.content_otherMenu}`}>
                                                    <div>
                                                        <img src={e.img} />
                                                    </div>
                                                    <p style={{ "display": "none" }}>{e.rate}</p>
                                                    <li key={e.id} style={{ color: "blue" }}>{e.name}</li>
                                                    <li> Gia: <span className={styles.cost} >{e.cost}</span></li>
                                                </ul>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* If Default === true => Render UI of Pizza Menu */}
                        {(defaultMenu) && (
                            <div className={`${styles.main_menu}`}>
                                {/* List Button of Sub Menu */}
                                <div className={`${styles.sub_header}`}>
                                    <li className={`${styles.subMenu_btn_all} ${styles.active_sub}`}
                                        onClick={(el) => {
                                            setFirst(false)
                                            setSubType("Tat ca")
                                            subBtn.forEach(e => {
                                                e.classList.remove(styles.active_sub);
                                            })
                                            el.currentTarget.classList.add(styles.active_sub);
                                            // console.log(el.target)
                                        }}
                                    >
                                        Tat ca
                                    </li>
                                    {subHeaderBtn.map(e => (
                                        <li
                                            className={`${styles.subMenu_btn}`}
                                            key={e}
                                            onClick={(el) => {
                                                setFirst(false)
                                                setSubType(e)
                                                subBtn.forEach(e => {
                                                    e.classList.remove(styles.active_sub);
                                                })
                                                el.currentTarget.classList.add(styles.active_sub);
                                                document.querySelector(`.${styles.subMenu_btn_all}`).classList.remove(styles.active_sub)
                                                // console.log(el.target)
                                            }}>
                                            {e}
                                        </li>
                                    ))}
                                </div>


                                {(firstTime === false) && (
                                    <div className={styles.overflow}>
                                        <div className={`${styles.rate_title}`}>
                                            <div className={`${styles.rate}`} style={{ color: 'black' }}>
                                                <i className={`bi bi-star-fill`}></i>
                                                PREMIUM
                                                <i className={`bi bi-star-fill`}></i></div>
                                            <div className={`${styles.otherMenu}`}>
                                                {/* Render Menu */}
                                                {dataMenu.map(e => {
                                                    if (e.rate === "premium") {
                                                        return (
                                                            <ul onClick={showDetailMenu} className={`${styles.content_otherMenu}`} >
                                                                <div>
                                                                    <img src={e.img} />
                                                                </div>
                                                                <p style={{ "display": "none" }}>{e.rate}</p>
                                                                <li key={e.id} style={{ color: "blue" }}>{e.name}</li>
                                                                <li> Gia: {e.cost}</li>
                                                            </ul>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>


                                        {/* Signature */}
                                        <div className={`${styles.rate_title}`}>
                                            <div className={`${styles.rate}`} style={{ color: 'black' }}>
                                                <i className={`bi bi-star-fill`}></i>
                                                SIGNATURE
                                                <i className={`bi bi-star-fill`}></i></div>
                                            <div className={`${styles.otherMenu}`}>
                                                {/* Render Menu */}
                                                {dataMenu.map(e => {
                                                    if (e.rate === "signature") {
                                                        return (
                                                            <ul onClick={showDetailMenu} className={`${styles.content_otherMenu}`}>
                                                                <div>
                                                                    <img src={e.img} />
                                                                </div>
                                                                <p style={{ "display": "none" }}>{e.rate}</p>
                                                                <li key={e.id} style={{ color: "blue" }}>{e.name}</li>
                                                                <li> Gia: {e.cost}</li>
                                                            </ul>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>


                                        {/* Favorite */}
                                        <div className={`${styles.rate_title}`}>
                                            <div className={`${styles.rate}`} style={{ color: 'black' }}>
                                                <i className={`bi bi-star-fill`}></i>
                                                FAVORITE
                                                <i className={`bi bi-star-fill`}></i></div>
                                            <div className={`${styles.otherMenu}`}>
                                                {/* Render Menu */}
                                                {dataMenu.map(e => {
                                                    if (e.rate === "favorite") {
                                                        return (
                                                            <ul onClick={showDetailMenu} className={`${styles.content_otherMenu}`}>
                                                                <div>
                                                                    <img src={e.img} />
                                                                </div>
                                                                <p style={{ "display": "none" }}>{e.rate}</p>
                                                                <li key={e.id} style={{ color: "blue" }}>{e.name}</li>
                                                                <li> Gia: {e.cost}</li>
                                                            </ul>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}



                            </div>
                        )}


                        {/* If First time === true =>Render Ui Pizza Menu */}
                        {firstTime && (
                            <div className={styles.overflow}>

                                <div className={`${styles.rate_title}`}>
                                    <div className={`${styles.rate}`} style={{ color: 'black' }}>
                                        <i className={`bi bi-star-fill`}></i>
                                        PREMIUM
                                        <i className={`bi bi-star-fill`}></i>
                                    </div>
                                    <div className={`${styles.otherMenu}`}>
                                        {menu.map(e => {
                                            if (e.title === "Tat ca" && e.rate === "premium") {
                                                return (
                                                    <ul onClick={showDetailMenu} className={`${styles.content_otherMenu}`}>
                                                        <div>
                                                            <img src={e.img} />
                                                        </div>
                                                        <p style={{ "display": "none" }}>{e.rate}</p>
                                                        <li key={e.id} style={{ color: "blue" }}>{e.name}</li>
                                                        <li> Gia: {e.cost}</li>
                                                    </ul>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>

                                <div className={`${styles.rate_title}`}>
                                    <div className={`${styles.rate}`} style={{ color: 'black' }}>
                                        <i className={`bi bi-star-fill`}></i>
                                        SIGNATURE
                                        <i className={`bi bi-star-fill`}></i>
                                    </div>
                                    <div className={`${styles.otherMenu}`}>
                                        {menu.map(e => {
                                            if (e.title === "Tat ca" && e.rate === "signature") {
                                                return (
                                                    <ul onClick={showDetailMenu} className={`${styles.content_otherMenu}`}>
                                                        <div>
                                                            <img src={e.img} />
                                                        </div>
                                                        <p style={{"display":"none"}}>{e.rate}</p>
                                                        <li key={e.id} style={{ color: "blue" }}>{e.name}</li>
                                                        <li> Gia: {e.cost}</li>
                                                    </ul>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>

                                <div className={`${styles.rate_title}`}>
                                    <div className={`${styles.rate}`} style={{ color: 'black' }}>
                                        <i className={`bi bi-star-fill`}></i>
                                        FAVORITE
                                        <i className={`bi bi-star-fill`}></i>
                                    </div>
                                    <div className={`${styles.otherMenu}`}>
                                        {menu.map(e => {
                                            if (e.title === "Tat ca" && e.rate === "favorite") {
                                                return (
                                                    <ul onClick={showDetailMenu} className={`${styles.content_otherMenu}`}>
                                                        <div>
                                                            <img src={e.img} />
                                                        </div>
                                                        <p style={{"display":"none"}}>{e.rate}</p>
                                                        <li key={e.id} style={{ color: "blue" }}>{e.name}</li>
                                                        <li> Gia: {e.cost}</li>
                                                    </ul>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>


                            </div>
                        )}
                    </div>


                    {/* Show detail Pizza Menu when user click products */}
                    {detail && (
                        <Menu_pizza_details name={propsPizzaName} img={propsPizzaImg} showDetail={showDetail} type={propsTypePizza} >

                        </Menu_pizza_details>
                    )}


                    {otherDetail && (
                        <Menu_detail_food name={propsPizzaName} img={propsPizzaImg} setOtherDetail={setOtherDetail} cost={costItem}
                            type={propsTypePizza} />
                    )}

                    <Sub_cart></Sub_cart>
                </div>
            </UpdateCartContext.Provider>
    )

}