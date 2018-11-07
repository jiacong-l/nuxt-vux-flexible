<template>
    <div class="login">
        <XHeader :title="title"
                 :left-options="topBar"></XHeader>
        <nuxt-link to="/home">
            <button class="button">toHome</button>
        </nuxt-link>
    </div>
</template>
<script>
import { XHeader } from "vux";
export default {
    data () {
        return {
            title: "登录页",
            topBar: {
                showBack: false
            }
        };
    },
    components: {
        XHeader
    },
    methods: {

    }
};
</script>

<style lang="less">
.button {
  width: 200px;
  height: 80px;
  position: absolute;
  top: 70%;
  left: calc(50% - 100px);
  z-index: 1000;
  padding: 10px 45px;
  border: none;
  background: #00b4ff;
  color: #fff;
  font-size: 24px;
}
</style>



