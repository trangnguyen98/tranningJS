// đn method or attribute trong class
// sd phương thức constructor
class Course {
  //hàm tạo constructor
  constructor(name, price) {
    this.name = name
    this.price = price
  }
  //method của class
  //bóc tác riêng biệt đỡ bị rối code
  getName() {
    return this.name
  }
}
//khởi tạo đói tượng khai báo dùng new
const phpCourse = new Course('PHP', 1000)
console.log(phpCourse)


//Class Inheritance
//sd từ khoá extends
// Tạo một class
class Rectangle {
  // Hàm tạo (constructor)
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  // Phương thức của class
  getArea() {
    return this.length * this.width;
  }
}
// Tạo class Square kế thừa class Rectangle
class Square extends Rectangle {
  // constructor của class con (Square)
  constructor(length) {
    // Gọi đến constructor của class cha (Rectangle)
    super(length, length);
  }
  // Phương thức của class con (Square)
  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}

//Khởi tạo đối tg của class Rectangle
let rectangle = new Rectangle(5, 10)
//tính diện tích hình chữ nhật
console.log(rectangle.getArea())

//Khởi tạo đối tg class Square
let square = new Square(6)
//tính chu vi
console.log(square.getPerimeter())