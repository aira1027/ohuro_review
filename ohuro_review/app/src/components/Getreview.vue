<template>
  <div class="getreview">
    <!-- <b-button @click="GetInputResult">REST</b-button>
    </p>
    {{ info }}
    -->
    <b-container class="d-flex justify-content-center">
      <b-card-group deck align='center'>
        <div v-for="getofreview in getofreviews_lists" :key="getofreview.id">
          <b-card
            img-src="@/assets/noimage.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            align="left"
          >
            <b-card-title>
              {{ getofreview.spaName }}
            </b-card-title>
            <b-card-text>
              評価: <b-form-rating id="all-evaluation" v-model="getofreview.allValue" variant="warning" readonly inline></b-form-rating>
              <br />
              {{ sentouKeyword(getofreview.selectedYushitu, getofreview.selectedSauna, getofreview.selectedOther) }}
              <br />
              登録日: {{ getofreview.postdate }}
            </b-card-text>

            <!--<b-button @click="openModal(getofreview)" v-b-modal.reviewdetailsmodal href="#" variant="primary">詳細</b-button>-->
            <!--<b-button v-b-modal.reviewdetailsmodal href="#" variant="primary">詳細</b-button>-->
            <b-button @click="openModal(getofreview)" v-b-modal.reviewdetailsmodal href="#" variant="primary">詳細</b-button>

          </b-card>

        </div>
      </b-card-group>
      <reviewdetails :val="postItem" v-show="showContent" @close="closeModal" />
    </b-container>

    <b-pagination
      :total-rows="rows" 
      v-model="currentPage"
      :per-page="perPage"
      align='center'
    ></b-pagination>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import reviewdetails from '@/components/Reviewdetails.vue'

export default {
  name: 'Getreview',
  data () {
    return {
      getofreviews: [],
      perPage: 9,
      currentPage: 1,
      showContent: false,
      postItem: []
    }
  },
  components: {
    reviewdetails
  },

  // methods:{
  //   GetInputResult(){
  //     axios
  //       .get('http://192.168.99.100:8082/restendpoint/')
  //       .then(response => (this.getofreviews = response.data))
  //   }
  // }

  mounted: function(){
    axios
      .get('http://192.168.99.100:8082/restendpoint/')
      .then(response => (
        this.getofreviews = response.data
        ))
  },

  // computed: {
  //     sentouKeyword(val1,val2) {
  //       var val = []
  //       var val = val.concat(val1, val2)
  //       // console.log(val)
  //       return val.join('/')
  //     }
  // }
  computed: {
    sentouKeyword: () => (val1, val2, val3) => {
      var val = []
      var val = val.concat(val1, val2, val3)
      return val.join(' / ')
    },
    getofreviews_lists () {
      const items = this.getofreviews
      // Return just page of items needed
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    rows() {
      return this.getofreviews.length
    }
  },

  methods: {
    openModal(getofreview) {
      this.showContent = true
      this.postItem = getofreview
    },
    closeModal () {
      this.showContent = false
    }
  }
}

</script>

<style>

</style>