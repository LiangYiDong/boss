<template>
  <div class="message_list">
      <div class="message_bar">
          <div class="message_box flex_parent">
              <span class="flex_child" v-for="(nav,index) in messageNav" :key="index" :class="{active:nav.isOn}" @click="toggleOn(nav)">
                  {{nav.title}}
              </span>
          </div>
      </div>
      <div class="message_show">
          <!-- 消息列表 start -->
          <div class="message_list" v-if="messageNav[0].isOn">
              <h4>联系人</h4>
              <div class="chat_list">
                  <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                      <router-link to="/" tag="li" v-for="(item,index) in chatData" :key="index">
                        <div class="chatleft">
                            <img :src="item.chat_img">
                        </div>
                        <div class="chatright pull_right">
                            <p><span class="name">{{item.chat_name}}</span><span class="inforight">{{item.chat_time}}</span></p>
                            <p class="person_job"><span>{{item.chat_title[0]}}</span> | <span>{{item.chat_title[1]}}</span></p>
                            <p>{{item.chat_msg.chat_msg_detial[1]}}</p>
                        </div>   
                      </router-link>
                  </ul>
                    <div v-show="loading" class="page-infinite-loading">
                        <mt-spinner type="fading-circle"></mt-spinner>客官您滑慢点...
                    </div>
              </div>
          </div>
          <!-- 消息列表 end -->
          <!-- 互动列表 start -->
          <div class="info_list" v-if="messageNav[1].isOn">
              <div class="info_tab">
                  <ul class="flex_parent">
                      <li class="flex_child" v-for="(item,index) in infoTab" :key="index" :class="{active:item.isHad}" @click="toggleInfoOn(item,index)">
                          {{item.title}}
                      </li>
                  </ul>
              </div>
              <div class="info_content">
                <div class="info_item" v-for="(item,index) in lists" :key="index" >
                    <div class="inter_img"><img :src="item.comp_pic" alt=""></div>
                    <div class="info_msg">
                        <h3 class="clear">{{item.hot_pos_name}} <span class="inforight">{{item.end_time}}</span></h3>
                        <p>{{item.comp_name}}</p>
                        <p><span><i class="icon iconfont icon-gongwenbao"></i>{{item.seniority}}</span><span><i class="icon iconfont icon-xueli"></i>{{item.education}}</span><span><i class="icon iconfont icon-qian"></i>{{item.job_money}}</span></p>
                    </div>
                </div>
              </div>
          </div>
          <!-- 互动列表 end -->
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "message",
  data() {
    return {
      apiUrl: "",
      chatData: [], //聊天数据
      chatTemp: [], //聊天滚动加载假数据
      infoData: [], //互动数据
      lists: [], //互动展示的数据
      loading: false, //是否显示加载更多
      messageNav: [
        { title: "聊天", isOn: true },
        { title: "互动", isOn: false }
      ],
      infoTab: [
        // 互动切换
        {
          title: "对我感兴趣",
          isHad: true
        },
        {
          title: "看过我",
          isHad: false
        },
        {
          title: "新职位",
          isHad: false
        }
      ]
    };
  },
  methods: {
    toggleOn(nav) {
      //消息和互动的切换
      if (!nav.isOn) {
        this.messageNav.filter(item => {
          item.isOn = false;
        });
      }
      nav.isOn = true;
    },
    toggleInfoOn(tab, index) {
      if (!tab.isHad) {
        this.infoTab.filter(item => {
          item.isHad = false;
        });
        tab.isHad = true;
        this.lists = this.infoData[index];
        // console.log(this.lists);
      }
    },
    initApiUrl() {
      //本地
      let domain = "http://" + window.location.host + "/";
      let str = "/static/data/message.json";
      this.apiUrl = domain + str;
    },
    loadData() {
      let _this = this;
      axios.get(_this.apiUrl).then(re => {
        //   console.log(re);
        if (re.data.code == "1") {
          //消息的数据
          _this.chatData = re.data.data.chat.chat_lists;
          _this.chatTemp = re.data.data.chat.chat_lists;
          //互动的数据
          _this.infoData = re.data.data.interactive;
          _this.lists = _this.infoData[0];
        }
      });
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.chatData = this.chatData.concat(this.chatTemp);
        this.loading = false;
      }, 2500);
    }
  },
  created: function() {
    this.initApiUrl();
    this.loadData();
  }
};
</script>

<style lang="scss" scoped>
.message_list {
  position: relative;
  background: #ffffff;
}
.message_bar {
  height: 40px;
  width: 100%;
  background: #dddddd;
  position: absolute;
  top: 0;
  .message_box {
    width: 160px;
    height: 28px;
    margin: 5px auto;
    border: 1px solid #53cac3;
    border-radius: 5px;
    span {
      line-height: 28px;
    }
    span.active {
      background: #53cac3;
      color: #ffffff;
    }
  }
}
.message_show {
  padding-top: 40px;
  h4 {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #dddddd;
    border-left: 3px solid #42bfee;
    text-align: left;
    padding-left: 10px;
  }
  //聊天样式
  .chat_list {
    padding: 0 3%;
    ul li {
      height: 80px;
      width: 100%;
      border-bottom: 1px solid #e9efef;
      position: relative;
      .chatleft {
        box-sizing: border-box; //需要并排放置两个带边框的框，可通过将 box-sizing 设置为 "border-box"。
        float: left;
        height: 50px;
        width: 50px;
        margin-right: -50px;
        border-radius: 50%;
        overflow: hidden;
        margin-top: 15px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .chatright {
        box-sizing: border-box;
        width: 100%;
        height: 80px;
        padding: 10px 0 10px 65px;
        float: right;
        text-align: left;
        font-size: 14px;
        p {
          color: #cccccc;
        }
        .name {
          color: #333333;
          font-size: 16px;
        }
        .person_job {
          color: #999999;
        }
      }
    }
    ul li:last-child {
      border-bottom: none;
    }
  }
  //互动样式
  .info_list {
    .info_tab {
      height: 36px;
      border-bottom: 1px solid #e9efef;
      li {
        line-height: 36px;
        font-size: 14px;
        color: #cccccc;
      }
      li.active {
        color: #333333;
        position: relative;
      }
      li.active::after {
        content: "";
        width: 50%;
        height: 2px;
        background: #53cac3;
        position: absolute;
        bottom: -1px;
        left: 25%;
      }
    }
    .info_content {
      padding: 0 3%;
      .info_item {
        height: 60px;
        padding: 10px 0;
        border-bottom: 1px solid #e9efef;
        .inter_img {
          width: 50px;
          height: 50px;
          margin-right: -50px;
          padding-top: 5px;
          float: left;
          box-sizing: border-box;
          border-radius: 50%;
          img {
            width: 100%;
          }
        }
        .info_msg {
          width: 100%;
          padding-left: 65px;
          float: right;
          text-align: left;
          box-sizing: border-box;
          font-size: 14px;
          color: #5c5c5c;
          h3 {
            font-weight: normal;
            span {
              font-size: 10px;
            }
          }
          p span {
            padding-right: 5px;
          }
        }
      }
    }
  }
}
</style>

