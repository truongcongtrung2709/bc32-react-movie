import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, useLocation } from 'react-router-dom';

// Kiểm tra xem user có quyền truy cập vào /checkout/:checkoutId hay không?
const UserProtected = ({children}) => {
    const {user} = useSelector((state)=> state.auth)
    // userLocation trả về một object chứa thông tin URL hiện tại của browser
    const location = useLocation();
    console.log(location);
    // chưa đăng nhập
    if(!user){

      // Lưu lại url hiện tại vào query param là redirectUrl để sau khi signin thành công chuyển user về lại url hiện tại
      const url = `/signin?redirectUrl=${location.pathname}`;
      return <Navigate to={url} replace />
    }

    return children;
 

}

export default UserProtected