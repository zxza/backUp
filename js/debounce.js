var count = 1;
var container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
}

container.onmousemove = debounce(getUserAction, 1000);

//第一版
// function debounce(fun, wait) {
//   var timeout;
//   return function() {
//     clearTimeout(timeout);
//     timeout = setTimeout(fun, wait);
//   };
// }

function debounce(func, wait){
  var timeout;
  return function(){
    var context = this;   //保存getUserAction里面的指向
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        func.apply(context, args);
    },1000)
  }
}
