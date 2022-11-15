import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./logo.png";
const Header = () => {
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
          <Link href="/"><i className="fa-solid fa-user"></i></Link>
          <Link to="/signin">ĐĂNG NHẬP/</Link>
          <Link to="/signup">ĐĂNG KÝ</Link>
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
