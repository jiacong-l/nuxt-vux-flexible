<template>
    <div class="index">
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
    // middleware: "",
    data () {
        return {
            title: 'loading页',
            topBar: {
                showBack: false
            }
        };
    },
    layout: 'entrance',
    components: {
        XHeader,
    },
};
</script>

<style lang="less">
.index {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  object-fit: cover;
  font-size: 0px;
  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
}
</style>
