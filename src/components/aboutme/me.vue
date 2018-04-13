<template>
    <div class="me_warp">
        <div class="head">
            <div class="head_inner">
                <div class="my_photo">
                    <img src="/static/images/dehua.png" />
                </div>
                <div class="my_txt">
                    <span>Edon</span>
                    <span>在职 - 考虑机会</span>
                </div>
                <div class="my_edit">
                    <span>编辑简历</span>
                    <span>完善度100%</span>
                    <span class="icon iconfont icon-more do_edit"></span>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="handle_inner">
   				<ul>
   					<li>
   						<span>1</span>
   						<span>沟通过</span>
   					</li>
   					<li>
   						<span>0</span>
   						<span>已投递</span>
   					</li>
   					<li>
   						<span>0</span>
   						<span>待面试</span>
   					</li>
   				</ul>
            </div>
            <div class="tool_inner">
                <ul>
                    <li>
                        <span class="icon iconfont icon-xiaolian"></span>
                        <span>小秘书</span>
                    </li>
                    <li>
                        <span class="icon iconfont icon-xiangqing"></span>
                        <span>上传简历</span>
                    </li>
                    <li>
                        <span class="icon iconfont icon-jiudian"></span>
                        <span>关注公司</span>
                    </li>
                    <li>
                        <span class="icon iconfont icon-saoyisao"></span>
                        <span>登录网页版</span>
                    </li>
                    <li>
                        <span class="icon iconfont icon-shangwu"></span>
                        <span>我的道具</span>
                    </li>
                    <li>
                        <span class="icon iconfont icon-dianpu"></span>
                        <span>道具商城</span>
                    </li>
                    <li>
                        <span class="icon iconfont icon-xihuan"></span>
                        <span>感兴趣职位</span>
                    </li>
                    <li>
                        <span class="icon iconfont icon-feiyongbaohan"></span>
                        <span>钱包</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="foot">
            <ul>
                <li>
                    <a href="javascript:;" class="icon-"><i class="iconfont icon-tongzhi icon"></i>通知<span class="icon iconfont icon-more left_icon"></span></a>
                </li>
                <li>
                    <a href="javascript:;" class="icon-"><i class="iconfont icon-yinsi icon"></i>私密设置<span class="icon iconfont icon-more left_icon"></span></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.me_warp {
  background: #ffffff;
  height: 100%;
  overflow: hidden;
  .head {
    height: 80px;
    padding: 20px 10px;
    background: #53cac3;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    color: #ffffff;
    .my_photo {
      width: 30%;
      height: 80px;
      float: left;
      img {
        height: 100%;
        border-radius: 50%;
      }
    }
    .my_txt {
      width: 30%;
      height: 60px;
      float: left;
      padding-top: 20px;
      span {
        text-align: left;
        display: block;
        + span {
          font-size: 12px;
        }
      }
    }
    .my_edit {
      width: 40%;
      height: 60px;
      float: right;
      font-size: 14px;
      padding-top: 20px;
      text-align: right;
      position: relative;
      span {
        display: block;
        padding-right: 30px;
      }
      .do_edit {
        position: absolute;
        right: -18px;
        top: 30px;
        font-weight: bold;
      }
    }
  }
  .main {
    .handle_inner {
      ul {
        height: 75px;
        li {
          width: 33.33%;
          height: 45px;
          padding: 15px 0 15px;
          float: left;
          span {
            display: block;
            font-weight: bold;
            height: 20px;
            line-height: 20px;
            + span {
              color: #b3b3b3;
              height: 20px;
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }
    .tool_inner {
      height: 180px;
      ul {
        border-top: 1px solid #e5e5e5;
        li {
          height: 90px;
          box-sizing: border-box;
          padding-top: 18px;
          width: 25%;
          float: left;
          border-bottom: 1px solid #e5e5e5;
          border-right: 1px solid #e5e5e5;
          span {
            display: block;
            font-size: 12px;
          }
          .icon::before {
            font-size: 28px;
          }
        }
        li:nth-child(4n + 0) {
          border-right: none;
        }
      }
    }
  }
  .foot {
    a {
      color: #333;
      display: block;
      position: relative;
    }
    ul {
      li {
        padding: 10px 20px;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #f4f4f4;
        font-size: 18px;
        text-align: left;
      }
      .icon {
        font-style: normal;
        font-size: 18px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 5px;
      }
      .left_icon{
          position: absolute;
          right:0px;
          top:-5px;
      }
    }
  }
}
</style>