import React from 'react'
import {useForm} from 'react-hook-form'
import fetcher from '../../services/fetcher'

// Bắt buộc: tenPhim, biDanh, moTa, ngayKhoiChieu, trailer, hinhAnh, maNhom
// Không bắt buộc: dangChieu, danhGia, hot, sapChieu

// maNhom: hardcode ( không cần tạo input)
// ngayKhoiChieu: phải đúng định dạng DD-MM-YYYY hh:mm:ss (08-12-2022)
// hinhAnh: File
const AddMovie = () => {
    const {register, handleSubmit} = useForm({
        defaultValues:{
            tenPhim:"",
            biDanh:"",
            moTa:"",
            ngayKhoiChieu:"",
            trailer:"",
            hinhAnh:"",
            maNhomL:"",
        },
    })
    const onSubmit = async (values) =>{
        try {
            const payload = {...values, hinhAnh: values.hinhAnh[0], maNhom: "GP01"}
            // Khi dữ liệu có định dạng đặc biệt như File,...
            // Ta cần gửi lên server với định dạng multipart/form-data bằng cách tạo 1 instance từ class FormData
            const formData = new FormData();
      for (let key in payload) {
        formData.append(key, payload[key]);
      }

      await fetcher.post("QuanLyPhim/ThemPhimUploadHinh", formData);
    } catch (error) {
      console.log(error);
    }
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-center'>ADD MOVIE</h1>
        <div>
            <label>Tên Phim</label>
            <input {...register("tenPhim")}/>
        </div>
        <div>
            <label>Bí Danh</label>
            <input {...register("biDanh")}/>
        </div>
        <div>
            <label>Mô Tả</label>
            <input {...register("moTa")}/>
        </div>
        <div>
            <label>Ngày Khởi Chiếu</label>
            <input {...register("ngayKhoiChieu")}/>
        </div>
        <div>
            <label>Trailer</label>
            <input {...register("trailer")}/>
        </div>
        <div>
            <label>Hình Ảnh</label>
            <input type="file" {...register("hinhAnh")}/>
        </div>
        <button>Thêm Phim</button>
    </form>
  )
}

export default AddMovie