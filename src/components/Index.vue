<template>
	<div class="index">

		<div :is="selectId"></div>

		<!-- 底部 -->
		<mt-tabbar v-model="selectId">
			<mt-tab-item id="Date" @click.native="">
				<img slot="icon" src="../../static/logo1.png">
				预约
			</mt-tab-item>
			<!-- </router-link> -->
			<mt-tab-item id="Activity" @click.native="">
				<img slot="icon" src="../../static/logo2.png">
				活动
			</mt-tab-item>
			<mt-tab-item id="My" @click.native="">
				<img slot="icon" src="../../static/logo4.png">
				我的
			</mt-tab-item>
		</mt-tabbar>

	</div>
</template>

<script>

import { Tabbar, TabItem } from 'mint-ui'
import Date from '@/components/Date'
import Activity from '@/components/Activity'
import My from '@/components/My'
import $ from 'jquery'
import URLS from '../router/link'


export default {
  	components:{
  		Tabbar, TabItem, Date, Activity, My
  	},
  	name: 'Index',
  	data () {
		return {
	  		selectId: 'Date'
		}
  	},
  	mounted() {


  	},
  	methods:{
		
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.index {
	height: 100%;
	width: 100%;
	margin: 0px;
	height: 0px;
}

</style>
