import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useForm} from "react-hook-form"
import { signup } from '../../../slides/authSlide';
import { Navigate, useSearchParams } from 'react-router-dom';
import styles from "./signup.module.scss";
/** 
  object đăng ký:
  {
    "taiKhoan": "string",
    "matKhau": "string",
    "email": "string",
    "soDt": "string",
    "hoTen": "string",
    "maNhom": "string", // Không cần tạo input

  }
 */
const Signup = () => {
  const dispatch = useDispatch();
  const {user, loading, error} = useSelector((state)=> state.auth)
  const [searchParams, setSearchParams] =useSearchParams()
  const {register, handleSubmit, formState} = useForm({
    defaultValues: { taiKhoan:"",matKhau:"", email:"", soDt:"", hoTen:"" },
    mode: "onTouched"
    });

    const{errors} = formState;


    const onSubmit = (values) => {
      console.log(values);
      dispatch(signup(values));
    }
    if(user){
      const redirectUrl = searchParams.get("redirectUrl");
      return <Navigate to={redirectUrl || "/"} replace/>;
    }
  return (
    <div className={styles.signup__content}>
      <h1>Đăng Ký</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputForm}>
          <label>Tài Khoản:</label>
          <input type="text" {...register("taiKhoan",{required:{
            value:true,
            message: "Tài khoản không được để trống"},
            minLength:{
              value:5,
              message: "Tài khoản phải từ 5 tới 20 kí tự"
            },
            maxLength: {
              value:20,
              message: "Tài khoản phải từ 5 tới 20 kí tự"
            }
          })} />
          {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
        </div>
        <div className={styles.inputForm}>
          <label>Mật Khẩu:</label>
          <input type="password" {...register("matKhau",{required:{
            value:true,
            message: "Mật Khẩu không được để trống"
          },
          minLength:{
            value:5,
            message: "Mật khẩu phải từ 5 tới 20 kí tự"
          },
          maxLength:{
            value:20,
            message: "Mật khẩu phải từ 5 tới 20 kí tự"
          },

          })} />
          {errors.matKhau && <p>{errors.matKhau.message}</p>}
        </div>
        <div className={styles.inputForm}>
          <label>Email:</label>
          <input type="email" {...register("email",{required:{
            value:true,
            message: "Email không được để trống"
          }})}/>
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={styles.inputForm}>
          <label>Số Điện Thoại:</label>
          <input type="number" {...register("soDt",{required:{
            value:true,
            message: "số điện thoại không được để trống"
          }})}/>
          {errors.soDt && <p>{errors.soDt.message}</p>}
        </div>
        <div className={styles.inputForm}>
          <label>Họ Tên:</label>
          <input type="text" {...register("hoTen",{required:{
            value:true,
            message: "Họ và tên không được để trống"
          },
          minLength:{
            value:5,
            message: "Họ và tên phải từ 5 tới 20 kí tự"
          },
          maxLength:{
            value:20,
            message: "Họ và tên phải từ 5 tới 20 kí tự"
          },
          })} />
          {errors.hoTen && <p>{errors.hoTen.message}</p>}
        </div>
        <div className={styles.signup__button}>
        <button  disabled={loading} className="btn btn-danger">Đăng Ký</button>
        {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  )
}

export default Signup