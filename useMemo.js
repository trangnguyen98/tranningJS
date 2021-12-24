//React.memo(): higher order component (HOC) k phải là hooks => giúp component tránh re-render trong nhiều trg hợp k cần thiết => Chỉ renderlại component nếu props thay đổi.

//Memoization tính toán và lưu kết quả cho từng bộ input.
// Khi gặp lại bộ input đã từng làm thì không tính toán lại, mà trả về kết quả sẵn có.
// Dùng cho các xử lý, tính toán nặng, tốn thời gian, tài nguyên.

//props: truyền dl từ component cha xuống component con

//useMemo giữ cho một hàm không được thực thi lại nếu nó không nhận được một tập hợp các tham số đã được sử dụng trước
//Nhận vào 2 tham số: 1 là function, 2 là dependencies.
// Return memoized value
// Chỉ tính toán value mới khi dependencies thay đổi.
// Nếu dùng empty dependencies thì không bao giờ tính toán lại value mới
//trả về kết quả của một function