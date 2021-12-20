//Enhanced object literals
//đn key value cho object
// var name = 'Javascript';
// var price = 1000;

// var course = {
//   // name: name,
//   // price: price 
//   //viết ngắn gọn hơn nếu tên key và tên value giống nhau 
//   name,
//   price
// };
// console.log(course); //{name: "Javascript", price: 1000}

//đn method cho Object
// var name = 'Javascript';
// var price = 1000;

// var course = {
//   // name: name,
//   // price: price
//   name,
//   price,
//   // getName: function() {
//   //     return name;
//   // }
//   //viết ngắn gọn hơn
//   getName() {
//     return name;
//   }
// };
// console.log(course.getName()); //Javascript

// //đn key cho object dưới dạng biến
var fieldName = 'name';
var fieldPrice = 'price';

const course = {
  [fieldName]: 'Javascript',
  [fieldPrice]: 1000
};
console.log(course); //{name: "Javascript", price: 1000}