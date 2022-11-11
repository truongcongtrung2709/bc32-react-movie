import fetcher from "./fetcher"

const authAPI = {
    singin: (values) => {
        return fetcher.post("QuanLyNguoiDung/DangNhap",values);
    },

    singup: (values) => {
        return fetcher.post("QuanLyNguoiDung/DangKy",{
            ...values,
            maNhom: "GP01"
        });
    }   
}
export default authAPI