<template>
  <div >
    <div class="hidden-xs-only" style="margin: auto; padding: 30px 0">
      <div style="font-size: 23px; font-weight: 400">新闻</div>
      <div style="margin-top: -10px">
        <img width="100px" src="../../assets/home/st1.png" />
      </div>
      <el-card :body-style="{ padding: '35px 28px 0 28px' }">
        <el-row>
          <el-col :md="14">
            <template>
              <el-carousel :interval="5000" arrow="always" height="400px">
                <el-carousel-item v-for="(a, b) in arr" :key="b">
                  <router-link :to="'m2?' + a._id">
                    <!-- <img width="100%" height="370px" > -->
                    <van-image width="469" height="460" :src="a.newsimg" />
                  </router-link>
                </el-carousel-item>
              </el-carousel>
            </template>
          </el-col>
          <el-col :md="10">
            <el-row
              v-for="(a, b) in arr"
              :key="b"
              style="padding-left: 10px; margin-bottom: 35px"
            >
              <el-col :md="7">
                <div style="padding: 5px 0">
                  <div style="font-size: 32px">
                    {{ a.date.split("月")[1].split("日")[0] }}
                  </div>
                  <div style="font-size: 10px; color: #606060">
                    {{ a.date }}
                  </div>
                </div>
              </el-col>
              <el-col :md="17">
                <div
                  style="
                    overflow: hidden;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 11px;
                    padding: 7px 4px 0 0;
                    text-align: left;
                  "
                >
                  <router-link
                    style="color: #064e53; text-align: left"
                    :to="'m2?' + a._id"
                    >{{ a.news }}
                  </router-link>
                </div>
                <div
                  v-html="a.zhaiyao"
                  style="
                    text-align: left;
                    font-size: 13px;
                    margin-top: 8px;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical; ;
                  "
                ></div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <div class="hidden-md-and-up" style="margin: auto">
      <div style="font-size: 14px; font-weight: 400">新闻</div>
      <div><img width="100px" src="../../assets/home/st1.png" /></div>
      <el-card :body-style="{ padding: '10px' }" style="margin-top: 10px">
        <el-row>
          <el-col :xs="24">
            <template>
              <el-carousel :interval="5000" arrow="always" height="280px">
                <el-carousel-item v-for="(a, b) in arr" :key="b">
                  <router-link :to="'m2?' + a._id">
                    <!-- <img width="100%" height="370px" > -->
                    <van-image width="469" height="460px" :src="a.newsimg" />
                  </router-link>
                </el-carousel-item>
              </el-carousel>
            </template>
          </el-col>
          <el-col :xs="24" style="margin-top: 10px">
            <el-row
              v-for="(a, b) in arr"
              :key="b"
              style="padding-left: 10px; margin-bottom: 5px"
            >
              <el-col :xs="7">
                <div style="padding: 5px 0">
                  <div style="font-size: 19px">
                    {{ a.date.split("月")[1].split("日")[0] }}
                  </div>
                  <div style="font-size: 10px; color: #606060">
                    {{ a.date }}
                  </div>
                </div>
              </el-col>
              <el-col :xs="16" :offset="1">
                <div
                  style="
                    overflow: hidden;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 11px;
                    padding: 7px 4px 0 0;
                    text-align: left;
                  "
                >
                  <router-link
                    style="color: #064e53; text-align: left"
                    :to="'m2?' + a._id"
                    >{{ a.news }}
                  </router-link>
                </div>
                <div
                  v-html="a.zhaiyao"
                  style="
                    text-align: left;
                    font-size: 13px;
                    margin-top: 8px;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical; ;
                  "
                ></div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "top",
  data() {
    return {
      arr: [],
    };
  },
  mounted() {
    this.getnews();
  },
  methods: {
    getnews() {
      let self = this;
      axios
        .get(self.src + "/build/getnews2")
        .then(function (res) {
          moment.locale("zh-cn");
          console.log(res.data);
          for (let s of res.data) {
            s.date = moment(s.date).format("LL");
            s.newsimg =
              s.newsimg +
              "?x-oss-process=image/crop,x_10,y_10,w_800,h_800,g_center";
            self.arr.push(s);
          }
        })
        .catch(function (error) {
          alert(error);
        });
    },
  },
};
</script>

<style>
</style>
