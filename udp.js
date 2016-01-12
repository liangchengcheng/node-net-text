var dgram =require('dgram');

var serverSocket = dgram.createSocket('udp4');


/**
 * 监听错误事件
 */
serverSocket.on('error',function(err){
    console.log('server error '+ err.stack);
});

/**
 * 监听客户发来的信息
 */
serverSocket.on('message',function(msg,info){
    console.log('server get' +msg + 'from ' +info.address+':'+info.port);
});

/**
 * 监听监听信息
 */
serverSocket.on('listening',function(){
    var maddress=serverSocket.address;
    console.log('server is listening' + maddress + 'and port :' +serverSocket.port)
});

serverSocket.bind(41234);