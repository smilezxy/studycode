<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
                <img :src="item.img">
            </mt-swipe-item>
            
        </mt-swipe>
        <h3>Home</h3>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data () {
        return {
            lunbotulist:[]
        }
    },
    created () {
      this.getLunbo()  
    },
    methods: {
        getLunbo () {
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(res => {
                //console.log(res.body)
                if(res.body.status == 0) {
                    this.lunbotulist = res.body.message
                }else {
                    Toast('加载轮播图失败')
                }
            })
        }
    }
}
</script>
<style scoped>
.mint-swipe {
    height: 200px;
}
img {
    width:100%;
    height: 100%;
}
</style>