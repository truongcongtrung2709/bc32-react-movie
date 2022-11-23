import { isFulfilled } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./logo.png";
import {logout} from "../../slides/authSlide"
//navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Form } from "react-bootstrap";
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
    <Nav className={` ${styles.account}`}>
      <Nav.Link href="/">Xin Chào {user.hoTen}</Nav.Link>
      <Nav.Link onClick={handleLogout}>Đăng Xuất</Nav.Link>
      
      </Nav>
    )
}
  const Nonlogged = () =>{
    return(
        <Nav className={` ${styles.account}`}>
          <Nav.Link href="/account/signin">Đăng Nhập</Nav.Link>
          <Nav.Link href="/account/signup">Đăng Ký</Nav.Link>
        </Nav>
      )
  }
  return (
    
    <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.header} style={headerColor ? {background:"transparent"}: {background:"black"}}>
      
        <Navbar.Brand href="/" className={styles.header__logo}>
          <img src={logo} alt="" width="100px"/>
          <span className={styles.header__logo__text}>TCT Cine</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`me-auto ${styles.menu}`}>
            <Nav.Link href="/">Phim</Nav.Link>
            <Nav.Link href="/">Lịch Chiếu</Nav.Link>
            <Nav.Link href="/">Khuyến Mãi</Nav.Link>
            <Nav.Link href="/">Tin Tức</Nav.Link>
            <Nav.Link href="/">Giới Thiệu</Nav.Link>
            <Nav.Link href="/">Liên Hệ</Nav.Link>
          </Nav>
          {user ?<Logged/> : <Nonlogged/>}
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
