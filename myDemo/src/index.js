// let a="Stivepeim";
// console.log(a);
// window.onload = function(){ // 证明是全局的变量更改了
//   console.log(a);
// }
// { // 区块作用域a
//  let a ="裴明"
// }
// console.log(a);

// // for(var i=0;i<10;i++){
//   for (let i = 0; i < 10; i++) {
// console.log('循环体中:i'+i);
// }
// console.log('循环体外'+i);
// const a = 'stivepeim';// 转换的时候都会出错
// var a='裴明';
// console.log(a);


// let a=0;
// let b=1;
// let c=2;
// let [a, b, c] = [0, 1, 2]; // 左边的结构和右边的结构一致
// console.log(a);
// console.log(b);
// console.log(c);

//数组解构 解构根据次序来解构
// 有默认值的声明方式
// undfiend null undfiend是没有值,null 有值不过是null而已
// let [a,b='菜鸟模式'] = ['stivpeim',undefined];
// console.log('数组解构:'+a+b);

// 坑
//对象解构 根据对象名解构,次序不一定需要对应
// let {foo,bar} = {foo:"stivepim",bar:"菜鸟模式"};
// console.log('对象解构:'+bar+foo);
// let pm;
// ({pm} = {pm:'Stivpeim'}); // 如果解构的是前面声明的变量那么解构的时候需要用小括号
// console.log('pm:'+pm);

// 字符串解构
// const [a,b,c,d,e,f,g,h]='stipveim';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);

// 运算符
// 对象扩展运算符 如果参数不存在顶多 undefined
// function stivpeim(...args){
//   console.log(args[0]);
//   console.log(args[2]);
//   console.log(args[3]);
//   console.log(args[4]);
//   console.log(args[5]);
//   console.log(args[6]);
// }

// stivpeim(1,2,3,4);

// let arr1=['qqq','2222','6666'];
// // let arr2=arr1;
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('fuck');
// console.log(arr2);
// console.log(arr1);

// rest运算符
// arg.length 的长度是剩余参数的长度
// function stivepeim(first,secend,...arg){
// // console.log(arg.length);
//   // for(let i=0;i<arg.length;i++){
//   //   console.log(arg[i]);
//   // }
//   for(let val of arg){
//     console.log(val);
//   }
// }
// stivepeim(0,1,2,3,4,5,6,7);

import { name, cname, skill } from './temp';
console.log(name);
console.log(cname);
console.log(skill);

// export default只能有一个 但是export 可以有多个