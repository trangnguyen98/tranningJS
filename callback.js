let a = 10;

function test() {
  setTimeout(function () {
    console.log('running in setTimeout')
  })
}

function test2() {
  console.log('function 2');
}

console.log(a);
test();
test2();