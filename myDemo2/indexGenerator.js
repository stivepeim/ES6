// 异步变成解决方案
function* helloWorldGenerator(){
    yield 'stivepeim';
    yield 'js大牛';
    return 'ending'
}

var st = helloWorldGenerator();

console.log('st', st.next())
console.log('st', st.next())
console.log('st', st.next())
console.log('st', st.next())