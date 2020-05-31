<template>
	<view>
		<view class="row  m-2">
			<view class="span-4 d-flex flex-column a-center j-center py-1" v-for="(item,index) in indexVavs" @click="btnNav(item)">
				<image :src="item.pic"  style="width: 60upx;height: 60upx;"></image>
				<text class="font-sm">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			indexVavs:Array
		},
		methods:{
			btnNav(){
				
			}
		}
	}
</script>

<style>
</style>
