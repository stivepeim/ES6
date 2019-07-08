// json 数组格式
let _json = {
  '0':'stivpeim',
  '1':'shuiyuanyuan',
  '2':'peijinghang',
  length:3
}
let arr = Array.from(_json);
console.log(arr);


// Array.of 方法
// '3,4,5,6,7'
let arrOf = Array.of(3,4,5,6);
console.log(arrOf);

let arrOf1 = Array.of('S','T');
console.log(arrOf1);

// Array find 实例方法
let arr2 = [1,2,3,4,5,6,7,8,9];
console.log(arr2.find(function(value,index,arr){
return value>5;
}));

// fill 填充替换
let arr3 = ['stivpeim','peiming','hanghang','xxx'];
// 参数说明：1替换的参数变量，2开始填充的位置，3填充到的位置
arr3.fill('web',1,2);
console.log(arr3);

// 数组循环
for(let a of arr3){ //输出数据
console.log(a);
}

for (let a of arr3.keys()) { // 输出下标
  console.log(a);
}

for (let [i,v] of arr3.entries()) { // 输出下标和数据
  console.log(i+':'+v);
}
// entries iterator形式
let list = arr3.entries();
console.log(list);
console.log(list.next().value);
console.log('------------------');
console.log(list.next().value);
console.log('******************');
console.log(list.next().value);
console.log('==================');