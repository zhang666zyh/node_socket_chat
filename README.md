# Introduction

....



# directory structure

```shell
node_socket_chat\
	pages\
	server\  # server
	# ......
```

# online chat 

## initialize app ages

+ create a uniapp project

`/pages/index/index.vue`

```vue
<template>
	<view class="content">
		<!-- 消息展示区 -->
		<view class="main">
			<view v-for="e in arr">
				{{e}}
			</view>
		</view>
		
		<!-- 底部输入框 -->
		<view class="foot">
			<input type="text" class="cont" v-model="cont">
			<button @tap="send">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				arr: ['asdfasdf'],
				cont: ''
			}
		},
		onLoad() {

		},
		methods: {
			send:function(){
				this.arr.push(this.cont);
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.foot{
		position: fixed;
		width: 100%;
		bottom: 0;
		
		.cont{
			width: 100%;
			height: 80rpx;
			background-color: #eee;
		}
	}
</style>
```

## initialize server

```shell
cd server
npm install socket.io --save
```

+ create the `index.js` file in the "server" directory

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

+ This code comes from the ]express official website](https://www.expressjs.com.cn/starter/hello-world.html)
+ install express

```shell
npm install express --save
```

+ startup project

```shell
node index
```

+ accessing `localhost:3000` testing
+ 