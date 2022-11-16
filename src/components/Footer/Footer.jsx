import React from 'react'
import styles from './footer.module.scss'
import logo from '../Header/logo.png'
const Footer = () => {
  return (
    <div className={`my-5 ${styles.footer}`}>
      <div className={`container ${styles.footer__content}`}>
        <div className={styles.footer__content__contact}>
        <div className={styles.footer__content__contact__item}>
          <ul>
            <h6>TCT Việt Nam</h6>
            <li><a href="/">Giới Thiệu</a></li>
            <li><a href="/">Tiện Ích Online</a></li>
            <li><a href="/">Thẻ Quà Tặng</a></li>
            <li><a href="/">Tuyển Dụng</a></li>
            <li><a href="/">Liên Hệ Quảng Cáo CGV</a></li>
          </ul>
        </div>
        <div className={styles.footer__content__contact__item}>
          
          <ul>
            <h6>Điều khoản sử dụng</h6>
            <li><a href="/">Điều Khoản Chung</a></li>
            <li><a href="/">Điều khoản Giao Dịch</a></li>
            <li><a href="/">Chính Sách Thanh Toán</a></li>
            <li><a href="/">Chính Sách Bảo Mật</a></li>
            <li><a href="/">Câu Hỏi Thường Gặp</a></li>
          </ul>
        </div>
        <div className={styles.footer__content__contact__item}>
          <ul>
            <h6>Kết nối với chúng tôi</h6>
            <div className={styles.footer__content__contact__item__social}>
            <li><a href="/"><i className="fa-brands fa-square-facebook"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-square-youtube"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-square-instagram"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
            </div>
            <img src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png" alt="" width="150px" />
          </ul>
        </div>
        <div className={styles.footer__content__contact__item}>
          <ul>
            <h6>Chăm Sóc Khách Hàng</h6>
            <li><a href="/">Hotline: 0778046560</a></li>
            <li><a href="/">Giờ làm việc: 8:00 - 22:00</a></li>
            <li><a href="/">Email Hổ trợ: truongcongtrung2709@gmail.com</a></li>
          </ul>
         </div>      
        </div>
        <div className={`my-5 ${styles.footer__content__company}`}>
          <img src={logo} alt="" width="150px" />
          <div className={styles.footer__content__company__info}>
            <h6>CÔNG TY TNHH TCT VIETNAM</h6>
            <p>Giấy CNĐKDN: 025518279, đăng ký lần đầu ngày 16/11/2022, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.</p>
            <p>Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.</p>
            <p>Hotline: 0778046560</p>
            <p>COPYRIGHT 2017 CJ TCT. All RIGHTS RESERVED .</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer