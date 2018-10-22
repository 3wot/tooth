<template>
<div class="linkList">
    
    <mt-header fixed class="header" title="添加联系人">
        <mt-button icon="back" slot="left" @click="goBack"></mt-button>
    </mt-header>

    <div class="content-in">
        <mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
        <mt-field label="电话" placeholder="请输入电话" type="email" v-model="phone"></mt-field>
        <mt-button @click.native="add" style="margin-top:1rem;" size="large" type="primary">确定</mt-button>
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
            name: '',
            phone: '',
        }
    },
    mounted() {

    },
    methods:{

        add() {
            let url = URLS.getURL('add');
            const token = this.userInfo.token
            if (token) {
                url = url + '?token=' + token;
                const { name, phone } = this
                const data = {
                    name,
                    phone,
                    type:'2',
                    token,
                }
                $.post(url, data, resStr => {
                    const res = JSON.parse(resStr)
                    if(!res.status) {
                        this.$router.push({name:'list'});
                    } else {
                        Toast({
                            message: res.message,
                            position: 'bottom',
                            duration: 3000
                        });
                    }
                })
            } else {
                Toast({
                    message: 'token null',
                    position: 'bottom',
                    duration: 3000
                });
            }

        },

        goBack() {
            this.$router.go(-1)
        },

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
