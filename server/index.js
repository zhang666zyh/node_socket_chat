const express = require('express')
const app = express()
const port = 3000

// 实例化socket.io并监听8082端口
var server = app.listen(8082)
var io = require('socket.io')(server)
io.on('connection', (socket) => {
	console.log('socket 连接成功!!!')
	
	// 接收消息
	socket.on('message', data => {
		console.log(data)
		
		// 广播信息
		socket.broadcast.emit('gbmsg', data)
	})
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})