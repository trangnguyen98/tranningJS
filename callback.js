// function callback sẽ đc gọi khi thực thi tác vụ bất đồng bộ trong js (js ngôn ngữ đơn luồng)

//callback là 1 hàm 
//đc truyền qua đối số của 1 function khác
//và đc gọi lại trong hàm nhận đối số

//ở đây test2 là callback, nó đc truyền qua đối số của function test đc khai báo đầu tiên
//test2 đc truyền làm đối số khi gọi function test thì callback chính là test2 và để chạy function test2 thì gọi nó test2() cũng chính là gọi callback()
function test(callback) {
  setTimeout(function () {
    console.log('running in setTimeout');
    callback()
  })
}

function test2() {
  console.log('function 2');
}
test(test2);
//running in setTimeout
//function 2