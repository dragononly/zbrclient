<template>
  <div class="home">
    <top msg="false" style="position: relative; z-index: 3" />
    <div class="hidden-xs-only" style="position: relative; z-index: 1">
      <div
        style="
          height: 350px;
          font-size: 15px;
          color: #fff;
          background: url('../../assets/all/banner.jpeg');
        "
      >
        <div
          style="
            line-height: 350px;
            color: #fff;
            font-size: 40px;
            padding-top: 120px;
          "
        >
          News &nbsp; - &nbsp;新闻
        </div>
      </div>

      <div
        style="
          z-index: 3;
          left: 0;
          right: 0;
          margin: auto;
          top: 450px;
          background: #fff;
          width: 80%;
        "
      >
        <div style="text-align: left; padding: 40px">
          <el-row :gutter="30">
            <el-col :md="16">
              <div style="font-size: 25px; color: #414041">
                {{ cabdata.news }}
              </div>
              <div
                style="
                  border-bottom: 1px solid #bcbec2;
                  text-align: right;
                  font-size: 12px;
                  color: #bcbec2;
                  padding: 3px 0;
                "
              >
                {{ cabdata.date }}
              </div>
              <div
                style="
                  font-size: 14px;
                  letter-spacing: 1px;
                  text-align: left;
                  color: #4d4c4c;
                "
              >
                <div v-html="cabdata.newscontent"></div>
              </div>
            </el-col>
            <el-col
              :md="8"
              style="padding: 20px; padding-top: 0; font-size: 12px"
            >
              <div
                style="
                  background: #333334;
                  padding: 20px;
                  color: #fff;
                  font-size: 20px;
                  font-weight: bold;
                "
              >
                近期新闻
              </div>
              <div style="padding: 30px; background: #f0f0f1">
                <div v-for="(a, b) in arr" :key="b">
                  <div style="color: #c0c1c3; font-size: 12px">
                    {{ a.date.split('T')[0] }}
                  </div>
                  <router-link
                    @click.native="searchGainNews()"
                    :to="'m1?' + a._id"
                  >
                    <div
                      style="
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 14px;
                        border-bottom: 1px solid #c0c1c3;
                        padding: 10px 0;
                      "
                    >
                      {{ a.news }}
                    </div>
                  </router-link>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="hidden-md-and-up" style="position: relative; z-index: 1">
      <div
        style="
          height: 120px;
          font-size: 15px;
          color: #fff;
          background: url('../../assets/all/banner.jpeg');
        "
      >
        <div style="line-height: 120px; color: #fff; font-size: 24px">
          News &nbsp; - &nbsp;新闻
        </div>
      </div>

      <div
        style="
          z-index: 3;
          left: 0;
          right: 0;
          margin: auto;
          top: 450px;
          background: #fff;
          width: 100%;
        "
      >
        <div style="padding: 10px">
          <el-row>
            <el-col :xs="24">
              <div style="font-size: 17px; color: #414041">
                {{ cabdata.news }}
              </div>
              <div style="ont-size: 12px; color: #bcbec2; padding: 3px 0">
                {{ cabdata.date }}
              </div>
              <div style="font-size: 14px; letter-spacing: 1px; color: #4d4c4c">
                <div v-html="cabdata.newscontent"></div>
              </div>
            </el-col>
            <el-col
              :xs="24"
              style="
                padding: 20px;
                padding-top: 0;
                font-size: 12px;
                text-align: left;
              "
            >
              <div
                style="
                  background: #333334;
                  padding: 20px;
                  color: #fff;
                  font-size: 20px;
                  font-weight: bold;
                "
              >
                近期新闻
              </div>
              <div style="padding: 30px; background: #f0f0f1">
                <div v-for="(a, b) in arr" :key="b">
                  <router-link
                    @click.native="searchGainNews()"
                    :to="'m2?' + a._id"
                  >
                    <div
                      style="
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 14px;
                        padding: 10px 0px 0px 0px;
                      "
                    >
                      {{ a.news }}
                    </div>
                  </router-link>
                  <div
                    style="
                      color: #c0c1c3;
                      font-size: 12px;
                      border-bottom: 1px solid #c0c1c3;
                      padding-left: 5px;
                    "
                  >
                    {{ a.date.split('T')[0] }}
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <foot msg="o" />
  </div>
</template>

<script>
// @ is an alias to /src
import top from '@/components/top.vue';
import foot from '@/components/foot.vue';
import axios from 'axios';
import moment from 'moment';
import $ from 'jquery';
export default {
  name: 'home',
  components: {
    top,
    foot,
  },
  data() {
    return {
      cabdata: '',
      arr: '',
      x: '',
    };
  },
  mounted() {
    //获取内容
    this.searchGainNews();
    //右边的新闻
    this.getnews();
    //------------------------------------结束线---------------------------------------------
  },
  // watch:{
  // 	x(a,oa){
  // 		this.searchGainNews()
  // 	}
  // },
  methods: {
    getnews() {
      let self = this;
      axios
        .get(self.src + '/build/getnews')
        .then(function (res) {
          self.arr = res.data;
        })
        .catch(function (error) {
          alert(error);
        });
    },

    searchGainNews() {
      let self = this;
      self.x = Object.keys(this.$route.query)[0];

      axios
        .get(self.src + `/build/showsearch2?id=${self.x}`)
        .then(function (res) {
          self.cabdata = res.data;
          moment.locale('zh-cn');
          self.cabdata.date = moment(self.cabdata.date).format('LL');
          //所有图片居中
          $(function () {
            let el = $('.home img').parent().css('text-align', 'center');
            $('.home img').parent().css('display', 'block');
          });
        })
        .catch(function (error) {
          self.$message('这个名称没有对其，后台管理员检查下');
        });
    },
  },
};
</script>
<style scoped>
.hidden-md-and-up img {
  width: 100% !important;
  height: 50px;
  text-align: left !important;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/deep/ .el-tabs__item {
  width: 200px;
  text-align: left !important;
}

/deep/ .is-active {
  color: #fff;
  background: #d2222a;
}

/deep/ .is-active:hover {
  color: #fff !important;
}

/deep/ .is-left:hover {
  color: #000000;
}
</style>
