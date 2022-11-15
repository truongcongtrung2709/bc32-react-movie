import React from 'react'
import {useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
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
  // const dispatch = useDispatch();
  const {register, handleSubmit, formState} = useForm({
    defaultValues: { taiKhoan:"",matKhau:"", email:"", soDt:"", hoTen:""},
    mode: "onTouched"
    });

    const{errors} = formState;


    const onSubmit = (values) => {
      console.log(values);
    }
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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
          {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
        </div>
        <div>
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
          {errors.matKhau && <span>{errors.matKhau.message}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register("email",{required:{
            value:true,
            message: "Email không được để trống"
          }})}/>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Số Điện Thoại:</label>
          <input type="number" {...register("soDt",{required:{
            value:true,
            message: "số điện thoại không được để trống"
          }})}/>
          {errors.soDt && <span>{errors.soDt.message}</span>}
        </div>
        <div>
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
          {errors.hoTen && <span>{errors.hoTen.message}</span>}
        </div>
        
        <button className='primary'>Đăng Ký</button>
      </form>
    </div>
  )
}

export default Signup