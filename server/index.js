const express = require('express')
const app = express()
const port = 3000

var server = app.listen(8082)
var io = require('socket.io')(server)
io.on('connection', (socket) => {
	console.log('socket 连接成功!!!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})