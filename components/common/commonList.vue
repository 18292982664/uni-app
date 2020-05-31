<template>
	<view>
		<view style="width: 372.5upx;">
			<image :src="item.pic" mode="widthFix" lazy-load=""></image>
			<view class="p-2 pt-1">
				<view class="font-md">{{item.title}}</view>
				<text class="d-block font text-light-muted">{{item.describe}}</text>
				<view class="d-flex my-1">
					<price>{{item.price}}</price>
					<view class="font-sm text-light-muted  line-through ml-1 a-self-end line-h">￥{{item.originalPrice}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import price from './price.vue'
	export default{
		components:{
			price
		},
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style>
</style>
