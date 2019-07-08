//map
let json = {
  name:'stivpeim',
  skill:'web'
}

console.log(json.name);
// json.name 需要遍历整个对象来查找

//=> set
var map = new Map();
map.set(json,'im');
console.log(map);
map.set('stivpeim',json);
console.log(map);

// add get delete
console.log(map.get('stivpeim'));
map.delete(json);// 删除特定的数据
console.log(map);
// map.clear(); // 删除全部
console.log(map.size);

// has 
console.log(map.has('stivpeim'));
console.log(map.has('hh'));