<template>
    <div class="home">
        <nuxt-link to="/login">
            <button class="button1">toLogin</button>
        </nuxt-link>
        <nuxt-link to="/">
            <button class="button2">toLoading</button>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    data () {
        return {

        };
    },
};
</script>

<style lang="less">
.home {
  button {
    width: 200px;
    height: 80px;
    position: absolute;
    left: calc(50% - 100px);
    z-index: 1000;
    padding: 10px 45px;
    border: none;
    background: #00b4ff;
    color: #fff;
    font-size: 24px;
    &.button1 {
      top: 70%;
    }
    &.button2 {
      top: 60%;
    }
  }
}
</style>

