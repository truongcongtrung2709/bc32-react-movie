import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../../slides/authSlide";
import { Navigate } from "react-router-dom";

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
       // Có thông tin user => đã đăng nhập => redirect về home
        return <Navigate to="/" replace/>
    }

  return <div>
    <h1>Signin</h1>
    <form onSubmit={handleSubmit(onSubmit)} >
        <div>
            <label>Tài Khoản</label>
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
            {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
        </div>
        <div>
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
            {errors.matKhau && <span>{errors.matKhau.message}</span>}
            
        </div>
        <button disabled={loading}>Đăng Nhập</button>
        {error && <p>{error}</p>}
    </form>
  </div>;
};

export default Signin;
