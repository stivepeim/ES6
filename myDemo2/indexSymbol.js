// Symbol
// 原有的数据类型
let a = new String;
let b = new Number;
let c = new Boolean;
let d = new Array;
let e = new Object;

let f = Symbol();
console.log(typeof(a));
console.log(typeof(f));

let stivepim = Symbol('stivepeim');
console.log(stivepim);
console.log(stivepim.toString());

let stivepeim1 = Symbol();
let obj={
  [stivepeim1]:'裴明'
}
console.log(obj[stivepeim1]);
obj[stivepeim1] = 'web';
console.log(obj[stivepeim1]);

// 循环输出Symbol在循环中保护
let obj1 = {name:'stivepeim',skill:'web'}
let age = Symbol();
obj[age]=18;
// console.log(obj);
for(let item in obj1){
console.log(obj1[item]);
}