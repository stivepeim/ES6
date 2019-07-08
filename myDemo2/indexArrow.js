function add(a,b){
  // if(a===0){ // 主动抛出异常
  //   throw new Error('a is Error');
  // }
return a+b;
}
function add1(a, b=1) { // 带有默认值的参数声明
  // 'use strict' 严谨模式可以在方法体中使用
  return a + b;
}
// console.log(add(0,2));
console.log(add(9,2));
console.log(add1(1));
console.log(add1.length);// 获取必须传递的参数数量（如果有默认值的不算必须输入参数）

// 箭头函数中不能有构造函数 也就是不能new
var add2=(a,b=1) => a+b;
var add3=(a,b=1) => {
 console.log('stivpeeim');
 return a + b;
};
console.log(add2(99));