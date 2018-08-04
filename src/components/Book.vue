<template>
<div class="book">
    
    <mt-header fixed class="header" title="预约挂号">
        <mt-button icon="back" slot="left" @click="goBack"></mt-button>
    </mt-header>

    <div class="content-in">
        <div style="position:relative;height: 100%;">
            <div class="p-1">
                <p class="title-1" style="border-bottom: 1px solid #dddddd;">预约人信息</p>
                <p class="title-1">预约人： {{name}}</p>
                <p class="title-1">联系方式： {{tel}}</p>
                <p class="title-1">出诊医院：{{hospital}}</p>
            </div>

            <div class="p-2">
                <p class="title-1" style="border-bottom: 1px solid #dddddd;">就诊人信息</p>
                <p class="title-1">
                    <span>就诊人姓名： {{book_name}}</span>
                    <mt-button style="float: right;margin-top: 3px;margin-right: 15px;" size="small">常用就诊人
                    </mt-button>
                </p>
                <p class="title-1">
                    <span>病情描述</span>
                    <select class="title-select">
                        <option value="1">拔牙</option>
                        <option value="2">种植牙</option>
                        <option value="3">洗牙</option>
                    </select>
                </p>
                <p class="title-1">
                    <span>意向医生</span>
                    <select class="title-select">
                        <option value="1">张医生</option>
                        <option value="2">李医生</option>
                        <option value="3">刘医生</option>
                    </select>
                </p>
                <p class="title-1">
                    <span>就诊人群</span>
                    <select class="title-select">
                        <option value="1">老人</option>
                        <option value="2">儿童</option>
                        <option value="3">孕妇</option>
                    </select>
                </p>
                <p class="title-1">
                    <span>就诊时间</span>
                    <!-- <mt-datetime-picker
                        class="title-select"
                        v-model="time"
                        type="datetime"
                        >
                    </mt-datetime-picker> -->

                    <input type="date" class="title-select" name="">
                </p>
            </div>

            <span class="deal-link">预约即同意《
                <router-link :to="{ name: 'deal'}">
                    <span style="color:blue;">服务协议</span>
                </router-link>
            》</span>
        </div>
    </div>

    <div class="bottom">
        <div style="margin: 7px 15px;">
            <mt-button class="j-btn">立即预约</mt-button>    
        </div>
        
    </div>

</div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import { Cell, Button } from 'mint-ui'
import { DatetimePicker } from 'mint-ui'
import { Progress } from 'mint-ui'
import { Toast } from 'mint-ui'
import URLS from '../router/link'
import $ from 'jquery'


export default {
    components:{
        Cell,Progress
    },
    name: 'Book',
    data () {
        return {
            name: '张三',
            tel: '12233333333',
            hospital: '北京圣恩口腔医院',
            book_name: '',
            dentist_id: '',
            relation_id: '',
            age_id: '',
            time_interval: '',
            book_time: '',
            desc_id: '',
            time: '',
        }
    },
    mounted() {
        
    
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
    }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
}
.book .header {
    background-color: #5871f5;
}
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 55px;
  overflow-y: auto;
  background-color: #f5f5f5;
  overflow: visible;
  z-index: 9;
}
.bottom {
    position: absolute;
    height: 55px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-top: 1px solid #dddddd;
}
.j-btn {
    background-color: #5871f5;
    color: #ffffff;
    width: 100%;
    border-radius: 4px;
}
.p-1 {
    background-color: #ffffff;
}
.p-2 {
    background-color: #ffffff;
    margin-top: 15px;
}

.title-1 {
    height: 40px;
    line-height: 40px;
    text-indent: 20px;
    margin: 0px;
}
.title-select {
    height: 30px;
    width: 150px;
    float: right;
    margin-right: 15px;
}

.deal-link {
    position: absolute;
    bottom: 15px;
    left: 0px;
    right: 0px;
    text-align: center;
    font-size: 12px;
}
</style>
