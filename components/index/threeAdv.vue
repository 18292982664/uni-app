<template>
	<view>
		<view class="d-flex">
			<image :src="resData.big.pic" lazy-load style="width: 373upx;height: 530upx;border-right: 2upx solid #F5F5F5;" @click="event(resData.big)"></image>
			<view class="d-flex flex-column">
				<image :src="resData.samlltop.pic" style="width: 375upx;height: 264upx;border-bottom: 2upx solid #F5F5F5;" @click="event(resData.samlltop)"></image>
				<image :src="resData.samllbottom.pic" style="width: 375upx;height: 264upx;" @click="event(resData.samllbottom)"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			resData:Object
		},
		methods:{
			event(obj){
				console.log(obj)
			}
		}
	}
</script>

<style>
</style>
