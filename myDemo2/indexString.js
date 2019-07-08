
// 字符串拼接
let stivepim = "裴明明";
// let bolg = '很帅很帅很帅很帅很帅很帅很帅很帅很帅很帅很帅很帅' + stivepim + '很仰慕';
let bolg = `很帅很帅很帅很帅很帅很帅很帅很帅很帅很帅很帅很帅${stivepim}很仰慕<br/>`;
document.writeln(bolg);
// 按波浪键 打出来的叫连接符

// 进行运算
let a=1;
let b=2;
let result = `${a+b}`; 
document.writeln(result);

// 字符串查找
let hh = '行行';
let hhText = "vfrthynhgnbgfnhgnhgngcbgtf裴行行";
document.writeln(hhText.indexOf(hh) > 0); // es5的做法
document.writeln(hhText.includes(hh)); // es6的写法
document.writeln(hhText.startsWith(hh));
document.writeln(hhText.endsWith(hh));
// 复制字符串
document.writeln(`化思念为动力`.repeat(900));



// js split 操作
let str1 = '01;02;03;04';
let str2 = '01;02;03;04;';

let arr1 = str1.split(';');
let arr2 = str2.split(';');
console.log('arr1:' + arr1 + '|arr1.length:' + arr1.length);
console.log('arr2:' + arr2 + '|arr2.length:' + arr2.length);

// for(let v of str1){
//   console.log('str1:v:'+v);
// }

// for (let v of str2) {
//   console.log('str2:v:' +v);
// }

for (let v in str2) {
  console.log('str2:v:' + v);
}


// lastIndexOf 和 endsWith 的区别
let strindex = 'stivepeim';
console.log(strindex.lastIndexOf('m'));
console.log(strindex.endsWith('m'));
