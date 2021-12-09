<template>
  <div>
    <div class="hidden-xs-only" style="clear: both; padding-top: 0px">
     <div
        style="
          text-align: center;
          width: 100%;
          padding-left: 600px;
          font-size: 22px;
          font-weight: 400;
        "
      >
        代表项目
      </div>
      <div style="margin-top: -10px; padding-left: 600px">
        <img width="100px" src="../../assets/home/st1.png" />
      </div>
      <div style="width: 100%; height: 200px; margin-top: 40px">
        <div
          style="clear: both; width: 30000px"
          v-on="{ mouseleave: moul, mouseenter: mou }"
        >
          <div
            ref="tet"
            :style="{marginLeft: n+'px'}"
            class="bra"
          >
            <router-link
              v-for="(a, b) in dbxm"
              :key="b"
              :to="'m1?' + a._id"
              style="border-radius: 5px; overflow: hidden"
            >
              <div class="imghff2">
                <div class="imghf2">
                  <img class="imgh2" :src="a.newsimg" />
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  
	
	
	
	<div
      class="hidden-md-and-up"
      style="clear: both; padding-top: 0px; text-align: right"
    >
      <div style="padding-right: 170px">
        <div>代表项目</div>
        <div
          style="
            width: 50px;
            border: 1px solid #949699;
            float: right;
            margin-right: 0px;
          "
        ></div>
      </div>
      <div style="width: 100%; height: 200px; margin-top: 30px">
        <div
          style="clear: both; width: 30000px"
          v-on="{ mouseleave: moul, mouseenter: mou }"
        >
          <div
            ref="tet"
            class="bra"
            :style="{marginLeft: n+'px'}"
          >
            <router-link
              v-for="(a, b) in dbxm"
              :key="b"
              :to="'m1?' + a._id"
              style="border-radius: 5px; overflow: hidden"
            >
              <div class="imghff2">
                <div class="imghf2">
                  <img class="imgh2" :src="a.newsimg" />
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dbxm: [],
      n: 0,
    };
  },
  mounted() {
    let self = this;
    self.njia();
    self.getnews();
  },
  methods: {
    getnews() {
      let self = this;
      axios
        .get(self.src + "/build/delegate")
        .then(function (res) {
          self.dbxm = res.data;

          for (let i = 0; i < 2; i++) {
            self.dbxm = self.dbxm.concat(self.dbxm);
          }
        })
        .catch(function (error) {
          alert(error);
        });
    },
    njia() {
      let self = this;

      self.time = setInterval(function () {
        if (self.n >= -12100) {
          self.n--;
        } else {
          self.n = 0;
        }
   
    
      }, 10);
    },
    mou() {
      let self = this;
      clearInterval(self.time);
    },
    moul() {
      let self = this;
      self.njia();
    },
  },
};
</script>

<style scoped="scoped">
.imghff2 {
  padding: 0px;
}

.imghff2:hover {
  padding: 0px;
  float: left;
  animation: mymove6 0.2s forwards;
}

@keyframes mymove6 {
  from {
  }

  to {
    margin-top: -10px;
    margin-bottom: 0px;
  }
}

@keyframes mymove2 {
  from {
  }

  to {
    width: 450px;
    margin-left: -60px;
    margin-top: -15px;
    height: 220px;
  }
}

.imgh2 {
  float: left;
  width: 425px;
  height: 200px;
  margin-left: -40px;
  transform: skewX(25deg);
}

.imgh2:hover {
  animation: mymove2 0.2s forwards;
}

@keyframes mymove11 {
  from {
    padding-top: 0px;
  }

  to {
    height: 190px;
    width: 345px;
  }
}

.imghf2 {
  margin-right: 0px;
  margin-left: 5px;
  float: left;
  padding-top: 0px;
  border-radius: 10px;
  overflow: hidden;
  transform: skewX(-25deg);
  position: relative;
  width: 325px;
  height: 170px;
}

.imghf2:hover {
  animation: mymove11 0.6s forwards;
}
</style>
