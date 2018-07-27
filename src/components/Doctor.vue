<template>
<div class="doctor">
    
    <mt-header fixed class="header" title="">
        <mt-button icon="back" slot="left"></mt-button>
    </mt-header>

    <div class="content-in">
        <div style="position:relative;height: 100%;">

            <div class="item-1">
                <div class="i-icon">
                    <img :src="doctor.pic" alt="">
                </div>
                <div class="p-1">
                    <span>{{doctor.name}}</span>
                    <span>{{doctor.title}}</span>
                    <span>{{doctor.section}}</span>
                </div>
                <div class="p-2">
                    <span v-if="doctor.tag" style="display:inline-block;padding:0 10px;height:22px;line-height:22px;background-color:#5871f5;font-size:12px;color:#ffffff;text-align:center;font-style:italic;">
                    {{doctor.tag}}
                    </span>
                </div>
                <div class="p-3">
                    擅长：{{doctor.special}}    
                </div>
                
            </div>

            <div class="item-2">
                <div class="title">
                    <span>医生简介</span>
                </div>
                <p class="p-content">
                    {{doctor.summary}}
                </p>
            </div>
            
            <div class="item-3">
                <div class="title">
                    <span>个人履历</span>
                </div>
                <div>
                    <div class="p-2" v-for="item in doctor.record" :key="item.index">
                        <span style="font-weight: normal;">{{item.content}}</span>
                    </div>
                </div>
            </div>
    
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
            doctor: {
                "name": "熊晓燕",
                "pic": "../../static/date1.png",
                "section": "口腔科",
                "summary": "刘秀茹院长有多年的口腔临床经验，对牙齿种植有很深的研究，多次得到种植患者的肯定和感谢。对复杂疑难种植修复病例的技术设计及临床应用有很深的学术造诣和独特的临床经验",
                "title": "执业医师",
                "tag": "知名专家",
                "special": "幼儿口腔 美白 洗牙",
                "record": [
                    {
                        "content": "2015-01-01 2016-02-02 北京医科大学 牙科专业 硕士"
                    },
                    {
                        "content": "2016-01-01 2017-02-02 北京口腔医学院 主治医师"
                    },
                    {
                        "content": "2016-01-01 2017-02-02 北京口腔医学院 主治医师"
                    },
                    {
                        "content": "2016-01-01 2017-02-02 北京口腔医学院 主治医师"
                    },
                    {
                        "content": "2016-01-01 2017-02-02 北京口腔医学院 主治医师"
                    },
                    {
                        "content": "2016-01-01 2017-02-02 北京口腔医学院 主治医师"
                    },
                    {
                        "content": "2016-01-01 2017-02-02 北京口腔医学院 主治医师"
                    },
                    {
                        "content": "2016-01-01 2017-02-02 北京口腔医学院 主治医师"
                    },
                    {
                        "content": "2016-01-01 2017-02-02 北京口腔医学院 主治医师"
                    },
                    {
                        "content": "2016-01-01 2017-02-02 北京口腔医学院 主治医师"
                    },
                    {
                        "content": "2016-01-01 2017-02-02 北京口腔医学院 主治医师"
                    },
                    {
                        "content": "2016-01-01 2017-02-02 北京口腔医学院 主治医师"
                    }
                ]
            }
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
.doctor {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
}
.doctor .header {
    background-color: #5871f5;
}
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 55px;
  overflow-y: auto;
  background-color: #ffffff;
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
}
.item-1 {
    height: 165px;
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.2);
    top: 20px;
    left: 15px;
    right: 15px;
    position: absolute;
    text-align: center;
    border-radius: 10px;
}
.i-icon {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin: -30px auto 0px;
    border: 1px solid #ffffff;

}
.i-icon img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}
.p-1 {
    font-size: 16px;
    color: #333333;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    -webkit-box-flex: 1;
    margin-top: 15px;
}
.p-2 {
    font-size: 14px;
    color: #333333;
    font-weight: lighter;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    -webkit-box-flex: 1;
    margin-top: 15px;
}
.p-3 {
    font-size: 14px;
    color: #777777;
    font-weight: lighter;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    -webkit-box-flex: 1;
    margin-top: 15px;
}
.item-2 {
    position: absolute;
    top: 210px;
    left: 15px;
    right: 15px;
    height: 150px;
}
.title {
    font-weight: bold;
}
.p-content {
    font-size: 16px;
    text-indent: 15px;
    height: 130px;
    overflow-y: auto;
}
.item-3 {
    position: absolute;
    top: 360px;
    left: 15px;
    right: 15px;
    bottom: 0px;
    overflow-y: auto;
}

</style>
