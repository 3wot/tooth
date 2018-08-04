<template>

    <div class="date">

        <mt-header fixed class="header" title="福利平台">
            
            <mt-button icon="back" slot="left" @click="goBack"></mt-button>
            
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
                <!-- <div class="area">
                    区域
                </div> -->
                <div class="search-content">
                    <mt-search
                        class="date-search"
                        v-model="searchText"
                        cancel-text=""
                        placeholder="请输入诊所名称"
                        >
                    </mt-search>
                </div>
            </div>
            
            <div class="bar">
                <mt-navbar v-model="selected">
                    <mt-tab-item v-for="item in selectArr" :key="item.index" :id="item">
                        <span class="font-14" @click="getContent(item)">{{item}}</span>
                    </mt-tab-item>
                </mt-navbar>
            </div>

            <div class="list">
                <div class="list-item" v-for="item in itemArr" :key="item.index">
                    <!-- <router-link :to="{ name: 'clinicdetail', params: { id: item.id }}"> -->
                        <div class="list-item-in" @click="goToDetail(item.id)">
                            <img :src="item.img" class="img" alt="">
                            <div class="item-content">
                                <p class="content-name">{{item.name}}</p>
                                <p class="content-address">{{item.address}}</p>
                                <p class="content-rank">{{item.rank}}</p>
                                <p class="content-other">治疗项目：幼儿口腔、美白</p>
                                <div class="content-btn">
                                    <mt-button class="j-btn" size="small" @click.stop="goToBook(item.id)">立即预约</mt-button>
                                </div>
                            </div>
                        </div>
                    <!-- </router-link> -->
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
import URLS from '../router/link'
import $ from 'jquery'
import { Toast } from 'mint-ui'

export default {
    components:{
    
    },
    name: 'Date',
    mounted() {
    	// 初始化推荐
    	// this.getRecommend()
    },
    data () {
        return {
            topImg: [{img:'../../static/date1.png'},{img:'../../static/date1.png'},{img:'../../static/date1.png'}],
            searchText: '',
            selectArr: ['按区域','按推荐'],
            selected: '按推荐',
            itemArr: [{
				id: 1,
                img: '../../static/item1.png',
                name: 'AAA',
                distance: 3,
                address: 'XXXXXXXXXX',
                rank: 2,
            },{
            	id: 2,
                img: '../../static/item1.png',
                name: 'BBB',
                distance: 3,
                address: 'XXXXXXXXXX',
                rank: 2,
            },{
            	id: 3,
                img: '../../static/item1.png',
                name: 'CCC',
                distance: 10.8,
                address: 'XXXXXXXXXX',
                rank: 2,
            }
            ]
        }
    },
    methods:{
        // 搜索
        changeText(n) {
            const that = this
            const url = URLS.getURL('getByName');
            const data = {
                name: n + '',
                area_id: 1,
                curr_page: 1,
            }
            that.itemArr = []
            $.get(url, data, res => {
                console.log(res)
                if(!res.status) {
                    const dd = res.data
                    that.itemArr = dd
                } else {
                    Toast({
                        message: res.message,
                        position: 'bottom',
                        duration: 3000
                    });
                }
            })

        },
        // 推荐
        getRecommend() {
            const that = this
            const url = URLS.getURL('recommend');
            const data = {
                area_id: 1,
                curr_page: 1,
            }
            that.itemArr = []
            $.get(url, data, res => {
                console.log(res)
                if(!res.status) {
                    const dd = res.data
                    that.itemArr = dd
                } else {
                    Toast({
                        message: res.message,
                        position: 'bottom',
                        duration: 3000
                    });
                }
            })
        },
        getDistance() {
            const that = this
            const url = URLS.getURL('distance');
            const data = {
                area_id: 1,
                curr_page: 1,
            }
            that.itemArr = []
            $.get(url, data, res => {
                console.log(res)
                if(!res.status) {
                    const dd = res.data
                    that.itemArr = dd
                } else {
                    Toast({
                        message: res.message,
                        position: 'bottom',
                        duration: 3000
                    });
                }
            })
        },
        getContent(t) {
            const temp = t
            if (temp == '按区域') {
                this.getDistance()
            } else {
                this.getRecommend()
            }
        },
        goToDetail(id) {
        	if(id) {
        		this.$router.push({name:'clinicdetail', params: { id }});
        	}
        },
        goToBook(id) {
            if(id) {
                this.$router.push({name:'book', params: { id }});
            }
        },
        goBack() {
        	this.$router.go(-1)
        }

    },
    watch:{
        searchText:function(n,o){
            if(n){
                this.changeText(n)
            }
        }
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
    left: 10px;
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
    top: 20px;
    right: 0px;
    bottom: 20px;
    left: 90px;

}
.list-item-in .item-content .content-name {
    font-size: 14px;
    font-weight: bold;
    color: #333333;
    line-height: 20px;
}
.list-item-in .item-content .content-address {
    font-size: 12px;
    color: #666666;
    line-height: 20px;
}
.list-item-in .item-content .content-rank {
    font-size: 12px;
    color: #999999;
    line-height: 20px;
}
.list-item-in .item-content .content-other {
    font-size: 12px;
    color: #999999;
    line-height: 20px;
}
.list-item-in .item-content .content-btn {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 80px;
    height: 30px;
}
.font-14 {
    font-size: 14px;
}
.font-13 {
    font-size: 13px;
}
.bold {
    font-weight: bold;
}
p {
    margin: 0px;
}
.j-btn {
    background-color: #5871f5;
    color: #ffffff;
    border-radius: 30px;
}
</style>
