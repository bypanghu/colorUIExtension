<template>
	<view>
		<view class="collapse" v-for="(item,index) in list" :key='index'>
			<view class="collapse-list-item" @click="showTips" :data-key='index'>
				<view class="action">
					<text class="text-grey">{{item.title}}</text>
				</view>
				<view class="action">
					<text 
					:class="[item.status ?'cuIcon-unfold':'cuIcon-right']"
					 ></text>
				</view>
			</view>
			<view class="collapse-con" v-if="item.status">
				<view class="content padding">
					{{item.con}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default :[]
			},
		},
		watch:{
			list :function (val, oldVal) {
			  console.log('new: %s, old: %s', val, oldVal)
			},
		},
		methods: {
			showTips(e){
				var index = (e.currentTarget.dataset.key) 
				var list = this.list
				for(var i =0;i<list.length ; i++){
					if(i == index){
						if(list[i]['status']) list[i]['status'] = false
						else list[i]['status'] = true
					}
				}
			}
		}
	}
</script>

<style >
	.collapse{
		display: block;
		overflow: hidden;
	}
	.collapse-list-item{
		display: flex;
		justify-content: space-between;
		align-items: center; 
		background-color: #fff;
		height: 120rpx;
		padding:20rpx;
		border-bottom: 1rpx solid #F4F8FC;
	}
	.collapse-con{
		height: auto;
		padding: 10rpx;
		background-color: #F4F8FC;
	}
</style>
