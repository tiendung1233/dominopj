import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from "./Menu.module.css";
import { Link } from 'react-router-dom';
// import { type } from '@testing-library/user-event/dist/type';

export default function Menu(){

    const api ="https://627a232473bad506858340e5.mockapi.io/api/pizza/pizza"; 
    const headerBtn = ["My y", "Mon phu","Trang mieng","Nuoc uong"]; // List Button of TypeMenu
    const subHeaderBtn = ["Hai san", "Bo","Ga", "Heo","An chay"]; //List Button of subType
    let menuBtn = document.querySelectorAll(`.${styles.menu_btn}`)
    let subBtn = document.querySelectorAll(`.${styles.subMenu_btn}`)
    // console.log(subBtn[0]);

    const [menu, showMenu] = useState([]); //Get Data Menu from Api
    const [defaultMenu, checkDefaultMenu] = useState(true); //Check Pizza Menu or other Menu
    const [typeMenu,setType] = useState('Pizza'); //Set Type of Menu ::: Initial value = Pizza
    const [subType,setSubType] = useState('');// Set Type of Pizza Menu
    const [dataMenu, showData] = useState([]) // Get Menu from data
    const [firstTime, setFirst] = useState(true); // Check the first time visit =))

    //Call api
    useEffect(()=>{
        let mounted = true;
        fetch(api)
        .then(res=>res.json())
        .then(data=>{
            if(mounted){
                showMenu(data);
                console.log(menu);
            }
        })
    },[]) 

    //Set DefaultMenu --- Check Pizza Menu
    //If users choose btn Pizza: defaultMenu = true
    useLayoutEffect(()=>{
        if(typeMenu==="Pizza"&&subType===""){
            // console.log(defaultMenu);
            // setSubType("Tat ca")
            checkDefaultMenu(true);
        }
        else if(typeMenu==="Pizza"){
            // console.log(defaultMenu);
            setSubType("")
            checkDefaultMenu(true);
            console.log(typeMenu);
        }
        else if(typeMenu!=="Pizza"){
            // setFirst(true)
            checkDefaultMenu(false)
            let itemMenu = menu.filter(e=>e.title===typeMenu);
            showData(itemMenu);
            console.log(dataMenu);
        }
    },[typeMenu])//Re-render when typeMenu change
    

    useLayoutEffect(()=>{
        if(defaultMenu){
            if(subType==="Tat ca"||subType===""){
                let item = menu.filter(e=>e.title==="Tat ca");
                showData(item);
                // console.log(dataMenu);
            }
            else{
                let items = menu.filter(e=>e.type===subType);
                showData(items)
                // console.log(dataMenu);
                }
        }

    },[subType])//Re-render when subType change





    return (
        <div className={`${styles.container_menu}`}>
            <div className={`${styles.content_menu}`}>

                <div className={`${styles.header_menu}`}>
                    <Link to ='/voucher'className={`${styles.link}`}>Khuyen mai moi ngay</Link>
                    <li className={`${styles.pizza_btn} ${styles.active}`} onClick={(el)=>{
                        setFirst(false)//set the First time = false
                        setType("Pizza")
                        setSubType("Tat ca");
                        el.currentTarget.classList.add(styles.active);//Set Css
                        menuBtn.forEach(e=>{
                                e.classList.remove(styles.active);
                            })
                        
                    }}>Pizza</li>
                    {headerBtn.map(e=>(
                        <li key={e} value={e} className={`${styles.menu_btn}`} onClick={(el)=>{
                            setType(e)
                            setFirst(false)
                            // console.log(btnCheckMenu)

                            //Set Css
                            document.querySelector(`.${styles.pizza_btn}`).classList.remove(styles.active)
                            menuBtn.forEach(e=>{
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
                {defaultMenu===false&&(
                    <div className={`${styles.rate_title}`}>
                        <h1 className={`${styles.rate}`}>{typeMenu}</h1>
                        <div className={`${styles.otherMenu}`}>
                        {dataMenu.map(e=>{
                                return(
                                <ul className={`${styles.content_otherMenu}`}>
                                    <div>
                                        <img src={e.img}/>
                                    </div>
                                    <li key={e.id} style={{color:"blue"}}>{e.name}</li>
                                    <li> Gia: {e.cost}</li>
                                </ul>
                                )
                            })}
                        </div>
                    </div>
                )}
                
                {/* If Default === true => Render UI of Pizza Menu */}
               {(defaultMenu)&& (
                <div className={`${styles.main_menu}`}>
                    <div className={`${styles.sub_header}`}>
                        <li className={`${styles.subMenu_btn_all} ${styles.active_sub}`}
                         onClick={(el)=>{
                                setFirst(false)
                                setSubType("Tat ca")
                                subBtn.forEach(e=>{
                                    e.classList.remove(styles.active_sub);
                                })
                                el.currentTarget.classList.add(styles.active_sub);
                                // console.log(el.target)
                                }}
                        >
                            Tat ca
                        </li>
                        {subHeaderBtn.map(e=>(
                            <li 
                            className={`${styles.subMenu_btn}`} 
                            key={e}
                            onClick={(el)=>{
                                setFirst(false)
                                setSubType(e)
                                subBtn.forEach(e=>{
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

                
                {(firstTime===false)&&(
                    <div>
                    <div className={`${styles.rate_title}`}>
                            <div className={`${styles.rate}`} style={{color:'black'}}>
                            <i className={`bi bi-star-fill`}></i>
                            PREMIUM
                            <i className={`bi bi-star-fill`}></i></div>
                            <div className={`${styles.otherMenu}`}>   
                        {/* Render Menu */}
                        {dataMenu.map(e=>{
                            if(e.rate==="premium"){
                                return( 
                                    <ul className={`${styles.content_otherMenu}`}>
                                        <div>
                                            <img src={e.img}/>
                                        </div>
                                        <li key={e.id} style={{color:"blue"}}>{e.name}</li>
                                        <li> Gia: {e.cost}</li>
                                    </ul>
                                )
                            }   
                    })}
                        </div>
                    </div>


                    {/* Signature */}
                    <div className={`${styles.rate_title}`}>
                            <div className={`${styles.rate}`} style={{color:'black'}}>
                            <i className={`bi bi-star-fill`}></i>
                            SIGNATURE
                            <i className={`bi bi-star-fill`}></i></div>
                            <div className={`${styles.otherMenu}`}>   
                        {/* Render Menu */}
                        {dataMenu.map(e=>{
                            if(e.rate==="signature"){
                                return( 
                                    <ul className={`${styles.content_otherMenu}`}>
                                        <div>
                                            <img src={e.img}/>
                                        </div>
                                        <li key={e.id} style={{color:"blue"}}>{e.name}</li>
                                        <li> Gia: {e.cost}</li>
                                    </ul>
                                )
                            }   
                    })}
                        </div>
                    </div>


                    {/* Favorite */}
                    <div className={`${styles.rate_title}`}>
                            <div className={`${styles.rate}`} style={{color:'black'}}>
                            <i className={`bi bi-star-fill`}></i>
                            FAVORITE
                            <i className={`bi bi-star-fill`}></i></div>
                            <div className={`${styles.otherMenu}`}>   
                        {/* Render Menu */}
                        {dataMenu.map(e=>{
                            if(e.rate==="favorite"){
                                return( 
                                    <ul className={`${styles.content_otherMenu}`}>
                                        <div>
                                            <img src={e.img}/>
                                        </div>
                                        <li key={e.id} style={{color:"blue"}}>{e.name}</li>
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
            {firstTime &&(
                <div>

                    {/* Button */}
                    {/* <div className={`${styles.sub_header}`}>
                        <li className={`${styles.subMenu_btn_all} ${styles.active_sub}`}
                         onClick={(el)=>{
                                setFirst(false)
                                setSubType("Tat ca")
                                subBtn.forEach(e=>{
                                    e.classList.remove(styles.active_sub);
                                })
                                el.currentTarget.classList.add(styles.active_sub);
                                // console.log(el.target)
                                }}
                        >
                            Tat ca
                        </li>
                        {subHeaderBtn.map(e=>(
                            <li 
                            className={`${styles.subMenu_btn}`} 
                            key={e}
                            onClick={(el)=>{
                                setFirst(false)
                                setSubType(e)
                                subBtn.forEach(e=>{
                                    e.classList.remove(styles.active_sub);
                                })
                                el.currentTarget.classList.add(styles.active_sub);
                                document.querySelector(`.${styles.subMenu_btn_all}`).classList.remove(styles.active_sub)
                                // console.log(el.target)
                                }}>
                            {e}
                            </li>
                        ))}
                    </div> */}

                    <div className={`${styles.rate_title}`}>
                        <div className={`${styles.rate}`} style={{color:'black'}}>
                            <i className={`bi bi-star-fill`}></i>
                            PREMIUM
                            <i className={`bi bi-star-fill`}></i>
                        </div>
                        <div className={`${styles.otherMenu}`}>
                            {menu.map(e=>{
                                if(e.title==="Tat ca"&&e.rate==="premium"){
                                    return (
                                    <ul className={`${styles.content_otherMenu}`}>
                                            <div>
                                                <img src={e.img}/>
                                            </div>
                                        <li key={e.id} style={{color:"blue"}}>{e.name}</li> 
                                        <li> Gia: {e.cost}</li>
                                    </ul>
                                    )
                                }
                            })}
                        </div>
                    </div>

                    <div className={`${styles.rate_title}`}>
                        <div className={`${styles.rate}`} style={{color:'black'}}>
                            <i className={`bi bi-star-fill`}></i>
                            SIGNATURE
                            <i className={`bi bi-star-fill`}></i>
                        </div>
                        <div className={`${styles.otherMenu}`}>
                            {menu.map(e=>{
                                if(e.title==="Tat ca"&&e.rate==="signature"){
                                    return (
                                    <ul className={`${styles.content_otherMenu}`}>
                                            <div>
                                                <img src={e.img}/>
                                            </div>
                                        <li key={e.id} style={{color:"blue"}}>{e.name}</li> 
                                        <li> Gia: {e.cost}</li>
                                    </ul>
                                    )
                                }
                            })}
                        </div>
                    </div>

                    <div className={`${styles.rate_title}`}>
                        <div className={`${styles.rate}`} style={{color:'black'}}>
                            <i className={`bi bi-star-fill`}></i>
                            FAVORITE
                            <i className={`bi bi-star-fill`}></i>
                        </div>
                        <div className={`${styles.otherMenu}`}>
                            {menu.map(e=>{
                                if(e.title==="Tat ca"&&e.rate==="favorite"){
                                    return (
                                    <ul className={`${styles.content_otherMenu}`}>
                                            <div>
                                                <img src={e.img}/>
                                            </div>
                                        <li key={e.id} style={{color:"blue"}}>{e.name}</li> 
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
        </div>
    )

}