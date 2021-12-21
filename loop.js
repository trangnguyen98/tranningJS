//callback:  js là kiểu ngôn ngữ đơn luồng, kiểu chạy bất đồng bộ. Js sẽ thực thi tác vụ theo thứ tự và khi 1 hàm có setTimeout() thì nó sẽ đưa setTimeout vào hàm đợi và thực thi tiếp các tác vụ đằng sau => callback đc sinh ra để xử lý bất đồng bộ. function callback sẽ đc gọi khi thực thi tác vụ bất đồng bộ
//callback là 1 hàm đc truyền qua đối số của 1 function khác và đc gọi lại trong hàm nhận đối số
//=> nhược điểm: sinh ra callback hell
//promise: sinh ra để xử lý callback hell
//khi gọi promise để truy cập thì sd .then (khi resolve) và .catch (khi reject)
// async và await giúp Promise tránh được nhiều .then() (nếu giá trị trả về .then() là 1 promise => sd promise gọi liên tiếp nhiều hàm bất đông bộ)
//foreach() lặp qua từng phtu trong mảng nhưng k trả về (cố tính trả về thì undefined)
//map() lặp qua từng phtu trong mảng nhưng trả về mảng mới vs số lượng phtu bằng vs số lg phtu mảng cũ
//find() kiểm tra xem có phtu tmđk thì dừng luôn => trả về 1 đối tg
//filter() giống find nhưng trả về tất cả phtu tmdk => trả về tất cả đối tg
//reduce() thực thi 1 hàm lên các phtu trong mảng và trả về gtrị duy nhất => gtri trả về là gtri accumulator sau lần callback cuối cùng. gtrị khởi tạo initialvalue chính là gtri cho accumulator trong lần gọi đầu của callback và nếu k set gtri thì accumulator là phtu đầu tiên trong arr

//forEach
chars = ['Hello', 'world!!!'];

var retVal = chars.forEach(function (word) {
  console.log("Saving to db: " + word)
})

console.log(retVal) //undefined

//map()
chars = ['Hello', 'world!!!'];

var lengths = chars.map(function (word) {
  return word.length
})

console.log(lengths) //[5,8]