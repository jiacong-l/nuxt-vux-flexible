<template>
    <div class="container">
        <XHeader :title="title"
                 :left-options="topBar"></XHeader>
        <nuxt-child />
    </div>
</template>

<script>
import { XHeader } from "vux";
export default {
    // middleware: "",
    data () {
        return {
            title: "nuxt+vux",
            topBar: {
                showBack: false
            }
        };
    },
    components: {
        XHeader,
    },
    methods: {

    }
};
</script>

<style lang="less">
.container {
  .vux-header {
    padding: 0;
    height: 80px;
  }
  .vux-header .vux-header-title {
    line-height: 80px;
    height: 80px;
  }
  .vux-header .vux-header-title > span {
    font-size: 35px;
  }
}
</style>

