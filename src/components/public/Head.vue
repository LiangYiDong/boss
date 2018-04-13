<template>
  <header class="head">
    <a href="javascript:void(0)"><img src="../../assets/logo.png"></a>
    <div class="search_btn">
        <i class="icon iconfont icon-sousuo"></i>
    </div>
    <div class="aside" :class="{'closeMenu':isClose}" @click="toggleMenu">
        <div v-for="i in 3" :key="i" class="line"></div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      isClose: state => state.HeadStore.isClose
    })
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch("toggleMenu");
    }
  },
  mounted() {
    console.log(this.isClose);
  }
};
</script>

<style lang="scss" scoped>
@import url("http://at.alicdn.com/t/font_606336_b05f9mkkw66o5hfr.css");
.head {
  height: 60px;
  width: 100%;
  background: #53cac3;
  z-index: 99;
  img {
    height: 20px;
    position: absolute;
    top: 20px;
    left: 10px;
    cursor: pointer;
  }
  .search_btn {
    cursor: pointer;
    color: #ffffff;
    position: absolute;
    top: 15px;
    right: 60px;
    width: 30px;
    height: 30px;
    z-index: 99;
    i::before {
      font-size: 30px;
    }
  }
  .aside {
    height: 60px;
    width: 60px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .line {
      height: 1px;
      width: 25px;
      background: #ffffff;
      transition: all 0.5s;
    }
    .line:nth-of-type(2) {
      margin: 8px 0;
    }
  }
  .closeMenu {
    .line:first-child {
      transform: rotate(45deg);
    }
    .line:nth-child(2) {
      display: none;
    }
    .line:last-child {
      transform: rotate(-45deg);
    }
  }
}
</style>
