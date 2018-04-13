<template>
  <div class="company_warp">
      <div class="company_tab">
          <ul class="flex_parent">
              <li class="flex_child" v-for="(tab,index) in tabData" :key="index">
                    <span >{{tab.title}}</span>
                    <span class="icon iconfont icon-down"></span>
              </li>
          </ul>
      </div>
      <div class="company_content">
          <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">   <!-- 使用了 infinite-scroll-->
              <router-link tag="li" to="/" v-for="(item,index) in companys" :key="index">         
    			<div class="con_left">
    				<img :src="item.comp_pic" alt="" />
    			</div>
    			<div class="con_right">
    				<p>{{item.comp_name}}</p>
    				<p>{{item.comp_address}}</p>
    				<p><span>{{item.comp_nature}}</span><span>|</span><span>不需要融资</span><span>|</span><span>{{item.comp_people}}</span></p>
    				<div>热招:<span style="color: #76D5CF;">{{item.hot_pos_name}}</span>等<span>{{item.hot_pos_no}}</span>个职位<span class="icon iconfont icon-more getmore"></span></div>
    			</div>
              </router-link>
          </ul>
            <div v-show="loading" class="page-infinite-loading">
                <mt-spinner type="fading-circle"></mt-spinner>客官您滑慢点...
            </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tabData: [{ title: "融资" }, { title: "规模" }, { title: "行业" }],
      apiUrl: "",
      companys: [],
      temp: [],
      loading: false
    };
  },
  methods: {
    initApiUrl() {
      //本地
      let domain = "http://" + window.location.host + "/";
      var str = "static/data/joblist.json";
      this.apiUrl = domain + str;
    },
    loadData() {
      let _this = this;
      axios
        .get(_this.apiUrl)
        .then(re => {
        //   console.log(re);
          if (re.data.code == "1") {
            _this.companys = re.data.company;
            // console.log(this.companys,"zhli");
            //模拟每次下拉加载的数据
            _this.temp = re.data.company;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadMore() {
      //模拟无限下拉加载
      this.loading = true;
      setTimeout(() => {
        this.companys = this.companys.concat(this.temp);
        this.loading = false;
      }, 2500);
    }
  },
  created: function(){
    this.initApiUrl();
    this.$nextTick(() => {
      //$nextTick()在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
      this.loadData();
    });
  }
};
</script>

<style lang="scss" scoped>
.company_warp{
    position: relative;
}
.company_tab {
 position: fixed;
 width: 100%;
 top: 60px;
 z-index: 9;
  ul {
    height: 36px;
    line-height: 36px;
    background: #ffffff;
    border-bottom: 1px solid #dddddd;
    li {
      color: #808080;
      font-size: 14px;
    }
  }
}
.company_content{
    padding: 37px 3% 3%;
    li{
    padding: 3%;
    background: #ffffff;
    margin-top: 3%;
    height: 130px;
    }
    .con_left{
        width:20%;
        float: left;
        margin-right:5%;
        img{
            width:100%;
            max-width: 100px;
        }
    }
    .con_right{
        width:75%;
        float: left;
        text-align: left;
        p,div{
            color: #8d8d8d;
            font-size: 14px;
            margin-bottom: 10px;
            span{
                padding-right: 3px
            }
        }
        p:first-child{
            font-size: 20px;
            color: #333333;
            font-weight: bold;
        }
        div{
            width:90%;
            padding-top:10px;
            font-size: 12px;
            color: #333333;
            border-top: 1px solid #ccc;
            position: relative;
        }
        .getmore{
            position: absolute;
            bottom:-2px;
            right:-8px;
        }
    }
}
</style>


