<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import '@/static/font/iconfont.css';
	@import "./common/common.css";
	@import "./common/zcm-main.css";
	@import "./common/icon.css";
	.uni-body{
		 padding-bottom: calc(var(--window-bottom) + 20px);
	}
</style>
