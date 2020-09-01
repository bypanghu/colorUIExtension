<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">折叠面板</block>
		</cu-custom>
		<cu-collapse class="margin-top" :list='list'></cu-collapse>
	</view>
</template>

<script>
	import {fun1} from '../../colorui/util/request.js'
	export default {
		data() {
			return {
				list:[
					{
						'title':'折叠面板1',
						'con' : '折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！',
						'status' : false
					},
					{
						'title':'折叠面板1',
						'con' : '折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！',
						'status' : false
					}
				]
			}
		},
		methods: {
			
		},
	}
</script>

<style>

</style>
