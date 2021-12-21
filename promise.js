//promise đc sinh ra để xử lý các nguyên tắc bất đồng bộ, trc khi sd promise ta sd callback => khi sd callback sẽ gặp vđ là callback hell, code sẽ bị lồng vào nhau, rối code khó nhìn
//Để tạo ra một promise object thì bạn dùng class Promise có sẵn sd vs từ khoá new
//constructor class sẽ truyền vào 1 excutor function gồm 2 tham số truyền vào đều là function là resolve và reject
const promise = new Promise(
  function (resolve, reject) {
    //xử lý logic
    //resolve đc gọi khi xử lý logic thành công
    //reject khi lỗi
  }
)

//khi gọi promise để truy cập thì sd .then và .catch
//.then và .catch đều nhận 1 callback function 
//thực thi vào then thi promise resolve, catch khi promise đc reject
// Promise có 3 trạng thái:
// + Penđing: Trạng thái chờ việc thành công hay thất bại - trạng thái rò rĩ bộ nhớ (Memory Leak) ( khi k gọi resolve hoặc reject)
// + Fulfilled: Trạng thái thành công -> Then (Resolve).
// + Rejected: Trạng thái thất bại -> Catch (Reject).
//Trong đó hai trạng thái Reject và Fulfilled ta gọi là Settled, tức là đã xử lý xong.

//đn promise
let highScore = false
let newGift = new Promise((resolve, reject) => {
  if (highScore) {
    resolve([{
      name: 'xe đạp',
      color: 'màu xanh',
    }])
  } else {
    reject('k đc mẹ tặng quà:((')
  }
})

// //sd Promise
newGift
  .then(gift => {
    console.log(gift)
  })
  .catch(error => {
    console.log(error)
  })

//nếu giá trị trả về của .then() là 1 promise => sd promise gọi liên tiếp nhiều hàm bất đông bộ

let highScore = true

let newGift = new Promise((resolve, reject) => {
  if (highScore) {
    resolve([{
      name: 'xe đạp',
      color: 'màu xanh'
    }])
  } else {
    console.log('k có quà:((')
  }

})

newGift
  .then(gift => {
    console.log(gift) //nhận resolve ở trên
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('đi chơi vs bạn')
      }, 2000)
    })
  })
  //   //chờ khi then 1 xong thì đến then 2
  //   //kết quả return của then thứ nhất sẽ là tham số đầu vào của then 2 ( nếu k return thì udefined)
  .then((data) => {
    console.log(data)
  })


//promise.resolve
var promise = Promise.resolve('success')
  .then(result => {
    console.log(result)
  })

// //promise.reject
var promise = Promise.reject('erro')
  .then(result => {
    console.log(result)
  })

//promise.all => gíup chạy song song cac promise k phụ thuộc nhau (lấy kq từng promise làm việc vs nhau)
//chạy song song tổng tg 4s
var promise1 = new Promise(resolve => {
  setTimeout(() => {
    resolve([1, 2])
  }, 2000)
})

var promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve([3])
  }, 4000)
})

Promise.all([promise1, promise2])
  .then(result => {
    const result1 = result[0];
    const result2 = result[1]
    console.log(result1.concat(result2))
  })