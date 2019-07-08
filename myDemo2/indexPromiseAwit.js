/**
 * 测试psm同步执行
 */
function http1 () {
  var promise = new Promise((resolve,reject) => {
    $.ajax({
      url: 'http://192.168.2.102:8080/mpwms/user/userLogin',
      type:'POST',
      data: {
        userno: 'MP00000',
        password: 'esp,1234'
      },
      success:function(msg){
        console.log('msg1:',msg);
        resolve(msg);
      }
    });
  });
  return promise;
}

function http2() {
  var promise = new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://192.168.2.102:8080/mpwms/user/userLogin',
      type: 'POST',
      data: {
        userno: 'MP00000',
        password: 'esp,1234'
      },
      success: function (msg) {
        console.log('msg2:', msg);
        resolve(msg);
      }
    });
  });
  return promise;
}

Promise.all([http1(),http2()]).then(res => {
  console.log('res-all:',res);
});