// 对象的函数结构 json
let json = {
  a:'stipveim',
  b:'hh',
  c:'yy'
}

function fun({a,b,c}){
  console.log(a,b,c);
}

fun(json);

// 数组结构
let arr = ['stivpeim','裴明','前端开发'];
function fun1(a,b,c){
console.log(a,b,c);
}

fun1(...arr);

// in 用法 判断对象
let obj = {
  a:'stivpeim',
  b:'hh'
}
console.log('a' in obj);
console.log('c' in obj);
// in 判断数组方法
let arr1 =['stivpeim',,,];
console.log(0 in arr1);
console.log(1 in arr1);

//数组遍历
let arr2 = ['stivepeim','hh','yy'];
arr2.forEach((v,i)=> {
console.log(v,i);
});

arr2.filter(x=>{
  console.log(x);
});

arr2.some(s=>{
  console.log(s);
});

arr2.map(m=>{
  console.log(m);
});

console.log(arr2.toString());
console.log(arr2.join(' --- '));