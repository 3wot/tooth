<template>
<div class="clinic-intro">
    
    <mt-header fixed class="header" title="门诊介绍">
        <mt-button icon="back" slot="left"></mt-button>
    </mt-header>

    <div class="content-in">

        <div class="panel-in">
            <img src="../../static/date1.png" alt="">
        </div>

        <div class="content">
            <div class="i-title">
                {{title}}
            </div>
            <div class="i-content">
                {{content}}
            </div>

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
    name: 'ClinicIntro',
    data () {
        return {
            title: '北京生贝恩诊所',
            content: "阿诗丹顿撒的阿达阿萨德啊实打实大师阿达阿萨德阿萨德阿萨达啊阿萨德阿萨德啊实打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿萨德按时AAA\n 打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿\n 打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨德阿达阿打实按时阿萨德阿萨德阿达啊大大阿萨"
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
.clinic-intro {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
}
.clinic-intro .header {
    background-color: #5871f5;
}
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow: auto;
}
.clinic-intro .panel-in {
    width: 100vw;
    height: 55.55vw;
}
.panel-in img{
  height: 100%;
  width: 100%;
}

.content {
    position: absolute;
    top: 55.55vw;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
.i-title {
    height: 45px;
    line-height: 45px;
    color: #333333;
    font-size: 18px;
    padding-left: 15px;
}
.i-content {
    height: calc(100% - 60px);
    font-size: 14px;
    color: #707070;
    text-indent: 20px;
    margin: 0px 15px;
    padding-top: 10px;
    line-height: 24px;
    overflow-y: auto;
    border-top: 1px solid #dddddd;
}

</style>
