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
				arr: [],
				cont: ''
			}
		},
		onLoad() {
			this.getmsg();
		},
		methods: {
			send:function(){
				if(this.cont.length > 0){
					// this.arr.push(this.cont);
					
					// 发送到后端
					this.socket.emit('message', this.cont)
				}
			},
			// 接收信息
			getmsg: function(){
				this.socket.on('gbmsg', data => {
					this.arr.push(data)
				})
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
