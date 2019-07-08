// Set 数据结构 只能存放数组
// 数组形式的集合 不能重复
let setArr = new Set(['stivepeim', 'hh', 'yy', 'yy']); // 重复声明也无效
setArr.add('外婆');
setArr.add('stivepeim'); // 追加重复无效

console.log(setArr);
// has 查找
console.log(setArr.has('stivepeim'));
console.log(setArr.has('小三'));

// 删除 清空
setArr.delete('stivpeim');
// setArr.clear();
console.log(setArr);

// for...of
for(let item of setArr) {
console.log(item);
}

// forEach
setArr.forEach((item)=> {
  console.log(item);
});

// size
console.log(setArr.size);


// WeakSet 数据结构 可以存放对象
// let weakObj = new WeakSet({a:'1'}); // 不能这样直接赋值 需要new一下
// 坑 这里如果声明两个相同的对象同时add到WeakSet 那么他还是会将两个同时保存
// 只有 obj2=obj1 这样才可以避免相同的数据存在,类似引用值栈占用
let weakObj = new WeakSet();
let obj1 = {a:'stivepeim',b:'hh'};
let obj2 = {a:'stivepeim',b:'hh'};
weakObj.add(obj1);
weakObj.add(obj2);
console.log(weakObj);