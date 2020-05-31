<template>
	<view class="">
		<view class="card">
			<view v-if="isShow" class=" p-2 border-bottom main-border-color">
		    	<slot name="title"><text class="font-md font-weight">{{headerTitle}}</text></slot>
			</view>
			<view class="">
				<image v-if="bodyCover" :src="bodyCover"></image>
				<slot name="bogy"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			headerTitle:String,
			bodyCover:String,
			isShow:{
				type:Boolean,
				default:true
			}
		}
	}
</script>

<style>
</style>
