import axios from "axios";

const fetcher = axios.create({
    baseURL:"https://movienew.cybersoft.edu.vn/api",
    headers:{
        TokenCybersoft:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMiIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTUxNjgwMDAwMCIsIm5iZiI6MTY1MzkzMDAwMCwiZXhwIjoxNjgxNjY0NDAwfQ.oR9K8iSTqbo-t0Q_a-WFnKePPaMAr7sdlgR5xKAtQWA"
    },
});
// interceptors
fetcher.interceptors.response.use(
    // Thành Công
    (response) =>{
        //Transform  kết quả response trước khi trả ra cho nơi gọi request
        // response.data: format của axios
        //.content: format của cybersoft
        return response.data.content;
    },
    //Thất Bại
    (error) =>{
        // transform error trước khi trả ra cho nơi gọi request
        // error.response.data: format axios
        // .content: format của cybersoft
        return Promise.reject(error.response.data.content);
    }
);

fetcher.interceptors.request.use(
    (config) =>{
        // Thêm Key Authorization vào header config (nếu có)
        const {accessToken} = JSON.parse(localStorage.getItem("user")) || {};
        if(accessToken){

           
           config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
)
export default fetcher;
   