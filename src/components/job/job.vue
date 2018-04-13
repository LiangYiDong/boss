<template>
    <div class="job_warp">
        <!-- 工作筛选 start -->
        <div class="job_nav">
            <ul class="flex_parent">
                <li class="flex_child job_choose" v-for="(v,i) in navList" :key="i">
                    <span >{{v.title}}</span>
                    <span class="icon iconfont icon-down"></span>
                </li>
            </ul>
        </div>
        <!-- 工作筛选 end -->
        <!-- 工作列表 start -->
        <div class="job_content">
            <ul class="job_lists" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">   <!-- 使用了 infinite-scroll-->
                <li v-for="(job,index) in jobs" :key="index">
                    <router-link :to="{ name: 'detail', params: { jobId: job.id }}">   
                        <h4>{{job.need_job}}<span class="inforight">{{job.job_money}}</span></h4>
                        <p class="clear"><span></span>{{job.conmpany}}</p>
                        <p class="clear">
                            <span class="icon iconfont icon-weibiaoti-"></span><span>{{job.con_place}}</span>
                            <span class="icon iconfont icon-gongwenbao"></span><span>{{job.seniority}}</span>
                            <span class="icon iconfont icon-xueli"></span><span>{{job.education}}</span>
                        </p>
                        <p class="clear title">
                            <img :src="job.src" alt="" class="infoleft">
                            <span class="infoleft">{{job.ceo}}</span>
                            <span class="infoleft">{{job.title}}</span>
                        </p>
                    </router-link>
                </li>
            </ul>
            <div v-show="loading" class="page-infinite-loading">
                <mt-spinner type="fading-circle"></mt-spinner>客官您滑慢点...
            </div>
        </div>
        <!-- 工作列表 end -->
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      navList: [
        {
          title: "推荐"
        },
        {
          title: "广州"
        },
        {
          title: "公司"
        },
        {
          title: "要求"
        }
      ],
      apiUrl: "",
      jobs: [],
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
            _this.jobs = re.data.main;

            //模拟每次下拉加载的数据
            _this.temp = re.data.main;
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
        this.jobs = this.jobs.concat(this.temp);
        this.loading = false;
      }, 2500);
    }
  },
  created: function() {
    this.initApiUrl();
    this.$nextTick(() => {
      //$nextTick()在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
      this.loadData();
    });
  }
};
</script>

<style lang="scss" scoped>
.job_warp {
  position: relative;
}
.job_nav {
  height: 36px;
  width: 100%;
  position: fixed;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  background: #ffffff;
  color: #808080;
  z-index: 99;

  li {
    position: relative;
    span {
      line-height: 36px;
    }
    span::before {
      position: absolute;
      top: 1px;
    }
  }
}
.job_content {
  padding: 37px 3% 3%;
  .job_lists li {
    padding: 3%;
    background: #ffffff;
    margin-top: 3%;
    a {
      display: block;
      color: #808080;
      text-align: left;
      h4 {
        font-weight: 200;
        font-size: 18px;
        color: #000000;
        span.inforight {
          color: #e4393c;
          font-size: 16px;
        }
      }
      p {
        margin-top: 0.15rem;
        [class^="icon"],
        [class*=" icon"] {
          margin-right: 0.1rem;
          margin-left: 0.3rem;
        }
        span {
          display: inline-block;
          height: 26px;
          line-height: 26px;
        }
        span::before {
          font-size: 18px;
        }
        span:nth-child(1) {
          margin-left: 0;
        }
      }
      p.title {
        position: relative;
        margin-top: 5px;
        padding-top: 5px;
        height: 26px;
        width: 100%;
        line-height: 26px;
        span {
          color: #53cac3;
          position: relative;
          + span {
            padding-left: 4px;
          }
          + span:before {
            position: absolute;
            display: table;
            content: "";
            width: 1px;
            height: 12px;
            background: #53cac3;
            left: 0;
            top: 6px;
          }
        }
        img {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          float: left;
          padding-right: 15px;
        }
      }
      p.title:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        background: #b7b7b7;
        width: 100%;
        height: 1px;
      }
    }
  }
}
</style>


