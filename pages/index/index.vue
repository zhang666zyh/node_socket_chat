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
