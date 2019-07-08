// 二进制声明 Binary
let binary = 0B010101;
console.log(binary);

// 八进制声明
let octal = 0o666;
console.log(octal);

// 判断是否为数字
let a=11;
console.log(Number.isFinite(a));
console.log(Number.isFinite('stivepim'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));

// 判断是否NaN
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(3));

// 判断是否整数
console.log(Number.isInteger(98));
console.log(Number.isInteger(98.00));
console.log(Number.isInteger(98.01));

// 取整
let b = 980.05;
console.log(Number.parseInt(b));
console.log(Number.parseFloat(b));

// 取值 2 的 53次方
let c = Math.pow(2,53)-1;
console.log(c);

// 常量
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// 判断是否安全整数
let d = Math.pow(2, 53) + 1;
console.log(Number.isSafeInteger(d));