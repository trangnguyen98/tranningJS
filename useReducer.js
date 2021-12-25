//báo cáo tiến độ
//1. useReducer là 1 hooks quản lý state thay thế cho useState, mọi thứ useState làm đc thì useReducer cũng làm đc
//2. dùng khi:
//useReducer phù hợp dùng trong component có state phức tạp: arr, obj nhiều cấp
//các thay đổi state phức tạp hơn
// có business logic phức tạp thì để logic vào reducer để tập trung lại một chỗ
//các state liên quan/ phụ thuộc lẫn nhau thì quản lí bằng một state object

//3.
//input: state hiện tại và actions
//ouput: state mới (mỗi khi reducer đc gọi, phải dựa vào state giện tại và actions để trả ra state mới)

//4. useReducer() nhận vào 1 function reducer và gtrị khởi tạo initialState(chỉ chạy lần đầu), trả về state hiện tại và dispatch function để kích hoạt 1 action => state thay đổi
//khi cập nhật trị state => gọi dispatch

import { useReducer } from "react";

//useReducer
//input: state hiện tại và actions
//ouput: state mới
//init state
const initState = 0;

//actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//reducer
//mỗi khi reducer đc gọi, phải dựa vào state giện tại và actions để trả ra state mới
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

//useReducer() nhận vào 1 function reducer và gtrị khởi tạo initialState(chỉ chạy lần đầu), trả về state hiện tại và dispatch function để kích hoạt 1 action => state thay đổi
//khi cập nhật trị state => gọi dispatch
// const [state, dispatch] = useReducer(reducer, initState);

//lần đầu component chạy sẽ chạy useReducer nhận gtrị khởi tạo và return về arr, chưa gọi hàm reducer. Gtrị đầu của arr là grtị khởi tạo (tức count = initState), gtri 2 là dispatch để kích hoạt action xem làm gì trong 2 nhiệm vụ trên
//khi ấn button down tức gọi hàm dispatch sẽ cần truyền vào 1 action, thì useReducer sẽ xử lý để lấy action này sau đó gọi hàm reducer gán gtrị initState cho state (tức state = 0) và nó lấy luôn action là DOWN_ACTION truyển vào tham số thức 2 của reducer là action => matching vs case DOWN_ACTION ở trên => return state -1 (0-1=-1) => render lại function app => count là state mới(tức = 0)

function App() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}
