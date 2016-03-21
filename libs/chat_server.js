var socketIo = require('socket.io');
var io;
var guestNumber = 1 ;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};


//启动Socket.IO服务器

exports.listen = function(server){
	io = socketIo.listen(server);  //启动SocketIO服务器，允许它搭载在已有的HTTP服务器上
	io.set('log level', 1);
	io.sockets.on('connection' , function( socket ){    //定义每个用户连接的处理逻辑
		guestNumber = assignGuestName( socket , guestNumber , nickNames , namesUsed); //在用户连接上来时赋予其一个访客名

		joinRoom(socket ,'Lobby'); //在用户连接上来时把他放入聊天室Lobby

		handleMessageBroadcasting(socket , nickNames);

		handleNameChangeAttempts(socket , nickNames , namesUsed);

		handleRoomJoining(socket);   //处理用户的消息，改名字，聊天室的创建和更换

		socket.on('rooms',function(){
			socket.emit('romms' , io.sockets.manager.rooms);
		}) //用户发出请求时，向其提供已经被占用的聊天室列表

		handleCloentDisconnection(socket , nickNames , namesUsed);//用户断开连接后清除逻辑
	});
}


//处理新用户的昵称
function assignGuestName(socket , guestNumber , nickNames ,nameUsed ){

	var name = 'Guest' + guestNumber ; //生成新的昵称

	nickNames[socket.id] = name ; //把用户昵称跟客户端连接ID关联上

	socket.emit('nameResult' , { //让用户知道他们的昵称
		success :true,
		name:name
	});

	nameUsed.push(name);

	return guestNumber + 1;  //生成昵称计数
}


//进入聊天室相关
function joinRoom( socket , room ){

	socket.join(room); //让用户进入房间

	currentRoom[socket.id] = room;  //记录用户当前的房间

	socket.emit('joinResult',{room:room}); //让用户知道他们进入了房间

	socket.broadcast.to(room).emit('message',{  //让房间里其他用户知道有新用户进入了房间

		text:nickNames[socket.id] + 'has joined' + room + '.'

	});
	var userInRoom = io.sockets.clients(room); //确定有哪些用户在这个房间里

	if(userInRoom.length > 1){ //如果不知一个用户在这个房间里，汇总下都是谁

		var userInRoomSummary = 'Users Currently in' + room + ':';

		for(var index in userInRoom){
			var userSocketId = userInRoom[index].id;
			if(userSocketId != socket.id){
				if(index > 0){
					userInRoomSummary += ', ';
				}
				userInRoomSummary += nickNames[userSocketId];
			}
		}
	}
	userInRoomSummary += '.';
	socket.emit('message',{text:userInRoomSummary}); //将房间里其他用户的汇总发送给这个用户
}





































































