import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./logo.png";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__personal}>
        <ul className="list__personal">
        <li><a href="">
        <i className="fa-solid fa-people-group"></i>TUYỂN DỤNG
          </a>
          </li>
        <li><a href="">
          <i className="fa-regular fa-newspaper"></i>TIN MỚI & ƯU ĐÃI 
          </a>
          </li>
        <li><a href="">
          <i className="fa-solid fa-ticket"></i>VÉ CỦA TÔI
          </a>
          </li>
        <li>
          <a href=""><i className="fa-solid fa-user"></i></a>
          <Link to="/login">ĐĂNG NHẬP/</Link>
          <Link to="/signup">ĐĂNG KÝ</Link>
        </li>
        </ul>
      </div>
      <div className={styles.header__menu} >
      <div><a href="">
          <img src={logo} alt="logo" width={"120px"}  />
          </a></div>
          <div className={styles.menu}>
        <ul>
          <li><a href="">PHIM</a></li>
          <li><a href="">RẠP TCT</a></li>
          <li><a href="">THÀNH VIÊN</a></li>
          <li><a href="">CULTUREPLEX</a></li>
        </ul>
        </div>

      </div>
      <div>     
      </div>
    </div>
  );
};

export default Header;
