var dgram =require('dgram');

var socket = dgram.createSocket('udp4');

/**
 * 绑定 并且 设置回调的接口
 */
socket.bind(function(){
    socket.setBroadcast(true);
});

/**
 * 发送的信息
 */
var message=new Buffer("HelloWorld");

/**
 *  消息  0-长度 端口 ip 回调（错误，）
 */
socket.send(message,0,message.length,1234,'192.168.0.1',function(error,bytes){
   socket.close();
});