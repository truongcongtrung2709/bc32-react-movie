### libraries
- API: axios
- Router: react-router-dom
- State Management: @reduxjs/toolkit, react-redux
- UI component : react-bootstrap / material-UI / mantine


### Folder structure
- src
    - component/: 
        + Dùng để tạo các common component, VD: Button, Header, Sidebar, ...
        + Thường là tạo các component thiên về UI, không chứa các logic của ứng dụng như cal API,... 
        
    - module/:`module-name`/
        + Dùng để gom nhóm các component theo một chức năng hoặc một page.
        + Các component này thường sẽ chứa logic của ứng dụng như là call API, redux, ...

    - routers/
        - Dùng để định nghĩa các tác vụ liên quan tới router.

    - services/
        - Dùng để chứa setup phương thức gọi API (axios) và các hàm xử lý với API

    - hooks/ 
        - Dùng để viết các custom Hooks


    - utils/
        - Dùng để viết các hàm tái sử dụng

    - store.js: setup redux store
        