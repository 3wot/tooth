<template>
	<div class="login">
		<img class="bg" src="../../static/login.jpg">

		<div class="content-in">
			<div>
				<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>

				<mt-field label="验证码" placeholder="请输入验证码" type="text" v-model="password">
					<mt-button size="small" @click.native="handleClick" :disabled="passwordTemp" type="primary">{{passwordText}}
					</mt-button>
				</mt-field>  
			</div>

			<mt-button @click.native="loginClick" :disabled="!hasSend" style="margin-top:1rem;" size="large" type="primary">登录</mt-button>
			<mt-button @click.native="gobackClick" style="margin-top:1rem;" size="large" type="primary">返回</mt-button>

		</div>
	</div>
</template>

<script>
import { Button } from 'mint-ui'
import { Field } from 'mint-ui'
import Router from 'vue-router'
import URLS from '../router/link'
import $ from 'jquery'
import { Toast } from 'mint-ui'

export default {
	components:{
		Button,Field
	},
	name: 'Login',
	data () {
		return {
			phone: '',
			password: '',
	  		hasSend: true,//标志是否请求过短信验证码
	  		passwordText: '发送验证码',
	  		passwordTemp: false
		}
	},
	mounted() {
		
	},
methods:{
	//点击发送验证码
	handleClick() {
		const that = this
	  	if(this.phone){//如果号码不为空

	  		const url = URLS.getURL('sendCode');
		  	const params = {
		  		phone: this.phone,
		  	}  
	  		$.get(url, params, function(res){
	  			if(!res.status){
	  				that.hasSend = true
			  		that.countDown()// 发送成功，倒计时
				}else{//短信码失败
					Toast({
						message: res.message,
						position: 'bottom',
						duration: 5000
					})
				  	// 获取失败，则刷新图片
				  	that.getCodeImg()
				}
			})

	  	}else{
		  	Toast({
		  		message: '请填写手机号码',
		  		position: 'bottom',
		  		duration: 3000
		  	})
	  	}
	},

	//获取token
	getToken(callback) {
		const getToken = URLS.getURL('getToken');
		$.get(getToken,function(data){
			callback(data);
		})
	},

	//倒计时
	countDown () {
		const that = this
		that.passwordTemp = true
		let num = 60
		const timer = setInterval(function(){
			that.passwordText = num + 'S'
			num = num - 1
			if(num === 0){
				that.passwordTemp = false
				that.passwordText = '发送验证码'
				clearInterval(timer)
			}
		},1000)
	},

	//点击登录
	loginClick() {
		let that = this;
	  	if (that.password) {//如果用户名和短信验证码不空
		  	if (that.phone) {
		  		const url = URLS.getURL('login')
		  		const params = {
		  			phone: this.phone,
		  			sms: this.password
		  		}
				$.post(url, params, function(res){
					if (!res.status) {
						console.log('获取token',res.data.access_token)
						that.userInfo.token = res.data.access_token
						that.gobackClick();
					} else {
						Toast({
							message: res.message,
							position: 'bottom',
							duration: 3000
						});
					}
				})

		  	} else {
		  		Toast({
					message: '请填写手机号码',
					position: 'bottom',
					duration: 3000
				});
		  	}
		} else {
			Toast({
				message: '请填写短信码',
				position: 'bottom',
				duration: 3000
			});
		}
	},

	gobackClick() {
	  	this.$router.go(-1);//哪里来的，跳回去
	},	

},


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login img.bg{
	position: absolute;
	left: 0px;
	top: 0px;
	height: 100%;
	width: 100%;
}
.login .content-in{
	padding: 20px;
}
.login .mint-cell{
	background-color: rgba(255,255,240,0.3);
}
.login .mint-button--small{
	height: 27px;
	border-radius: 0px;
}
.login .mint-cell-wrapper .mint-cell-title {
	width: 80px !important;
}

</style>
