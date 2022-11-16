import { isFulfilled } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./logo.png";
import {logout} from "../../slides/authSlide"
const Header = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state)=> state.auth)

  const handleLogout = () => {
    dispatch(logout());
    alert("Bạn đã đăng xuất")
  }

const Logged = () =>{
    return(
    <div>
      <Link to="/">Xin Chào {user.hoTen}</Link>
      <Link className="mx-4" onClick={handleLogout}>ĐĂNG XUẤT</Link>
      </div>
    )
}
  const Nonlogged = () =>{
    return(
        <div>
          <Link to="/signin"><i className="fa-solid fa-user"></i>ĐĂNG NHẬP/</Link>
          <Link to="/signup">ĐĂNG KÝ</Link>
        </div>
      )
  }
  return (
    <div className={styles.header}>
      <div className={styles.header__personal}>
        <ul className={styles.header__personal__menu}>
        <li><Link to="/">
        <i className="fa-solid fa-people-group"></i>TUYỂN DỤNG
          </Link>
          </li>
        <li><Link href="/">
          <i className="fa-regular fa-newspaper"></i>TIN MỚI & ƯU ĐÃI 
          </Link>
          </li>
        <li><Link href="/">
          <i className="fa-solid fa-ticket"></i>VÉ CỦA TÔI
          </Link>
          </li>
        <li>
        {user ?<Logged/> : <Nonlogged/>}
         
          
        </li>
        </ul>
      </div>
      <div className={styles.header__tickets__background}>

      <div className={styles.header__tickets__menu}>
         
          <div className={styles.logo}><a href="/">
          <img src={logo} alt="logo" width={"200px"}/>
          </a></div>
          <div className={styles.header__tickets__menu__option}>
        <ul>
          <li className={styles.option__item}><a href="/">PHIM</a></li>
          <li className={styles.option__item}><a href="/">RẠP TCT</a></li>
          <li className={styles.option__item}><a href="/">THÀNH VIÊN</a></li>
          <li className={styles.option__item}><a href="/">CULTUREPLEX</a></li>
        </ul>
        </div>
        </div>
      </div>
      <div>     
      </div>
    </div>
  );
};

export default Header;
