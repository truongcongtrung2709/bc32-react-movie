import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../../slides/authSlide";
import { Navigate, useSearchParams } from "react-router-dom";
import styles from "./signin.module.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


/**
object đăng nhập:
{
  "taiKhoan": "string",
  "matKhau": "string"
}
*/

const Signin = () => {
    const dispatch = useDispatch();
    const {user, loading, error} = useSelector((state) => state.auth)

    // useSearchParams: trả về 1 array gồm 2 giá trị
    // - searchParams: chứa các giá trị query params trên url
    // - setSearchParams: là một hàm để cập nhật các giá trị search params trên url
    const [searchParams, setSearchParams ]= useSearchParams()
    console.log(searchParams.get("redirectUrl"));

    const {register, handleSubmit, formState } = useForm({
        defaultValues:{taiKhoan: "", matKhau: ""},
        mode:"onTouched", // điều kiện để kích hoạt validation, mặc định là onSubmit
    });

    const {errors} = formState;
    



    // const taiKhoan = register("taiKhoan");
    // console.log(taiKhoan);

    const onSubmit = (values) => {
        console.log(values);
        dispatch(signin(values))
    }
    if(user){
        const redirectUrl = searchParams.get("redirectUrl")
       // Có thông tin user => đã đăng nhập => redirect redirectUrl hoặc Home
        return <Navigate to={redirectUrl || "/"} replace/>
    }

  return( 
  <div className={styles.signin__content}>
    <h1>Đăng Nhập</h1>
    <form onSubmit={handleSubmit(onSubmit)}  >
        <div className={styles.inputForm}>
            <label>Tài Khoản:</label>
            <input {...register("taiKhoan",
            {required:{
                value:true,
                message: "Tài khoản không được để trống"},
            minLength: {
                value:5,
                message:"Tài khoản phải từ 5 tới 20 kí tự"},
            maxLength:{
                value:20,
                message:"Tài khoản phải từ 5 tới 20 kí tự"},
            })}  />
            {/* {errors.taiKhoan?.type === 'required' && <span>Tài khoản không được để trống</span>}
            {["minLength", "maxLength"].includes(errors.taiKhoan?.type) && <span> Tài khoản phải từ 5 tới 20 kí tự</span>} */}
            {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
        </div>
        <div className={styles.inputForm}>
            <label>Mật Khẩu:</label>
            <input type="password" {...register("matKhau",
            {required:{
                value:true,
                message: "Mật Khẩu không được để trống"},
            minLength: {
                value:5,
                message:"Mật Khẩu phải từ 5 tới 20 kí tự"},
            maxLength:{
                value:20,
                message:"Mật Khẩu phải từ 5 tới 20 kí tự"},
            })}  />
            {/* {errors.matKhau && <span>Mật Khẩu không được để trống</span>} */}
            {errors.matKhau && <p>{errors.matKhau.message}</p>}
            
        </div>
        <div className={styles.signin__button}>
        <button className="btn btn-danger" disabled={loading}>Đăng Nhập</button>
        {error && <p>{error}</p>}
        </div>
    </form>
  </div>
  )
};

export default Signin;
