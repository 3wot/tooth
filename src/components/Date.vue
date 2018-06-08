<template>

    <div class="date">

        <mt-header fixed class="header" title="福利平台">
            
            <mt-button icon="back" slot="left">北京</mt-button>
            
        </mt-header>

        <div class="content-in">
            <div class="panel-in">
                <mt-swipe :auto="0">
                    <mt-swipe-item v-for="item in topImg" :key="item.index">
                        <img class="top-img" :src="item.img">
                    </mt-swipe-item>
                </mt-swipe>
            </div>

            <div class="search">
                <div class="area">
                    区域
                </div>
                <div class="search-content">
                    <mt-search
                        class="date-search"
                        v-model="searchText"
                        cancel-text=""
                        placeholder="喜欢的主题活动"
                        >
                    </mt-search>
                </div>
            </div>
            
            <div class="bar">
                <mt-navbar v-model="selected">
                    <mt-tab-item v-for="item in selectArr" :key="item.index" :id="item">{{item}}</mt-tab-item>
                </mt-navbar>
            </div>

            <div class="list">
                <div class="list-item" v-for="item in itemArr" :key="item.index">
                    <div class="list-item-in">
                        <img :src="item.img" class="img" alt="">
                    </div>
                </div>
            </div>
            

        </div>

    </div>

</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import { Navbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
// import MatePic from '@/components/MatePic'
// import URLS from '../router/link'
// import $ from 'jquery'
// import { Toast } from 'mint-ui'

export default {
    components:{
    
    },
    name: 'Date',
    mounted() {
    
    },
    data () {
        return {
            topImg: [{img:'../../static/date1.png'},{img:'../../static/date1.png'},{img:'../../static/date1.png'}],
            searchText: '',
            selectArr: ['按区域','按推荐'],
            selected: '按区域',
            itemArr: [{
                img: '../../static/item1.png',
                name: 'AAA',
                distance: '3',
                address: 'XXXXXXXXXX',
            },{
                img: '../../static/item1.png',
                name: 'BBB',
                distance: '3',
                address: 'XXXXXXXXXX',
            },{
                img: '../../static/item1.png',
                name: 'CCC',
                distance: '10.8',
                address: 'XXXXXXXXXX',
            }
            ]
        }
    },
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.date {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    bottom: 55px;
    font-size: 14px;
}
.date .header {
    background-color: #5871f5;
}
.date .content-in{
    position: absolute;
    left: 0px;
    right: 0px;
    top: 40px;
    bottom: 0px;
}
.date .panel-in {
    width: 100vw;
    height: 55.55vw;
}
.date .top-img {
    height: 100%;
    width: 100%;
}
.mint-swipe-indicator.is-active {
    background: #5871f5;
    opacity: 1;
    width: 20px;
    height: 8px;
    border-radius: 4px;
}
.date .search {
    height: 44px;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid #e1e1e1;
}
.date .bar {
    height: 50px;
    background-color: #eeeeee;
}
.date .mint-searchbar-inner {
    padding: 0px 6px;
}
.search-content {
    position: absolute;
    left: 60px;
    top: 0px;
    right: 0px;
    bottom: 0px;
}
.search .area {
    display: inline-block;
    height: 45px;
    line-height: 45px;
    width: 60px;
    padding-left: 15px;
    font-size: 14px;
}
.date-search .mint-searchbar{
    background-color: #ffffff;
}
.date .mint-searchbar-inner,.date .mint-searchbar-core {
    background-color: #eee;
}
.date .mint-navbar .mint-tab-item.is-selected {
    color: #5871f5;
    border-bottom: 3px solid #5871f5;
}
.date .mint-navbar .mint-tab-item {
    padding: 14px 0;
}
.date .list {
    position: absolute;
    top: calc(55.55vw + 95px);
    right: 0;
    left: 0;
    bottom: 0;
    
    overflow: scroll;
}
.date .list-item {
    height: 120px;
    width: 100%;
}
.date .list-item-in {
    height: 100%;
    border-bottom: 1px solid #e1e1e1;
    margin: 0 15px;
    position: relative;
}
.list-item-in .img {
    position: absolute;
    top: 20px;
    left: 0px;
    height: 80px;
    width: 80px;
}
.list-item-in .item-content {
    position: absolute;

}

</style>
