<template>
<div class="deal">
    
    <mt-header fixed class="header" title="协议须知">
        <mt-button icon="back" slot="left" @click="goBack"></mt-button>
    </mt-header>

    <div class="content-in">
        <div class="content">
            <h3 style="text-align: center;font-size: 16px;margin: 0px;padding-top: 15px;">{{deal.title}}</h3>

            <div style="height: auto;font-size:14px;" v-for="item in deal.content" :key="item.index">
                <h4>{{item.title}}</h4>
                <div style="height: auto;">
                    {{item.content}}
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
            deal: {
                title: '预约挂号须知',
                content: [
                    {
                        title: '一.预约周期',
                        content: 'sdasd湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔',
                    },
                    {
                        title: '二.预约实名制',
                        content: '湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔',
                    },
                    {
                        title: '三.预约实名制',
                        content: '湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔湿哒哒所啊大啊委屈翁切切阿萨我而安慰安慰安慰安慰艾尔',
                    }
                ]

            }
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
.deal {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
}
.deal .header {
    background-color: #5871f5;
}
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #ffffff;
  overflow: auto;
  z-index: 9;
  padding-bottom: 15px;
}
.content {
    margin: 0px 15px;
    height: 100%;
    overflow-y: auto;
}

</style>
