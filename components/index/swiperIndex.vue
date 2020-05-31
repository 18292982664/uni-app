<template>
	<view>
		<swiper :indicator-dots="true" autoplay :interval="3000" :duration="1000" circular>
			<block v-for="(item,index) in swiperData" :key="index">
				<swiper-item>
					<view class="swiper-item">
						<image :src="item.pic" lazy-load style="height: 350upx;"></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			swiperData:Array
		},
		methods:{
			event() {
				console.log('轮播图')
			}
		}
	}
</script>

<style>
</style>
