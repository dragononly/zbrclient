<template>
  <div class="max">
    <div>杭州金星铜工程有限公司</div>
    <div style="margin-top: 15px">
      版权所有：杭州金星铜工程有限公司© 网站备案 / 许可证号：<a
        style="color: #c4c2c6"
        href="https://beian.miit.gov.cn/"
        >浙ICP备19014233号-1©
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot',

  data() {
    return {};
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.max {
  background: #727278;
  padding: 30px;
  color: #c4c2c6;
  font-weight: 500;
  font-size: 14px;
  clear: both;
}
</style>
