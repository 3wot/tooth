<template>
<div class="team">
    
    <mt-header fixed class="header" title="医生团队">
        <mt-button icon="back" slot="left"></mt-button>
    </mt-header>

    <div class="content-in">
        
        <div class="i-item" v-for="item in teamArr" :key="item.index">
            <div class="item-img">
                <img :src="item.pic" alt="">
            </div>

            <div class="item-content">
                <div class="p-1">
                    <span style="display: inline-block;width: 60px;">{{item.name}}</span>
                    {{item.title}}
                    <span v-if="item.tag" style="display:inline-block;padding:0 10px;height:22px;line-height:22px;background-color:#5871f5;float:right;font-size:12px;color:#ffffff;text-align:center;font-style:italic;">
                    {{item.tag}}
                    </span>
                </div>
                <div class="p-2">
                    <span>{{item.section}}</span>
                </div>
                <div class="p-3">
                    <span>专业特长：{{item.special}}</span>
                </div>

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
    name: 'Team',
    data () {
        return {
            teamArr: [
                {
                    id: 1,
                    name: "熊晓燕",
                    pic: "../../static/date1.png",
                    section: "口腔科",
                    title: "执业医师",
                    tag: "知名专家",
                    special: "幼儿口腔 美白 洗牙"
                },
                {
                    id: 1,
                    name: "熊晓燕",
                    pic: "../../static/date1.png",
                    section: "口腔科",
                    title: "执业医师",
                    tag: "",
                    special: "幼儿口腔 美白 洗牙"
                },
                {
                    id: 1,
                    name: "熊晓燕",
                    pic: "../../static/date1.png",
                    section: "口腔科",
                    title: "执业医师",
                    tag: "知名专家",
                    special: "幼儿口腔 美白 洗牙"
                },
                {
                    id: 1,
                    name: "熊晓燕",
                    pic: "../../static/date1.png",
                    section: "口腔科",
                    title: "执业医师",
                    tag: "知名专家",
                    special: "幼儿口腔 美白 洗牙"
                },
                {
                    id: 1,
                    name: "熊晓燕",
                    pic: "../../static/date1.png",
                    section: "口腔科",
                    title: "执业医师",
                    tag: "知名专家",
                    special: "幼儿口腔 美白 洗牙"
                },
                {
                    id: 1,
                    name: "熊晓燕",
                    pic: "../../static/date1.png",
                    section: "口腔科",
                    title: "执业医师",
                    tag: "专家",
                    special: "幼儿口腔 美白 洗牙"
                },
                {
                    id: 1,
                    name: "熊晓燕",
                    pic: "../../static/date1.png",
                    section: "口腔科",
                    title: "执业医师",
                    tag: "知名专家",
                    special: "幼儿口腔 美白 洗牙"
                },
                {
                    id: 1,
                    name: "熊晓燕",
                    pic: "../../static/date1.png",
                    section: "口腔科",
                    title: "执业医师",
                    tag: "知名专家",
                    special: "幼儿口腔 美白 洗牙"
                },
                {
                    id: 1,
                    name: "熊晓燕",
                    pic: "../../static/date1.png",
                    section: "口腔科",
                    title: "执业医师",
                    tag: "专家",
                    special: "幼儿口腔 美白 洗牙"
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
.team {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
}
.team .header {
    background-color: #5871f5;
}
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #eeeeee;
}
.i-item {
    height: 100px;
    width: 100%;
    background-color: #ffffff;
    margin-bottom: 10px;
    position: relative;
}
.i-item:last-child {
    margin-bottom: 0px;
}
.item-img {
    position: absolute;
    left: 15px;
    top: 20px;
    height: 60px;
    width: 60px;
}
.item-img img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}
.item-content {
    position: absolute;
    top: 0px;
    left: 90px;
    right: 15px;
    bottom: 0px;
    
    
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
    margin-top: 5px;
}
.p-3 {
    font-size: 14px;
    color: #666666;
    font-weight: lighter;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    -webkit-box-flex: 1;
    margin-top: 5px;
}
</style>
