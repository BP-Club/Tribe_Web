
<template>
  <div>
    <h1>test</h1>
    <!-- <div class="homepage-wrap"> -->
    <div class="swiperTop">
      <Swiper height="120px" :auto="true" :loop="true" :list="imglist" />
    </div>

    <!-- <iframe frameborder="0" sandbox="allow-scripts allow-forms" src="https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls"></iframe> -->

    <div class="search flex-bt">
      <!-- <img src="@/assets/img/homepage/search@2x.png" alt /> -->
      <input @keyup.enter="routerToSearch" placeholder="请输入内容" v-model="searchText" type="text" name id />
    </div>

    <div class="hr"></div>
    <div class="create">
      <div class="containertitle border-bottom-1px">
        <h2>快速创建</h2>
      </div>
      <div class="top30-padding createlist flex-ar">
        <div class="linkbtn flex-ar" @click="toCaseEditor(1)">
          <!-- <img src="@/assets/img/homepage/support@2x.png" alt /> -->
          <p>技术支持</p>
        </div>

        <div class="line"></div>

        <div class="linkbtn flex-ar" @click="toCaseEditor(0)">
          <!-- <img src="@/assets/img/homepage/fankui@2x.png" alt /> -->
          <p>信息反馈</p>
        </div>
      </div>
    </div>

    <div class="hr"></div>
    <div class="message">
      <router-link tag="div" :to="{path:'/messageNotice'}">
        <div class="containertitle border-bottom-1px flex-bt">
          <h2>消息通知<span class="messageNum">({{rowCount}})</span></h2>
          <div>
            <!-- <img src="@/assets/img/homepage/more.png" alt /> -->
          </div>
        </div>
      </router-link>
      <div class="top30-padding">
        <div @click="routeCaseDatail(v)" v-for="(v,i) in messagelist" :key="i" class="common-cell flex-bt">
          <p>{{v.title}}</p>
          <span>{{v.createDate}}</span>
        </div>
      </div>
    </div>
    <div class="hr"></div>
    <div class="function">
      <div class="containertitle border-bottom-1px flex-bt">
        <h2>功能清单</h2>
      </div>
      <div class="top30-padding functionlist flex-bt">
        <div v-for="(v,i) in functionlist" :key="i" @click="menuClick(v)">
          <!-- <img :src="v.img" alt />
          <p>{{v.name}}</p> -->
        </div>
      </div>
    </div>
    <div class="hr"></div>
    <div class="maintenance">
      <router-link :to="{path:'/documentList',query:{manualType:'tips'}}">
        <div class="containertitle border-bottom-1px flex-bt">
          <h2>维修快讯</h2>
          <div>
            <!-- <img src="../../assets/img/homepage/more.png" alt /> -->
          </div>
        </div>
      </router-link>
      <div class="maintenancecontent top10-padding">
        <div @click="routeRepairDatail(v)" class="common-cell flex-bt border-bottom-1px" v-for="(v,i) in maintenancelist" :key="i">
          <!-- <p :class="{showimg:v.isNew}">
            {{v.title}}
            <img v-if="v.isNew === 'true'" src="../../assets/img/homepage/NEW-@2x.png" alt />
          </p> -->
          <span>{{v.createTime}}</span>
        </div>
      </div>
    </div>
    <call-list v-model="callShow"></call-list>
  </div>
</template>

<script>
// import { Swiper } from "vux";
// import { mapGetters, mapState } from "vuex";
// import authenticateService from "@/service/authenticateService";
// import CallList from "./callpage"
export default {
  name: "HomePage",
  components: {
    // Swiper
    // CallList
  },
  data() {
    return {
      callShow: false,  //拨打电话列表
      searchText: '',//搜索内容
      // 图片轮播列表
      // imglist: [
      //   {
      //     url: "javascript",
      //     img: require("@/assets/img/banner/banner1.png")
      //   },
      //   {
      //     url: "javascript",
      //     img: require("@/assets/img/banner/banner2.png")
      //   },
      //   {
      //     url: "javascript",
      //     img: require("@/assets/img/banner/banner3.png")
      //   },
      //   {
      //     url: "javascript",
      //     img: require("@/assets/img/banner/banner4.png")
      //   }
      // ],
      // functionlist: [
      //   {
      //     img: require("@/assets/img/homepage/anli.png"),
      //     name: "我的案例",
      //     link: "/caseList"
      //   },
      //   {
      //     img: require("@/assets/img/homepage/ziliao.png"),
      //     name: "技术资料",
      //     link: "/document"
      //   },
      //   {
      //     img: require("@/assets/img/homepage/zhineng.png"),
      //     name: "辅助诊断",
      //     link: "/searchLable"

      //   },
      //   {
      //     img: require("@/assets/img/homepage/lianxi.png"),
      //     name: "联系我们"
      //   }
      // ]
    };
  },
  methods: {
    menuClick(item) {
      if (item.link) {
        this.$router.push({
          path: item.link
        });
      } else {
        this.callShow = true;

      }
    },
    routerToSearch() {
      // if (process.env.NODE_ENV == "production") {
      //   return;
      // }
      if (this.searchText.length == 0) {
        this.$vux.toast.show({
          text: "查询条件不能为空",
          type: "text"
        });
        return;
      }
      this.$router.push({
        name: "textSearch",
        path: "/textSearch",
        params: {
          searchText: this.searchText
        }
      });
    },
    toCaseEditor(type) {
      this.$router.push({
        name: "caseEditor",
        path: "/caseEditor",
        params: {
          technologySupport: type ? "true" : "false"
        }
      });
    },
    routeCaseDatail(item) {

      if (item.ownerId == "-1" && item.manageUserId == "-1" && item.code == 4) {
        this.$router.push({
          name: "caseDatailHasEvent",
          path: "/caseDatailHasEvent",
          params: {
            caseId: item.busenessId
          }
        });
      } else {
        if (item.code == 1) {
          this.$router.push({
            name: "caseEditor",
            path: "/caseEditor",
            params: {
              caseId: item.busenessId
            }
            // technologySupport == "true"
          });
        } else {
          this.$router.push({
            name: "caseDatail",
            path: "/caseDatail",
            params: {
              caseId: item.busenessId,
              status: item.code
            }
          });
        }
      }
    },
    routeRepairDatail(item) {
      this.$router.push({
        path: "/repairDatail",
        name: "repairDatail",
        params: {
          id: item.tipsId,
        }
      });
    }
  },
  computed: {
    ...mapGetters("homePageModule", {
      messagelist: "noticeMsglist",
      maintenancelist: "maintenancelist",
      rowCount: "rowCount",
    }),
    ...mapGetters("mainModule", {
      isLogin: "isLogin",
      showAuxiliaryDiagnosis: "showAuxiliaryDiagnosis"
    })
  },
  activated() {
    if (this.isLogin) {
      this.$store.dispatch("homePageModule/getLists");
    }

  },

  mounted() {
    // if (!this.isLogin) {
    //   authenticateService.authenticateAccount(this, res => {
    //     if (res.status == 1) {
    //       this.$store.dispatch("homePageModule/getLists");
    //       this.$store.dispatch("brandDicsModule/querySeriesList");
    //       this.$store.dispatch("faultDicsModule/queryLableDictsData");

    //       if (!this.showAuxiliaryDiagnosis) {
    //         this.functionlist = this.functionlist.filter(item => item.name != "辅助诊断")
    //       }
    //     }
    //   });
    // }
  }
};
</script>

<style  lang="scss" scoped>
.homepage-wrap {
  // position: absolute;
  height: 100%;
  width: 100%;
  // top: 0;
  // left: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
// .swiperTop {
//   height: 240px;
// }
.search {
  margin: 30px 48px;
  height: 72px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  border: 2px solid rgba(216, 220, 224, 1);
}

.search img {
  margin: 28px;
  width: 44px;
  height: 44px;
}

.search input {
  line-height: 1.5;
  width: 100%;
}

// .containertitle {
//   // padding: 0 $alignPadding;
// }
.containertitle img {
  width: 16px;
}

.containertitle h2 {
  padding: 30px 0;
  // font-size: $font16;
  font-weight: 400;
}
.create .line {
  width: 2px;
  height: 50px;
  background: #dedede;
}

.createlist img {
  width: 46px;
  margin-right: 36px;
}
.createlist .linkbtn p {
  font-size: 32px;
  font-weight: 400;
  color: rgba(23, 24, 32, 1);
}

.hr {
  width: 100%;
  height: 20px;
  background: rgba(242, 245, 247, 1);
}

// .top30-padding {
//   padding: 30px $alignPadding;
// }
// .top10-padding {
//   padding: 10px $alignPadding;
// }

.common-cell {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.common-cell p {
  // font-size: $font14;
  max-width: 68%;
  font-weight: 400;
  color: rgba(43, 44, 51, 1);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
  line-height: 1.5;
}
.common-cell span {
  width: 32%;
  text-align: right;
  // font-size: $font12;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.maintenancelist:last-child::after {
  border: none;
}
.showimg {
  padding-right: 60px;
}
.common-cell img {
  position: absolute;
  right: 6px;
  top: 50%;
  width: 48px;
  height: 24px;
  transform: translate(0, -50%);
}

.functionlist div {
  text-align: center;
}
.functionlist img {
  width: 60px;
  margin-bottom: 18px;
}
.functionlist p {
  // font-size: $font12;
  font-weight: 400;
  color: rgba(23, 24, 32, 1);
}
.messageNum {
  padding-left: 10px;
  // color: $btnBlueBorder;
}
</style>

