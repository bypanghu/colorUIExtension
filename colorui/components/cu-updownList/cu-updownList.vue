<template>
	<view>
		<view class="updownList" >
			<view class="updownList-item" v-for="(item,index) in list" :key='index'>
				<view class="item-head" @click="change" :data-item='index'>
					<view :class="[active == index ? 'text-blue' : '']">
						<text>{{item.title}}</text>
						<text
						:class="[active == index  ?'cuIcon-unfold':'cuIcon-right']"
						 ></text>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-modelcu-model" v-if="show.length !=0">
			<view class="updownList-showList">
				<view class="updownList-showList-item" v-if="show.length !=0" @click="updownListOutput" data-item="1">
					默认排序
				</view>
				<view class="updownList-showList-item"  @click="updownListOutput" :data-item='item' v-for="(item,index) in show.item" :key='index'>
					{{item}}
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
		data() {
			return {
				show : [],
				active : -1,
				checkUpdownList : []
			}
		},
		methods: {
			change(e){
				var index = e.currentTarget.dataset.item
				var list = this.list
				if(this.active == index){
					this.active = -1
					this.show = []
				}else{
					this.active = index
					this.show = list[index]
				}
			},
			updownListOutput(e){
				if(e.currentTarget.dataset.item != 1){
					var list = this.list
					for(var i = 0 ; i < list.length ; i++){
						if( i == this.active){
							list[i]['title'] =  e.currentTarget.dataset.item
						}
						if( i != this.active){
							this.checkUpdownList = [
								list[i]['title'] ,e.currentTarget.dataset.item
							]
						}
					}
					this.show = []
					this.active = -1
					this.$emit("checkUpdown", this.checkUpdownList);
				}else{
					this.show = []
					this.active = -1
					this.$emit("checkUpdown", this.checkUpdownList);
				}
			}
		}
	}
</script>

<style>
.updownList{
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 100rpx;
	padding: 20rpx;
	background-color: #fff;
	border-bottom: 1rpx solid #e2e2e2;
}
.updownList-showList{
	background-color: rgba(250,250,250,1);
	width: 100%;
	position: absolute;
	
	border-radius:0 0 25px  25px;
	box-shadow: 0 6px 15px rgba(36, 37, 38, 0.1);
	
	z-index: 1110;
}
.cu-modelcu-model{
	position: absolute;
	z-index: 999;
	background-color: rgba(238,238,238,0.8);
	width: 100%; 
	height: 100%;
	position: fixed; 
	left: 0; 
	overflow: hidden;
	transition: fadeInDown 0.3s ease-in-out 0s;
}

.updownList-showList-item{
	height: 80rpx;
	display: flex;
	align-items: center;
	padding: 0  80rpx;
	border-bottom: 1rpx solid #e2e2e2;
}
</style>
