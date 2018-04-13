<template>
  <div class="footer">
    <div class="navbar flex_parent">
      <router-link class="flex_child" to="/"><span class="icon iconfont icon-xiangqing"></span><span>职位</span></router-link>
      <router-link class="flex_child" to="/company"><span class="icon iconfont icon-jiudian"></span><span>公司</span></router-link>
      <router-link class="flex_child" to="/message"><span class="icon iconfont icon-pinglun"></span><span>消息</span></router-link>
      <router-link class="flex_child" to="/aboutme"><span class="icon iconfont icon-wode"></span><span>我的</span></router-link>
    </div>
  </div>
</template>

<style lang="scss">
  @import url("http://at.alicdn.com/t/font_606336_ifgporc2l8up7gb9.css");
  @import "../../style/base.scss";
  .footer{
    height: 50px;
    width:100%;
    background-color: #ffffff;
    display: flex;
    color: #fff;
    justify-content: space-around;
    align-items: center;
    z-index: 99;
    .navbar{
      width:100%;
      height: 100%;
      border-top:1px solid #dddddd;
      a{
        text-decoration: none;
        color: #808080;
        padding:0.2rem 0;
      }
      a.router-link-exact-active{
        color:#53cac3;
      }
      span{
        text-align: center;
        width:100%;
        display: block;
        font-size: 0.8rem;
      }
      .icon::before{
        font-size: 24px;
      }
    }
  }
</style>
