// promise
/*
ES6中的promise的出现给我们很好的解决了回调地狱的问题，
 在使用ES5的时候， 在多层嵌套回调时， 写完的代码层次过多，
  很难进行维护和二次开发， ES6认识到了这点问题， 
  现在promise的使用， 完美解决了这个问题。 
  那我们如何理解promise这个单词在ES5中的作用那，
   你可以想象他是一种承诺， 当它成功时执行一些代码， 
   当它失败时执行一些代码。 它更符合人类的行为思考习惯，
    而不在是晦涩难懂的冰冷语言。
*/
// 躲避了回调地狱
// 1洗菜做饭,2吃饭,3收拾桌子
let state = 1;
function step1(resolve,reject){
  console.log('1:开始洗菜做饭');
  if(state === 1){
    resolve('1:洗菜做饭完成');
  }else{
    reject('1:洗菜做饭出错');
  }
}
function step2(resolve, reject) {
  console.log('2吃饭');
  // state=0; 吃饭出错 哈哈
  if (state === 1) {
    resolve('2吃饭完成');
  } else {
    reject('2吃饭出错');
  }
}
function step3(resolve, reject) {
  console.log('3收拾桌子');
  if (state === 1) {
    resolve('3收拾桌子完成');
  } else {
    reject('3收拾桌子出错');
  }
}

new Promise(step1).then((val)=>{
console.log(val);
return new Promise(step2);
}).then((val)=>{
  console.log(val);
  return new Promise(step3);
}).then((val) => {
  console.log(val);
  
});