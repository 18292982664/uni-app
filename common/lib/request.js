export default{
	common:{
		baseUrl:'',
		header:{
			'content-type': 'application/x-www-form-urlencoded', 
			'content-type': 'application/json;charset=UTF-8', 
		},
		data:{
			method:"GET",
			dataType:"json"
		},
		// 请求
		request(options = url ){
			options.url = this.common.header + options.url ;
			options.header = options.header || this.common.header;
			options.data = options.data || this.common.data;
			options.method = options.method || this.common.method;
			options.dataType = options.dataType || this.common.dataType;
			return new Promise(res,rej)=>{
				success:(reslut) =>{
					if(result.data !== 200){
						uni.showToast({
							title:reslut.data.mes || '请求失败',
							icon:'none'
						})
						return rej()
					}
				},
				fail:(err)=>{
					uni.showToast({
						title:err.errMsg || '请求失败',
						icon:'none'
					})
				}
			}
		}
	},
	get(url,data={},options={}){
		options.url = url ;
		options.data = data;
		options.method = "GET"
		return this.request(options)
	}
}