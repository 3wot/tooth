<template>

    <div class="clinic">

        <div class="content-in">
            <div class="panel-in">
                <mt-swipe :auto="0">
                    <mt-swipe-item v-for="item in topImg" :key="item.index">
                        <img class="top-img" :src="item.img">
                    </mt-swipe-item>
                </mt-swipe>
            </div>

            <div class="clinic-des">
                <p class="des-name">{{info.name}}</p>
                <div class="des-con">
                    <p class="con-address">{{info.address}}</p>
                    <p class="con-address">营业时间：{{info.work_time}}</p>
                </div>
                <div class="des-tel">
                    <a :href="'tel:' + info.telphone">
                        
                    </a>
                    <img class="tel-img" src="../../static/date1.png" alt="">
                    <p class="tel-txt">电话咨询</p>
                </div>
            </div>

            <div class="btns">
                <div class="btns-in">
                    <div class="dv-btn dv-1">
                        <router-link :to="{ name: 'clinicintro', params: { id: $route.params.id }}">
                            <span class="text-white">
                            门诊介绍    
                            </span>
                        </router-link>
                    </div>
                    <div class="dv-btn dv-2">
                        <router-link :to="{ name: 'team', params: { id: $route.params.id }}">
                            <span class="text-white">
                                医生团队    
                            </span>
                        </router-link>
                    </div>
                    <div class="dv-btn dv-3">
                        <span class="text-white">
                            就诊环境    
                        </span>
                        
                    </div>
                    <div class="dv-btn dv-4">
                        <span class="text-white">
                            价格清单    
                        </span>
                        
                    </div>
                    <div class="dv-btn dv-5">
                        <span class="text-white">
                            活动列表    
                        </span>
                    </div>
                    <div class="dv-btn dv-6"></div>   
                </div>
            </div>

        </div>
        
        <div class="bottom">
            <div style="margin: 5px 15px;">
                <mt-button class="j-btn">立即预约</mt-button>    
            </div>
            
        </div>


    </div>

</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import { Navbar, TabItem, Button } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
import URLS from '../router/link'
import $ from 'jquery'
import { Toast } from 'mint-ui'

export default {
    components:{
    
    },
    name: 'ClinicDetails',
    mounted() {
        // 初始化
        // this.init()
    },
    data () {
        return {
            topImg: [{img:'../../static/date1.png'},{img:'../../static/date1.png'},{img:'../../static/date1.png'}],
            info: {
                name: "我是商家",
                work_time: "一天",
                address: "北京天安门",
                telphone: "13691305465"
            }
            
        }
    },
    methods:{
        init() {
            const that = this;
            const id = this.$route.params.id+'';
            if(id){
                this.getDetail(id)
            } else {
                Toast({
                    message: 'id不存在',
                    position: 'bottom',
                    duration: 3000
                });
            }
        },

        getDetail(id) {
            const url = URLS.getURL('detail');
            const data = {
                dentist_id: id,
            }
            this.info = {}
            $.get(url, data, res => {
                console.log(this.info)
                if(!res.status) {
                    this.info = res.data.info
                } else {
                    Toast({
                        message: res.message,
                        position: 'bottom',
                        duration: 3000
                    });
                }
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.clinic {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    bottom: 55px;
    font-size: 14px;
}
.clinic .content-in{
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
}
.bottom {
    position: absolute;
    height: 55px;
    left: 0px;
    right: 0px;
    bottom: -55px;
    border-top: 1px solid #dddddd;
}
.clinic .top-img {
    height: 100%;
    width: 100%;
}
.clinic .panel-in {
    width: 100vw;
    height: 55.55vw;
}
.clinic .clinic-des {
    position: relative;
    height: 100px;
    width: 100%;
    float: left;
}
.des-name {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
    font-weight: bold;
    text-indent: 15px;
}
.des-con {
    position: absolute;
    top: 40px;
    left: 15px;
    right: 65px;
    height: 60px;
    border-right: 1px solid #dddddd;
}
.con-address {
    font-size: 13px;
    color: #666666;
    line-height: 30px;
}
.des-tel {
    position: absolute;
    top: 40px;
    right: 15px;
    width: 50px;
    height: 60px;
    text-align: center;
}
.tel-img {
    width: 25px;
    height: 25px;
    margin: 10px auto 5px;

}
.tel-txt {
    font-size: 12px;
    color: #666666;
}
.btns {
    position: absolute;
    top: calc(55.55vw + 115px);
    bottom: 0px;
    width: 100%;
}
.btns-in {
        margin: 0 8px;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: scroll;
        justify-content: space-between;
        align-content: flex-start;
    }

.dv-btn {
    height: 75px;
    min-width: 40%;
    margin: 7px;
    flex: 1;
    border-radius: 8px;
    box-shadow: 2px 5px 9px 0 rgba(0,0,0,0.2);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
.dv-1 {
    background: linear-gradient(to bottom right, #407af6 , #6a99ff); /* 标准的语法 */
}
.dv-2 {
    background: linear-gradient(to bottom right, #19b6ff , #0fd4ff); /* 标准的语法 */
}
.dv-3 {
    background: linear-gradient(to bottom right, #39d5ca , #42eab9); /* 标准的语法 */
}
.dv-4 {
    background: linear-gradient(to bottom right, #ab81ff , #7a6de7); /* 标准的语法 */
}
.dv-5 {
    background: linear-gradient(to bottom right, #ffa576 , #fe6e69); /* 标准的语法 */
}
.dv-6 {
    box-shadow: none;
}

p {
    margin: 0px;
}
.j-btn {
    background-color: #5871f5;
    color: #ffffff;
    width: 100%;
    border-radius: 4px;
}
.text-white {
    color: #ffffff;
}

</style>
