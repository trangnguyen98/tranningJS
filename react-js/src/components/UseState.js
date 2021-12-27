import React, { useState } from "react";
// function Component() {
//   const [state, setState] = useState(initState);
// }
//1. useState (trạng thái dl): quản lý state trong component
//useState sử dụng để đơn giản việc thể hiện trạng thái của dữ liệu ra giao diện người dùng (UI) (không cần phải thao tác DOM thủ công như khi code thuần với Javascript)
// Khi state thay đổi tự động React sẽ xử lý để UI được cập nhật lại => react xử lý tự động
//initState: gtri khởi tạo chỉ lần chạy đầu (tham số duy nhất đc truyền vào) (gtrị or function)
//trả về 1 mảng có 2 phần tử: state, setState
//state: lần đầu lấy gtri khởi tạo gán vào state (state là gtrị đầu tiên trả về bởi useState)
//setState: là 1 function set lại state (là gtrị thứ 2 đc trả về)
//component sẽ render lại sau khi gọi setState()
//gọi hàm setState sẽ cập nhật gtri state

//khi click vào button Increase, hàm handleIncrease đc gọi thì hàm setState đc thực thi và lấy gtrị hiện tại là 0 gán vào count setCount(0 + 1) = 1. Sau khi gọi hàm setState thì react sẽ gọi lại cả hàm component, count đc gán là 1, sau đó khai báo lại hàm handleIncrease => tham chiếu đến count = 1 => render ra gd
//lần 2 (state là gtrị của lần 1). khi click vào button Increase, hàm handleIncrease đc gọi thì hàm setCount đc thực thi và gán gtrị ở lần 1 vào count là 1 + 1. Sau khi gọi hàm setCount thì react sẽ gọi lại cả hàm component (đọc code từ trên xuống)=> count = 1 + 1 và render ra gd
// function Component() {
//   const [count, setCount] = useState(0);

//   const handleIncrease = () => {
//     //xử lý logic
//     setCount(count + 1);
//   };
//   return <button onClick={handleIncrease}> Increase </button>;
// }

//2. khi set lại gtrị cho state => gtrị của state sẽ là gtrị mới chứ k merge 2 gtrị vs nhau như class component
//lúc đầu gtrị của user là {"name":"Trang","age":18}, sau khi cick vào button thì gtrị user bị ghi đè thành {"name":"Huyền"}
function ExampleFunction() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Trang",
    age: 18,
  });

  const handleIncrease = () => {
    //xử lý logic
    setCount(count + 1);
    setUser({ name: "Huyền" });
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrease}> Increase </button>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

export default ExampleFunction;

//3. khi gtrị của initState là 1 function. thay vì viết useState(function()) => mỗi lần gọi lại nó sẽ phải thực thi lại funtion này => performent giảm
// có thể viết useState(() => {
//   return function(); // chỉ gọi lại 1 lần duy nhất
// })

//4
// useState() in functional component: REPLACING
// const [person, setPerson] = useState({ name: 'Hau', color: 'red' });
// setPerson({ ...person, color: 'green' });
// --> { name: 'Hau', color: 'green' }

//5.dùng useState khi:
//state là các kiểu dữ liệu cấu trúc sơ khai(undefined, boolean, number, string, bigInt, Symbol)
//các thay đổi state đơn giản: kiểu number, string, boolean or arr, obj 1 cấp
//code logic ở trong component luôn
//các state khác nhau không phụ thuộc lẫn nhau và có thể quản lí bằng nhiều useState riêng biệt
//các state dính kèm với component, vd: hàm onChange của Input
