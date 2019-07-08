// proxy 代理 ES6 增强 对象和函数(function) 生命周期 钩子函数
// 预处理
let obj={
  add:function(val){
    return val;
  },
  name:'I am stivepeim'
}
console.log(obj.add(100));

let pro = new Proxy({
  add: function (val) {
      return val;
    },
    name: 'I am stivepeim'
},{
  // get set apply
  get:function(target,key,property){
    console.log('come in get');
    console.log('target:'+target);
    console.log('key:' + key);
    return target[key];
  },
  set:function(target,key,value,receiver){
    console.log(`setting:${key}=${value}`);
    return target[key]=value;
  }
});
console.log(pro.name);
pro.name = 'yy';
console.log(pro.name);

// proxy TODO 后面需要研究研究
let target = function(){
  return '我是 stivpeim';
}
let handler = {
  apply(target,ctx,args){
    console.log('do apply');
    return Reflect.apply(...arguments);
  }
}
let pro1 = new Proxy(target,handler);

console.log(pro1());