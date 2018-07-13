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
                    
                </div>
                <div class="des-tel">
                    
                </div>
            </div>


        </div>
        
        


    </div>

</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import { Navbar, TabItem, Button } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
// import MatePic from '@/components/MatePic'
// import URLS from '../router/link'
// import $ from 'jquery'
// import { Toast } from 'mint-ui'

export default {
    components:{
    
    },
    name: 'ClinicDetail',
    mounted() {
    
    },
    data () {
        return {
            topImg: [{img:'../../static/date1.png'},{img:'../../static/date1.png'},{img:'../../static/date1.png'}],
            info: {
                name: "我是商家",
                work_time: "一天",
                address: "北京",
                telphone: "13691305465"
            }
            
        }
    },
    methods:{

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
    bottom: 0px;
    font-size: 14px;
}
.clinic .content-in{
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
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
}
.des-con {
    position: absolute;
    top: 40px;
    left: 0px;
    height: 60px;
    border-right: 1px solid #dddddd;
}
.des-tel {
    height: 60px;

}

</style>
