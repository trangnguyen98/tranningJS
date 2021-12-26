//useCallback sử dụng để tối ưu quá trình render của React functional components => giúp component tránh re-render trong nhiều trg hợp k cần thiết => tránh hàm không được tạo lại lần nữa, dựa trên mảng các phần phụ thuộc. Trả về chính function đó.
// usecallback nhận vào 2 tham số: 1 là function, 2 là dependencies(mảng phụ thuộc)
// Return memoized callback
// chỉ tạo ra function mới khi dependencies thay đổi.
// nếu dùng empty dependencies thì không bao giờ tạo ra function mới.
