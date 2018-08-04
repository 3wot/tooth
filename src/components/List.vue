<template>
<div class="linkList">
    
    <mt-header fixed class="header" title="常用联系人">
        <mt-button icon="back" slot="left" @click="goBack"></mt-button>
    </mt-header>

    <div class="content-in">
        <div class="img-item" v-for="item in linkList" :key="item.index">
            <div class="name">姓名：{{item.name}}</div>
            <div class="tel">电话：{{item.phone}}</div>
        </div>
        
        <div class="img-item">
            <div class="name" style="text-align: center;">
                + 添加联系人
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
    name: 'linkListivity',
    data () {
        return {
            linkList: [
            {
                id: 1,
                name: "患者A",
                phone: "13456789076",
                type: 1,
                type_name: "不常用"
            },
            {
                id: 1,
                name: "患者B",
                phone: "13456789076",
                type: 1,
                type_name: "不常用"
            },
            {
                id: 1,
                name: "患者C",
                phone: "13456789076",
                type: 1,
                type_name: "不常用"
            },
            ]
        }
    },
    mounted() {
        // this.init()
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
            const url = URLS.getURL('linkListironment');
            const data = {
                curr_page: 1,
                dentist_id: id,
            }
            this.linkList = []
            $.get(url, data, res => {
                if(!res.status) {
                    this.linkList = res.data.list
                } else {
                    Toast({
                        message: res.message,
                        position: 'bottom',
                        duration: 3000
                    });
                }
            })
        },
        goBack() {
            this.$router.go(-1)
        },
        goToIndex() {
            this.$router.push({name:'index'});
        }
    }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.linkList {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
}
.linkList .header {
    background-color: #5871f5;
}
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #DDD;
  overflow: auto;
  z-index: 9;
  padding-bottom: 15px;
}
.img-item {
    float: left;
    width: 100%;
    margin: 0px;
    position: relative;
    margin-bottom: 10px;
}
.name,.tel {
    height: 30px;
    line-height: 30px;
    text-indent: 15px;
    background-color: #fff;
    border-bottom: 1px solid #dddddd;
} 

</style>
