<template>
<div class="env">
    
    <mt-header fixed class="header" title="就诊环境">
        <mt-button icon="back" slot="left"></mt-button>
    </mt-header>

    <div class="content-in">
        <div class="img-item" v-for="item in env" :key="item.index">
        	<img :src="item.pic">
        </div>
        
    </div>

</div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import { Cell, Button } from 'mint-ui'
import { Progress } from 'mint-ui'
import { Toast } from 'mint-ui'
import URLS from '../router/link'
import $ from 'jquery'


export default {
    components:{
        Cell,Progress
    },
    name: 'Team',
    data () {
        return {
            env: [
            {
                id: 1,
                pic: "../../static/date1.png"
            },
            {
                id: 2,
                pic: "../../static/date1.png"
            },
            {
                id: 3,
                pic: "../../static/date1.png"
            },
            {
                id: 4,
                pic: "../../static/date1.png"
            },
            {
                id: 1,
                pic: "../../static/date1.png"
            },
            {
                id: 2,
                pic: "../../static/date1.png"
            },
            {
                id: 1,
                pic: "../../static/date1.png"
            },
            {
                id: 2,
                pic: "../../static/date1.png"
            }
            ]
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
.env {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
}
.env .header {
    background-color: #5871f5;
}
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #ffffff;
  overflow: auto;
  z-index: 9;
  padding-bottom: 15px;
}
.img-item {
	float: left;
	width: calc(50vw - 22.5px);
	height: calc(50vw - 22.5px);
	margin: 15px 0px 0px 15px;
	
}

.img-item img {
	width: 100%;
	height: 100%;
}


</style>
