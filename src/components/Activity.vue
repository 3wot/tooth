<template>
<div class="act">
    
    <mt-header fixed class="header" title="活动">
        
    </mt-header>

    <div class="content-in">
        <div class="img-item" v-for="item in act" :key="item.index">
            <img :src="item.pic">
            <p class="img-title">{{item.title}}</p>
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
    name: 'Activity',
    data () {
        return {
            act: [
            {
                id: 1,
                title: '洗牙大优惠',
                pic: "../../static/date1.png"
            },
            {
                id: 2,
                title: '洗牙大优惠',
                pic: "../../static/date1.png"
            },
            {
                id: 3,
                title: '洗牙大优惠',
                pic: "../../static/date1.png"
            },
            {
                id: 4,
                title: '洗牙大优惠',
                pic: "../../static/date1.png"
            }
            ]
        }
    },
    mounted() {
        this.init()
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
            const url = URLS.getURL('activity');
            const data = {
                
            }
            this.act = []
            $.get(url, data, resStr => {
                const res = JSON.parse(resStr)
                if(!res.status) {
                    this.act = res.data.list
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
.act {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
}
.act .header {
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
  overflow: auto;
  z-index: 9;
  padding-bottom: 15px;
}
.img-item {
    float: left;
    width: calc(100vw - 30px);
    height: calc(56.25vw - 17px);
    margin: 15px 15px 0px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.img-item img {
    width: 100%;
    height: 100%;
}
.img-title {
    position: absolute;
    font-size: 14px;
    color: #ffffff;
    bottom: 10px;
    left: 10px;
}

</style>
