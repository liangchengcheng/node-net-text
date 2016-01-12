var net =require('net');
var server=net.createServer(function(conn){
  console.log('一个新的连接');
  conn.write('hello bundy');
});

server.listen(3000,function(){
  //成功监听就回调
  console.log('成功链接');
});