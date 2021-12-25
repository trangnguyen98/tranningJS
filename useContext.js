//useContext
//giúp truyền dl từ component ô đến component con (nếu bỏ đi component cha thì k ảnh hưởng gì đến ứng dụng)
//sử dụng useContext sẽ truyền vào một tham số duy nhất là Context Object => tạo bởi React.createContext
//bọc các component cần chia sẻ state bằng Provider, và truyền gtrị vào props value giá trị của context.

import React from "react";

import Content from "./Content";
