// 对象赋值
let name = 'stivpeim';
let skill = 'web';
// let obj = {name:name,skill:skill};
let obj = {name,skill};
console.log(obj);

//key值的构建
let key = 'skill';
var obj1 = {
  [key]:'web',
}
console.log(obj1);

// 自定义对象的方法
let obj2 ={
  add:function(a,b){
return a+b;
  }
}

console.log(obj2.add(1,2));

// is() 严格相等
// === 同值相等
let obj3 = {
  name:'stivpeim',
  skill:'web'
}
let obj4 = {
  name:'stivpeim',
  skill:'web'
}
console.log(obj3.name === obj4.name);
console.log(Object.is(obj3.name,obj4.name));
// 分析
console.log(+0===-0);
console.log(NaN === NaN);
console.log(Object.is(+0,-0));
console.log(Object.is(NaN,NaN));

// assign 合并对象
let a = {a:'stivpeimA'};
let b = {b:'stivpeimB'};
let c = {c:'stivpeimC'};
let d = Object.assign(a,b,c);
console.log(d);
