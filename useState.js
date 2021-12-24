import { useState } from "react";
//khi click vào button Increase, hàm handleIncrease đc gọi thì hàm setState đc thực thi và lấy gtrị hiện tại là initState gán vào state setState(state + 1) = initState + 1. Sau khi gọi hàm setState thì react sẽ gọi lại cả hàm component, state đc gán là initState + 1, sau đó khai báo lại hàm handleIncrease => tham chiếu đến state = initState + 1 => render ra gd
//lần 2 (state là gtrị của lần 1). khi click vào button Increase, hàm handleIncrease đc gọi thì hàm setState đc thực thi và gán gtrị ở lần 1 vào state là (initState + 1) + 1. Sau khi gọi hàm setState thì react sẽ gọi lại cả hàm component (đọc code từ trên xuống)=> state = (initState + 1) + 1 và render ra gd
function Component() {
  const [state, setState] = useState(initState);

  const handleIncrease = () => {
    //xử lý logic
    setSate(state + 1);
  };
  return <button onClick={handleIncrease}> Increase </button>;
}

//1. useState (trạng thái dl)
//useState sử dụng để đơn giản việc thể hiện trạng thái của dữ liệu ra giao diện người dùng (UI) (không cần phải thao tác DOM thủ công như khi code thuần với Javascript)
// Khi state thay đổi tự động React sẽ xử lý để UI được cập nhật lại => react xử lý tự động
//initState: gtri khởi tạo chỉ lần chạy đầu (tham số duy nhất đc truyền vào)
//trả về 1 mảng có 2 phần tử: state, setState
//state: lần đầu lấy gtri khởi tạo gán vào state (state là gtrị đầu tiên trả về bởi useState)
//setState: là 1 function set lại state (là gtrị thứ 2 đc trả về)
//component sẽ render lại sau khi gọi setState()
//gọi hàm setState sẽ cập nhật gtri state

//2. useEffect để xử lý các side effect
// side effect: khi có tác động xảy ra dl phần mềm thay đổi
//side effect sẽ gọi API lấy dữ liệu, tương tác với DOM, remove listener, setTimeout, setInterval
// useEffect nhận 2 tham số truyền vào là callback(bắt buộc) và 1 mảng chứ những cái phụ thuộc vào dl [deps] (k bắt buộc)
//các code logic viết trong callback để thực hiện các side effect.
//callback luôn dc gọi sau khi component mounted
