// class
// 每一个函数必须retuen数据
class Coder{
  name(val){
    // console.log(val);
    return val;
  }
  skill(val){
    return this.name('stivepeim')+':'+'skill'+val;
  }
  constructor(a,b){
    this.a=a;
    this.b=b;
  }

  add(){
    return this.a+this.b;
  }
}


class htmler extends Coder{
  
}

// let stivepeim = new Coder();
// console.log(stivepeim.name('STIVPEIM'));
// console.log(stivepeim.skill('web Devaloper'));

let c = new Coder(100,200);
console.log(c.add());


let stivepeim = new htmler;
stivepeim.name('PM');
