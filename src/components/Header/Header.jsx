import { isFulfilled } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./logo.png";
import {logout} from "../../slides/authSlide"
const Header = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state)=> state.auth)
  const [headerColor, setheaderColor] = useState(false)
  const handleLogout = () => {
    dispatch(logout());
    alert("Bạn đã đăng xuất")
  }
const handleScroll = ()  =>{
if(window.scrollY>200){
  setheaderColor(true)
}else{
  setheaderColor(false)
}
}
  useEffect(()=>{
    handleScroll()
    window.addEventListener("scroll",handleScroll)
  })
const Logged = () =>{
    return(
    <div>
      <Link to="/">Xin Chào {user.hoTen}</Link>
      <Link className="mx-4" onClick={handleLogout}>Đăng Xuất</Link>
      </div>
    )
}
  const Nonlogged = () =>{
    return(
        <div>
          <Link to="/signin">Đăng Nhập/</Link>
          <Link to="/signup">Đăng Ký</Link>
        </div>
      )
  }
  return (
    <div className={styles.header} style={headerColor ? {background:"transparent"}: {background:"black"}}>
      <div className={`row ${styles.header__movies}`} >
        <div className={`${styles.logo} col-3 row`}>
          <Link to="/" className="col-6"><img src={logo} alt="" width="100px"/></Link>
          <Link to="/" className={`col-6 ${styles.logo__text}`}><span>TCT Cine</span></Link>

        </div> 
        <ul className={`col-5 ${styles.header__movies__menu}`}>
        <li><Link to="/">
        Phim
          </Link>
          </li>
          <li><Link to="/">
        Lịch Chiếu
          </Link>
          </li>
        <li><Link to="/">
        Khuyến Mãi
          </Link>
          </li>
        <li><Link to="/">
        Tin Tức
          </Link>
          </li>
        <li><Link href="/">
          Giới Thiệu 
          </Link>
          </li>
        <li><Link href="/">
          Liên Hệ
          </Link>
          </li>
        
        </ul>
        <div className={`${styles.account} col-4`}>
        {user ?<Logged/> : <Nonlogged/>}
          
        </div>
      </div>

      <div>     
      </div>
    </div>
  );
};

export default Header;
