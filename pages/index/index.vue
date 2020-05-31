<template>
	<view class="content-box">
		<!-- 顶部选项卡 -->
		<scroll-view :scroll-into-view="scrollInto" :scroll-with-animation="true" scroll-x class="border-bottom scroll-row"
		 style="height: 80rpx;">
			<view class="scroll-row-item px-3" :id=" 'tab' + index" :class="tabIndex == index ? 'main-text-color' : '' " style="height: 80upx;line-height: 80upx;"
			 v-for="(item,index) in tabBars" :key="index" @click="changeTab(index)">
				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper :duration="200" :current="tabIndex" :style="'height:' + winHeight +'px;'" @change="onChangeTab">
			<swiper-item v-for="(item,index) in tabBarsList" :key="index">
				<scroll-view scroll-y :style="'height:' + winHeight +'px'" @scrolltolower="loadmore(index)">
					<!-- 标题 -->
					<!-- <card :isShow="true" headerTitle="每日精选"> -->
					<!-- <image src="/static/images/demo/demo4.jpg" mode=""></image> -->
					<!-- </card> -->
					<!-- 轮播图 -->
					<block v-for="(list,listIndex) in  item.list" :key="listIndex">
						<template v-if="list.type === 'swipers'">
							<swiperIndex :swiperData="list.data"></swiperIndex>
						</template>
						<!-- 首页分类 -->
						<template v-if="list.type === 'indexVavs' ">
							<indexVavs :indexVavs="list.data"></indexVavs>
							<!-- 分割线 -->
							<divider></divider>
						</template>


						<!-- 三图广告位 -->
						<template v-if="list.type === 'threeAdv' ">
							<threeAdv :resData="list.data"></threeAdv>
							<!-- 分割线 -->
							<divider></divider>
						</template>
						<!-- 列表 -->
						<view class="row j-sb" v-if="list.type === 'list' ">
							<block v-for="(itemLi,index) in list.data" :key="index">
								<commonList :item="itemLi" :key="index"></commonList>
							</block>
						</view>
					</block>
					<view class="d-flex a-center j-center text-light-muted font-md py-3">
						{{item.loadText}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	var demoTabBar = [{
		name: '推荐1'
	}, {
		name: '推荐1'
	}, {
		name: '推荐1'
	}, {
		name: '推荐1'
	}, ];
	var demo1 = [{
		type: "swipers",
		data: [{
				pic: require('../../static/images/demo/demo4.jpg')
			},
			{
				pic: require('../../static/images/demo/demo5.jpg')
			},
			{
				pic: require('../../static/images/demo/demo6.jpg')
			},
		],
	}, {
		type: "indexVavs",
		data: [{
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
			}
		]
	}, {
		type: 'threeAdv',
		data: {
			big: {
				pic: '/static/images/demo/demo1.jpg'
			},
			samlltop: {
				pic: '/static/images/demo/demo1.jpg'
			},
			samllbottom: {
				pic: '/static/images/demo/demo1.jpg'
			}
		}
	}, {
		type: "list",
		data: [{
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
	}];
	var demo2 = [{
		type: "swipers",
		data: [{
				pic: require('../../static/images/demo/demo4.jpg')
			},
			{
				pic: require('../../static/images/demo/demo5.jpg')
			},
			{
				pic: require('../../static/images/demo/demo6.jpg')
			},
		],
	}, {
		type: "indexVavs",
		data: [{
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
			}
		]
	}, {
		type: 'threeAdv',
		data: {
			big: {
				pic: '/static/images/demo/demo1.jpg'
			},
			samlltop: {
				pic: '/static/images/demo/demo1.jpg'
			},
			samllbottom: {
				pic: '/static/images/demo/demo1.jpg'
			}
		}
	}, {
		type: "list",
		data: [{
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
	}]
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
				tabIndex: 0,
				scrollInto: "",
				winHeight: 500,
				tabBars: [],
				tabBarsList: [],
			}
		},
		onLoad() {
			this.__init();
			// 获取
			uni.getSystemInfo({
				success: function(res) {
					console.log(res)
					this.winHeight = res.windowHeight - uni.upx2px(85) + 'px'
				}
			})
		},
		methods: {
			//初始化数据
			__init() {
				//获取顶部选项卡
				this.tabBars = demoTabBar
				//根据顶部选项卡，展示页面
				let arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					let obj = {
						list: [],
						/*1.上拉加载更多 2.加载中 3.到底了*/
						loadText:'上拉加载更多'
					}
					if (i === 0) {
						obj.list = demo1
					}
					arr.push(obj)
				}
				this.tabBarsList = arr;
			},
			//加载数据
			listData() {
				let index = this.tabIndex;
				this.tabBarsList[index].list = demo2
			},
			
			// 切换选项卡
			changeTab(index) {
				if (this.tabIndex === index) {
					return
				}
				this.tabIndex = index;
				this.scrollInto = 'tab' + index
				this.listData()
			},
			onChangeTab(e) {
				this.changeTab(e.detail.current);
			},
			event() {
				console.log('轮播图')
			},
			//上拉加载更多
			loadmore(index){
				let item = this.tabBarsList[index]
				if(item.loadText !== "上拉加载更多"){return}
				//模拟加载
				item.loadText !== "加载中..."
				setTimeout(()=>{
					item.list =[...item.list,...demo2]
					//恢复数据
					item.loadText = "上拉加载更多"
				},2000)
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
