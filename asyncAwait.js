// async và await, nó giúp Promise trông đơn giản hơn, tránh được nhiều .then() (nếu giá trị trả về của .then() là 1 promise => sd promise gọi liên tiếp nhiều hàm bất đông bộ)
// Async - khai báo một hàm bất đồng bộ 
// Khi khai báo một hàm với từ khoá là async thì mặc định hàm đó sẽ luôn trả về một Promise. Nếu return thì những gì được return sẽ được đưa vào Promise.resolve. Còn khi bạn throw exception thì nó sẽ được đưa vào Promise.reject
//=> có thể sd .then và .catch như với promise (async hđ dựa trên cơ chế promise)
// Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
// Async cho phép sử dụng Await.
// Await - tạm dừng việc thực hiện các hàm async. 
//await đợi 1 hàm trả về promise (thành công hay thất bại) và sau đó mới thực thi tiếp các câu lệnh dưới nó, và nó sẽ trả giá trị trực tiếp của hàm đó luôn mà không cần phải .then()
// Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
// Await chỉ có thể được sử dụng bên trong các function async.
//Chú ý: await không dừng để đợi bên trong forEach, map

// async function getSomeAsyncData(value){
//   const result = await fetchTheData(someUrl, value);
//   return result;
// }

function fetchData(someValue) {
  return new Promise((resolve, reject) => {
    getData(someValue, (error, result) => {
      if (error) {
        resolve(error)
      } else {
        reject(result)
      }
    })
  })
}
async function getAsyncData(value) {
  const result = await fetchTheData(value)
  // return result
  console.log(result)
}