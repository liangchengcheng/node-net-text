var net =require('net');
//创建链接的对象
var client=net.connect(3000,'localhost');

/**
 * 监听链接事件
 */
client.on('connect',function(){

});