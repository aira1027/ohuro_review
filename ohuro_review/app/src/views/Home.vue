<template>
  <div class="home">
    <p class="resizeimageSentouPhoto">
      <img alt="sentou home photo" src="@/assets/sentou_home_photo.png">
    </p>
    <introduction/>
    <b-button v-b-modal.modal-lg pill variant="outline-warning" class="reviewbutton">レビューする</b-button>
    <getreview/>
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from '@/components/Introduction.vue'
import Getreview from '@/components/Getreview.vue'

export default {
  name: 'Home',
  components: {
    Introduction,
    Getreview
  }
}
</script>

<style>
p.resizeimageSentouPhoto img { 
  width: 100%; 
}
.reviewbutton {
  background    : #ff7f00;     /* 背景色     */
  color         : #ffffff;     /* 文字色     */
  margin-bottom: 40px;
} 
</style>