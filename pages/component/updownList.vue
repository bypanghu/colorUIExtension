<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">下拉列表</block>
		</cu-custom>
		<cu-updownList :list='list' v-on:checkUpdown='getUpdown'></cu-updownList>
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-circlefill text-grey"></text>
					<text class="text-grey">图标 + 标题</text>
				</view>
			</view>
			<view class="cu-item" >
				<view class="content">
					<image src="/static/logo.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">图片 + 标题</text>
				</view>
			</view>
			<view class="cu-item" >
				<button class="cu-btn content" open-type="contact">
					<text class="cuIcon-btn text-olive"></text>
					<text class="text-grey">Open-type 按钮</text>
				</button>
			</view>
			<view class="cu-item" >
				<navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
					<text class="cuIcon-discoverfill text-orange"></text>
					<text class="text-grey">Navigator 跳转</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						'title':'种类',
						'item' : ['火车','汽车','高铁']
					},
					{
						'title':'价格',
						'item' : ['100','200','300']
					},
				]
			}
		},
		methods: {
			getUpdown(e){
				console.log(e)
			}
		}
	}
</script>

<style>

</style>
