<template>
  <div id="app">
    <Menu></Menu>
    <div class="page flex_parent flex_v" :class="{'toggel':isClose}">
      <Head></Head>
      <div class="content flex_child">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
      </div>
      <Foot></Foot>
    </div>
    
  </div>
</template>

<script>
import Menu from "@/components/public/Menu";
import Head from "@/components/public/Head";
import Foot from "@/components/public/Foot";

import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Menu,
    Head,
    Foot
  },
  computed: {
    ...mapState({
      isClose: state => state.HeadStore.isClose
    })
  }
};
</script>

<style lang="scss">
@import "style/base.scss";
.page {
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .page {
    transition: all 0.5s;
    .content {
      background: #e9efef;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      z-index: 99;
    }
  }
  .toggel {
    transform: translateX(-120px);
  }
}
</style>
