<template>
  <div class="home">
    <top
      msg="false"
      @event1="change($event)"
      style="position: relative; z-index: 3"
    />
    <div class="hidden-xs-only">
      <div
        style="
          z-index: 10;
          top: 140px;
          left: 180px;
          width: 200px;
          background: #ececec;
          padding: 9px;
          position: fixed;
          padding-top: 10px;
          padding-bottom: 10px;
        "
      >
        <van-steps
          style="padding-top: 20px; position: relative"
          active-icon="play-circle"
          direction="vertical"
          active-color="#969799"
        >
          <van-step>
            <div
              @click="show1"
              class="hov1"
              style="
                margin-left: -24px;
                background: #fff;
                padding-bottom: 5px;
                box-shadow: 2px 2px 2px silver;
                margin-top: -17px;
                width: 147px;
                padding-left: 15px;
              "
            >
              <span style="margin-top: -10px">仿古铜建筑</span>
              <img
                style="margin-top: -5px; margin-left: 0px"
                width="20px"
                src="../../assets/icon/传统艺术.png"
              />
              <i
                style="font-size: 20px; margin-top: 12px"
                class="el-icon-arrow-down"
              ></i>
              <div
                style="
                  left: -15.6px;
                  top: 24px;
                  border-left: 1px solid #969799;
                  height: 280px;
                  position: absolute;
                  z-index: 3;
                "
              ></div>
            </div>
            <div v-if="show1css">
              <div
                @click="test2(a)"
                v-for="(a, b) in menua1"
                :key="b"
                style="text-indent: -15px"
              >
                <span class="hov1">
                  <van-step>
                    {{ a }}
                  </van-step>
                </span>
              </div>
            </div>
          </van-step>
        </van-steps>
        <van-steps
          style="margin-top: -10px"
          active-icon="play-circle"
          direction="vertical"
          active-color="#969799"
        >
          <van-step>
            <div
              @click="show2"
              class="hov1"
              style="
                margin-left: -24px;
                background: #fff;
                padding-bottom: 5px;
                box-shadow: 2px 2px 2px silver;
                margin-top: -17px;
                width: 147px;
                padding-left: 15px;
              "
            >
              <span style="margin-top: -10px">现代铜建筑</span>
              <img
                style="margin-top: -5px; margin-left: 0px"
                width="20px"
                src="../../assets/icon/现代建筑.png"
              />
              <i
                style="font-size: 20px; margin-top: 12px"
                class="el-icon-arrow-down"
              ></i>
              <div
                style="
                  left: -15.6px;
                  top: 24px;
                  border-left: 1px solid #969799;
                  height: 280px;
                  position: absolute;
                  z-index: 3;
                "
              ></div>
            </div>
            <div v-if="show2css">
              <div
                @click="test2(a)"
                v-for="(a, b) in menua2"
                :key="b"
                style="text-indent: -15px"
              >
                <span class="hov1">
                  <van-step>
                    {{ a }}
                  </van-step>
                </span>
              </div>
            </div>
          </van-step>
        </van-steps>

        <van-steps
          style="margin-top: -10px"
          active-icon="play-circle"
          direction="vertical"
          active-color="#969799"
        >
          <van-step>
            <div
              @click="show3"
              class="hov1"
              style="
                margin-left: -24px;
                background: #fff;
                padding-bottom: 5px;
                box-shadow: 2px 2px 2px silver;
                margin-top: -17px;
                width: 147px;
                padding-left: 15px;
              "
            >
              <span style="margin-top: -10px">大师艺术</span>
              <img
                style="margin-top: -5px; margin-left: 0px"
                width="20px"
                src="../../assets/icon/大师艺术.png"
              />
              <i
                style="font-size: 20px; margin-top: 12px"
                class="el-icon-arrow-down"
              ></i>
              <div
                style="
                  left: -15.6px;
                  top: 24px;
                  border-left: 1px solid #969799;
                  height: 280px;
                  position: absolute;
                  z-index: 3;
                "
              ></div>
            </div>
            <div v-if="show3css">
              <div
                @click="test2(a)"
                v-for="(a, b) in menua3"
                :key="b"
                style="text-indent: -15px"
              >
                <span class="hov1">
                  <van-step>
                    {{ a }}
                  </van-step>
                </span>
              </div>
            </div>
          </van-step>
        </van-steps>

        <van-steps
          style="margin-top: -10px"
          active-icon="play-circle"
          direction="vertical"
          active-color="#969799"
        >
          <van-step>
            <div
              @click="show4"
              class="hov1"
              style="
                overflow: hidden;
                margin-left: -24px;
                background: #fff;
                padding-bottom: 5px;
                box-shadow: 2px 2px 2px silver;
                margin-top: -17px;
                width: 147px;
                padding-left: 15px;
              "
            >
              <span style="margin-top: -10px">产品中心</span>
              <img
                style="margin-top: -5px; margin-left: 0px"
                width="20px"
                src="../../assets/icon/大师艺术.png"
              />
              <i
                style="font-size: 20px; margin-top: 12px"
                class="el-icon-arrow-down"
              ></i>
              <div
                id="height0"
                style="
                  left: -15.6px;
                  top: 24px;
                  border-left: 1px solid #969799;
                  position: absolute;
                  z-index: 3;
                "
              ></div>
            </div>
            <div v-if="show4css" style="text-align: center">
              <div
                @click="test2(a)"
                v-for="(a, b) in menua4"
                :key="b"
                style="text-indent: -15px"
              >
                <span>
                  <van-step class="hov1">
                    {{ a }}
                  </van-step>
                </span>
              </div>
            </div>
          </van-step>
        </van-steps>
      </div>

      <div
        style="
          padding-left: 100px;
          width: 45%;
          position: relative;
          z-index: 1;
          text-align: center;
          letter-spacing: 6px;
          font-family: '隶书';
          margin: auto;
          padding-top: 90px;
          font-size: 15px;
          font-weight: 400;
        "
      >
        <img width="100%" :src="srcarr[0]" alt="" />
      </div>

      <div
        style="width: 45%; margin: auto; margin-top: 80px; padding-left: 100px"
      >
        <el-row>
          <el-col
            :md="24"
            style="
              line-height: 38px;
              text-align: left;
              font-size: 14px;
              text-indent: 30px;
              letter-spacing: 1px;
              padding-right: 90px;
            "
          >
            {{ resdata.content }}
          </el-col>
          <el-col :md="24" style="text-align: left">
            <!-- <img  @click="go(namearr2[1])" width="100%" :src="srcarr[1]" alt=""> -->
            <img width="100%" height="400px" :src="srcarr[1]" alt="" />
          </el-col>
        </el-row>
      </div>

      <div
        style="margin: auto; width: 60%; padding-left: 80px; margin-top: 80px"
      >
        <div
          class="hov1"
          v-for="(a, b) in urlsnow"
          :key="b"
          style="width: 24%; float: left; margin-left: 1%"
        >
          <router-link
            :to="'m1?' + a._id"
            style="display: inline-block; height: 200px"
          >
            <img width="100%" height="150px" :src="a.newsimg" />
            <div
              style="
                overflow: hidden;
                text-overflow: ellipsis;
                display: box;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-size: 10px;
                text-align: left;
                color: #000000;
                padding: 3px;
                padding-left: 0;
              "
            >
              {{ a.news }}
            </div>
          </router-link>
        </div>

        <div style="clear: both">
          <van-button @click="addimg()" color="#636465">了解更多+</van-button>
        </div>
      </div>
      <!-- 联系我们 -->
      <div style="margin-top: 70px">
        <contact />
      </div>
    </div>

    <div class="hidden-md-and-up">
      <div
        style="
          width: 100%;
          position: relative;
          z-index: 1;
          text-align: center;
          letter-spacing: 6px;
          font-family: '隶书';
          margin: auto;
          padding-top: 0px;
          font-size: 15px;
          font-weight: 400;
        "
      >
        <img width="100%" :src="srcarr[0]" alt="" />
      </div>

      <div style="width: 100%; margin: auto">
        <el-row>
          <el-col
            :md="24"
            style="
              line-height: 38px;
              text-align: left;
              font-size: 14px;
              text-indent: 30px;
              letter-spacing: 1px;
              padding-right: 90px;
            "
          >
            {{ resdata.content }}
          </el-col>
          <el-col :md="24" style="text-align: left">
            <!-- <img  @click="go(namearr2[1])" width="100%" :src="srcarr[1]" alt=""> -->
            <img width="100%" :src="srcarr[1]" alt="" />
          </el-col>
        </el-row>
      </div>

      <div style="margin: auto; width: 100%; margin-top: 20px">
        <div
          class="hov1"
          v-for="(a, b) in urlsnow"
          :key="b"
          style="width: 49%; float: left; margin-left: 1%"
        >
          <router-link
            :to="'m1?' + a._id"
            style="display: inline-block; height: 200px"
          >
            <img width="100%" height="150px" :src="a.newsimg" />
            <div
              style="
                font-size: 10px;
                text-align: left;
                color: #000000;
                padding: 3px;
                padding-left: 0;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              {{ a.news }}
            </div>
          </router-link>
        </div>

        <div style="clear: both">
          <van-button @click="addimg()" color="#636465">了解更多+</van-button>
        </div>
      </div>
      <!-- 联系我们 -->
      <div style="margin-top: 70px">
        <contact />
      </div>
    </div>

    <foot msg="o" />
  </div>
</template>

<script>
// @ is an alias to /src
// import DatePicker from 'ant-design-vue/lib/date-picker'; // 加载 JS
// import 'ant-design-vue/lib/date-picker/style/css'; // 加载 CSS
import axios from "axios";
import top from "@/components/top.vue";
import foot from "@/components/foot.vue";
import contact from "@/components/home/contact.vue";
import $ from "jquery";
export default {
  name: "home",
  data() {
    return {
      menua1: [],
      menua2: [],
      menua3: [],
      show1css: false,
      show2css: false,
      show3css: false,
      show4css: false,
      resdata: "",
      srcarr: [],
      namearr: [],
      urls: [],
      urlsnow: [],
      n: 1,
      nowpage: "",
      leixing: "",
      xianzhi: 20,
      namearr2: [],
      height: 0,
    };
  },
  beforeMount() {},
  components: {
    top,
    foot,
    contact,
  },
  mounted() {
    let self = this;
    async function ok() {
      self.reqNoteMenu();
    }
    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0;
    ok();
    self.nowpage = this.$route.query.page;
    self.leixing = this.$route.query.leixing;
  },

  methods: {
    ok2() {
      let self = this;
      if (self.leixing) {
        // test2(self.leixing);
      }
    },
    go(name) {
      let self = this;
      //点击右边或者下面的图文进行跳转
      //1.1获取到项目名去后台查询id 注意这里并没有跟真实项目进行绑定，所以管理员需要创建已经存在的项目名
      let data = {
        name: name,
      };
      axios
        .post(self.src + "/build/getprojec3tid", data)
        .then(function (res) {
          //1.2已经获取到了id
          let id = res.data._id;
          //1.3 进行跳转
          self.$router.push({
            path: "m1?" + id,
          });
        })
        .catch(function (error) {
          alert(error);
        });
    },
    change(data) {
      let self = this;
      self.show1css = false;
      self.show2css = false;
      self.show3css = false;
      self.show4css = false;
      if (data == "1") {
        self.test2(self.menua1[0]);
        self.show1();
      } else if (data == "2") {
        self.test2(self.menua2[0]);
        self.show2();
      } else if (data == "3") {
        self.test2(self.menua3[0]);
        self.show3();
      } else {
        self.test2(self.menua4[0]);
        self.show4("no");
      }
      self.jihuo();
    },
    addimg() {
      let self = this;
      self.urlsnow = [];
      this.xianzhi += 20;
      //self.$message("")
      for (let i = 0; i < self.xianzhi; i++) {
        if (self.namearr[i]) {
          self.urlsnow.push(self.namearr[i]);
        } else {
          return;
        }
      }
    },

    test2(a) {
      let self = this;
      self.nowclick = a;
      self.urlsnow = [];
      self.xianzhi = 20;

      let data = JSON.stringify({
        menu2: self.nowclick,
      });
      self.nowpage = this.$route.query.page;
      //还要做一件事，去获取这个资料
      axios
        .get(self.src + "/build/getproject", {
          params: {
            data: data,
          },
        })
        .then(function (res) {

        
          self.srcarr = res.data.srcarr;

          self.namearr2 = res.data.namearr;

          self.resdata = res.data;
        })
        .catch(function (error) {
          alert(error);
        });

      //获取瀑布流的资料
      let data2 = {
        leixing: self.nowclick,
      };
      axios
        .post(self.src + "/build/getproject2", data2)
        .then(function (res) {
          self.namearr = res.data;

          //这里过滤一下，加上阿里云oss裁剪
          for (let i = 0; i < self.namearr.length; i++) {
            self.namearr[i].newsimg =
              self.namearr[i].newsimg +
              "?x-oss-process=image/crop,x_0,y_50,w_700,h_500,g_center/watermark,type_d3F5LXplbmhlaQ,size_12,text_6YeR5pif6ZOc5bel56iL54mI5p2D5omA5pyJ5L615p2D56m26LSj,color_B6B29E,shadow_50,t_100,g_se,x_10,y_10";
          }

          self.urlsnow = [];
          let last;
          if (self.namearr.length < self.xianzhi) {
            last = self.namearr.length;
          } else {
            last = self.xianzhi;
          }
          for (let i = 0; i < last; i++) {
            self.urlsnow.push(self.namearr[i]);
          }
        })
        .catch(function (error) {
          alert(error);
        });
    },
    jihuo() {
      $(function () {
        $(".cssoff").click(function () {
          $(".cssoff").css("border-bottom", "none");
          //这里是css样式渲染
          $(this).css("border-bottom", "2px solid #895A25");
        });
      });
    },
    reqNoteMenu() {
      let self = this;
      self.menua1 = [];
      self.menua2 = [];
      self.menua3 = [];
      self.menua4 = [];
      axios
        .get(self.src + "/build/reqNoteMenu", {})
        .then(function (res) {
          for (let s of res.data) {
            if (s.menu == "仿古铜建筑") {
              self.menua1.push(s.menu2);
            } else if (s.menu == "现代铜建筑") {
              self.menua2.push(s.menu2);
            } else if (s.menu == "大师艺术") {
              self.menua3.push(s.menu2);
            } else {
              self.menua4.push(s.menu2);
            }
          }

          if (self.nowpage == "1") {
            self.test2(self.menua1[0]);
            self.show1();
          } else if (self.nowpage == "2") {
            self.test2(self.menua2[0]);
            self.show2();
          } else if (self.nowpage == "3") {
            self.test2(self.menua3[0]);
            self.show3();
          } else {
            self.test2(self.menua4[0]);
            self.show4();
          }

          self.resdata = res.data;
          if (self.leixing) {
            self.test2(self.leixing);
          } else {
            self.test2(self.menua1[0]);
          }

          self.jihuo();
        })
        .catch(function (error) {
          alert(error);
        });
    },
    show1() {
      if (this.show1css) {
        this.show1css = false;
      } else {
        this.show1css = true;
      }

      this.jihuo();
    },
    show2() {
      if (this.show2css) {
        this.show2css = false;
      } else {
        this.show2css = true;
      }

      this.jihuo();
    },
    show3() {
      if (this.show3css) {
        this.show3css = false;
      } else {
        this.show3css = true;
      }
      this.jihuo();
    },
    show4() {
      if (this.height == 0) {
        $("#height0").css("height", "180px");
        this.height = 1;
      } else {
        $("#height0").css("height", "0px");
        this.height = 0;
      }

      if (this.show4css) {
        this.show4css = false;
      } else {
        this.show4css = true;
      }
      this.jihuo();
    },
  },
};
</script>
<style scoped>
/deep/ .van-step__icon {
  font-size: 20px;
  margin-left: 0px;
}

#height0 {
  height: 0px;
}

.hov1:hover {
  cursor: pointer;
}

/* 	input:hover {
		cursor: pointer;
	} */

.cssoff:hover {
  cursor: pointer;
  background: #9e9ca0;
  color: #fff;
}

.cssoff {
  padding: 3px 0;
  padding-left: 6px;
  border: none;
}
</style>
