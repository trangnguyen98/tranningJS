//let, var, const
//1.Assignment
//var khai báo và gán lại đc
//const k khai báo và gán lại đc
//let gán lại n k khai báo lại đc
var Pi = 3.14;
Pi = 3;
console.log(Pi); //3. Nếu gán giá trị nguyên thuỷ cho 1 biến var thì ta vẫn có thể thay đổi đc
var name = 'Trang'
var name = 'Hoa'
console.log(name) // Hoa

const Pi = 3.14;
Pi = 3;
console.log(Pi); // lỗi. Nếu gán giá trị nguyên thuỷ cho 1 biến const thì ta k thể thay đổi đc

let Pi = 3.14;
// Pi = 3;
// console.log(Pi) // 3 => giống var
let Pi = 10;
console.log(Pi) //lỗi

//2. Scope (phạm vi truy cập)
//var truy cập trong và ngoài block scope, trong function scope
var times = 4;
if (times > 3) {
  var greeting = "say Hello instead";
  console.log(greeting) //say Hello instead
}
console.log(greeting); //say Hello instead

var tester = 'hey hi';

function newFunction() {
  var hello = 'hello';
  console.log(hello) //hello
}
// console.log(hello); // error: hello is not defined
newFunction()

//let, const truy cập trong code block và function scope
let times = 4;
if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}
console.log(hello); // hello is not defined

const times = 4;
if (times > 3) {
  const hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}
console.log(hello); // hello is not defined

//3. Hoisting: Khai báo đc đưa lên đầu phạm vi
//var đc hoisting
console.log(greeting);
var greeting = "say hello"; //undefined

// đc biên dịch
//ngầm khai báo biến greeting với gtr mặc định là undefined và đưa lên đầu phạm vi 
// var greeting;
// console.log(greeting); // greeting is undefined
// greeting = "say hello";

console.log(sum(6, 9)) //15
//cả cụm hàm này chính là phần khai báo hàm nên khi biên dịch nó sẽ đưa lên đầu phạm vi trc khi chạy
function sum(a, b) {
  return a + b
}
//let, const đc hoisting nhưng k sd đc
//ngầm khai báo biến bằng let và const đc đưa lên đầu phạm vi nhưng k đc khởi tạo gtr mặc định nên đc đưa vào vùng chết tạm thời => nên k sd đc trc khi khai báo
{
  console.log(fullName) //Cannot access 'fullName' before initialization
  let fullName = 'Nguyen Van A'
}

{
  console.log(fullName) //Cannot access 'fullName' before initialization
  const fullName = 'Nguyen Van A'
}


const couter1 = makeCouter();
console.log(couter1()) // 1

function makeCouter() {
  let couter = 0
  return increase

  function increase() {
    return ++couter
  }
}

//khi biên dịch
// const couter1 = makeCouter();
// console.log(couter1()) // 1

// function makeCouter() {
//   function increase() { //decration function đc đưa lên đầu phạm vi khai báo trong hàm
//     return ++couter
//   }
//   let couter = 0
//   return increase

// }