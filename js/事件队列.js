// new Promise((resolve) => {
//     console.log(1);
//
//     process.nextTick(() => {
//     	console.log(2);
//     });
//
//     resolve();
//
//     process.nextTick(() => {
//     	console.log(3);
//     });
//
//     console.log(4);
// }).then(() => {
//     console.log(5);
// });
//
// setTimeout(() => {
//     console.log(6);
// }, 0);
//
// console.log(7);


//1 4 7 2 3 5 6


console.log(1);
new Promise(function (resolve, reject){
    reject(true);
    window.setTimeout(function (){
        resolve(false);
    }, 0);
}).then(function(){
    console.log(2);
}, function(){
    console.log(3);
});
console.log(4);

//1 4 3
