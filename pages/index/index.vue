<template>
	<view class="content-box">
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="border-bottom scroll-row" style="height: 80upx;">
			<view class="scroll-row-item px-3" :class="tabIndex == index ? 'main-text-color' : '' " style="height: 80upx;line-height: 80upx;" v-for="(item,index) in tabBars" :key="index">
				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>
		<!-- 标题 -->
		<card :isShow="true" headerTitle="每日精选">
			<!-- <image src="/static/images/demo/demo4.jpg" mode=""></image> -->
		</card>
		<!-- 轮播图 -->
		<swiperIndex :swiperData="swipers"></swiperIndex>
		<!-- 首页分类 -->
		<indexVavs :indexVavs="indexVavs"></indexVavs>
		<!-- 分割线 -->
		<divider></divider>
		<!-- 三图广告位 -->
		<threeAdv :resData="threeAdv"></threeAdv>
		<!-- 列表 -->
		<view class="row j-sb">
			<block v-for="(item,index) in indexList" :key="index">
				<commonList :item="item" :key="index"></commonList>
			</block>
		</view>
	</view>
</template>

<script>
	import swiperIndex from '../../components/index/swiperIndex.vue'
	import indexVavs from '../../components/index/indexVavs.vue'
	import threeAdv from '../../components/index/threeAdv.vue'
	import commonList from '../../components/common/commonList.vue'
	export default {
		components: {
			swiperIndex,
			indexVavs,
			threeAdv,
			commonList
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				tabIndex:0,
				tabBars:[{name:'推荐'},{name:'关注'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'},{name:'推荐'}],
				swipers: [{
						pic: require('../../static/images/demo/demo4.jpg')
					},
					{
						pic: require('../../static/images/demo/demo5.jpg')
					},
					{
						pic: require('../../static/images/demo/demo6.jpg')
					},
				],
				indexVavs: [{
						pic: '../../static/images/indexnav/1.png',
						name: '新品发布'
					},
					{
						pic: '../../static/images/indexnav/1.png',
						name: '新品发布'
					},
					{
						pic: '../../static/images/indexnav/1.png',
						name: '新品发布'
					},
					{
						pic: '../../static/images/indexnav/1.png',
						name: '新品发布'
					},
					{
						pic: '../../static/images/indexnav/1.png',
						name: '新品发布'
					},
					{
						pic: '../../static/images/indexnav/1.png',
						name: '新品发布'
					},
					{
						pic: '../../static/images/indexnav/1.png',
						name: '新品发布'
					},
					{
						pic: '../../static/images/indexnav/1.png',
						name: '新品发布'
					},
					{
						pic: '../../static/images/indexnav/1.png',
						name: '新品发布'
					},
				],
				threeAdv: {
					big: {
						pic: '/static/images/demo/demo1.jpg'
					},
					samlltop: {
						pic: '/static/images/demo/demo1.jpg'
					},
					samllbottom: {
						pic: '/static/images/demo/demo1.jpg'
					}
				},
				indexList: [{
						pic: '/static/images/demo/list/1.jpg',
						title: "照相机",
						describe: '哈哈这是一个照相机',
						price: '1399',
						originalPrice: '2699'
					},
					{
						pic: '/static/images/demo/list/1.jpg',
						title: "照相机",
						describe: '哈哈这是一个照相机',
						price: '1399',
						originalPrice: '2699'
					},
					{
						pic: '/static/images/demo/list/1.jpg',
						title: "照相机",
						describe: '哈哈这是一个照相机',
						price: '1399',
						originalPrice: '2699'
					},
					{
						pic: '/static/images/demo/list/1.jpg',
						title: "照相机",
						describe: '哈哈这是一个照相机',
						price: 1399,
						originalPrice: 2699
					}
				]
			}
		},
		onLoad() {
			// 
		},
		methods: {
			event() {
				console.log('轮播图')
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

	.logo {
		height: 200rpx;
		width: 100%;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.swiper-item {
		height: 100%;

		img {
			display: block;
			height: 100%;
		}
	}
</style>
