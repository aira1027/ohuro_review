<template>
  <div class="introduction">
    <h1>「いい湯だったなあ」</h1>
    <h3>その記録、ここに残していきませんか？</h3>
    <p>
      "It was a good spa" Would you like to keep that record here?
    </p>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 36px;/* IE8以下とAndroid4.3以下用フォールバック */
  font-size: calc(2.4rem + ((1vw - 0.64rem) * 2.1429));/* 24px~36pxで可変*/
  line-height: 1.3;
}
h3 {
  margin: 40px 0 0;
}
p {
  margin-bottom: 40px;
}
</style>
