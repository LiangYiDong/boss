<template>
    <section class="menus">
        <p class="user">{{userName}}</p>
        <ul class="aside">
            <li v-for="item in menus" :key="item.index"><a href="">{{item.text}}</a></li>
        </ul>
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      //mapState 的作用是把全局的 state 和 getters 映射到当前组件的 computed 计算属性中
      userName: state => state.MenuStore.userName,
      menus: state => state.MenuStore.menus
    })
  },
  beforeCreate: function() {
    console.log(this.$store.state);
    console.log("youmeiyou");
  }
};
</script>

<style lang="scss">
.menus {
  position: absolute;
  top: 0;
  right: 0;
  color: #ffffff;
  width: 120px;
  height: 100%;
  background: #3c3c3d;
  .user {
    height: 60px;
    line-height: 60px;
    display: block;
    background: #000000;
    text-align: center;
    padding: 0 10%;
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
  }
  ul.aside {
    margin: 0;
    padding: 0;
  }
  .aside li {
    margin: 0;
    height: 50px;
    width: 80%;
    padding: 0 10%;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    a {
      height: 100%;
      color: #ffffff;
      line-height: 50px;
      display: inline-block;
      text-decoration: none;
    }
  }
  .aside li:hover {
    background: #3e90e3;
  }
}
</style>

