<template>
    <div class="reviewdetails">
        <!-- レビュー投稿フォーム呼び出し -->
        <b-modal id="reviewdetailsmodal" size="lg" title="レビュー内容詳細">

          <!--result: {{ val }}-->

          <b-container fluid>
            <div role="group">

              <!-- 施設名表示 -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="spa-name">施設名:</label>
                </b-col>
                <b-col sm="9">
                  {{ unregisteredjudg(val.spaName) }}
                </b-col>
              </b-row>

              <!-- 都道府県選択 -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="location">所在地:</label>
                </b-col>

                <b-col sm="4">
                  {{ unregisteredjudg(val.selectedLocation) }}
                </b-col>
              </b-row>

              <!-- 湯質 -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="yushitu">湯質:</label>
                </b-col>

                <b-col sm="9">
                  {{ suraAdd(val.selectedYushitu) }}
                </b-col>
              </b-row>

              <!-- サウナ -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="sauna">サウナ:</label>
                </b-col>

                <b-col sm="9">
                  {{ suraAdd(val.selectedSauna) }}
                </b-col>
              </b-row>

              <!-- その他 -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="other">その他おすすめ<br>ポイント:</label>
                </b-col>

                <b-col sm="9">
                  {{ suraAdd(val.selectedOther) }}
                </b-col>
              </b-row>

              <!-- アクセス -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="access">アクセス(参考):</label>
                </b-col>

                <b-col sm="9">
                  {{ suraAdd(val.selectedAccess) }}
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- 評価 -->
              <b-row class="my-1">
                <b-col sm="3">
                  <label for="evaluation">評価:</label>
                </b-col>

                <b-col sm="3">
                  <label for="all-evaluation">総合: </label>
                </b-col>
                  <b-form-rating id="all-evaluation" v-model="val.allValue" variant="warning" inline readonly></b-form-rating>
              </b-row>

              <b-row class="my-1">
                <b-col sm="3">
                  <label for="evaluation"></label>
                </b-col>
                
                <b-col sm="3">
                  <label for="type-evaluation">湯の種類: </label>
                </b-col>
                  <b-form-rating id="type-evaluation" v-model="val.typeValue" variant="warning" inline readonly></b-form-rating>
              </b-row>

              <b-row class="my-1">
                <b-col sm="3">
                  <label for="evaluation"></label>
                </b-col>
                
                <b-col sm="3">
                  <label for="atmos-evaluation">雰囲気: </label>
                </b-col>
                  <b-form-rating id="atmos-evaluation" v-model="val.atmosValue" variant="warning" inline readonly></b-form-rating>
              </b-row>

              <!-- 自由記述 -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="evaluation">自由記述:</label>
                </b-col>

                <b-col sm="9">
                  {{ unregisteredjudg(val.freeText) }}
                </b-col>
              </b-row>

              <!-- 投稿日時 -->  
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="evaluation">投稿日時:</label>
                </b-col>

                <b-col sm="9">
                  {{ unregisteredjudg(val.postdate) }}
                </b-col>
              </b-row>
            </div>
          </b-container>

          <template #modal-footer="{ ok }">
            <b-button id="modal-multi-2" variant="secondary" class="float-left" @click="deleteReview(val)">投稿削除</b-button>
            <b-button variant="primary" @click="ok()">閉じる</b-button>
          </template>          
        
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'reviewdetails',
  props: ['val'],
  computed: {
  },
  data() {
    return {
      deleteJudg: ''
  //   //   optionsLocation: location,
  //   //   optionsYushitu: yushitu,
  //   //   optionsSauna: sauna,
  //   //   optionsOther: other,
  //   //   optionsAccess: access,
  //   //   inputResult:{
  //   //     id: null,
  //   //     spaName: '',
  //   //     selectedLocation: null,
  //   //     selectedYushitu: [],      
  //   //     selectedSauna: [],      
  //   //     selectedOther: [],      
  //   //     selectedAccess: [],      
  //   //     allValue: null,
  //   //     typeValue: null,
  //   //     atmosValue: null,
  //   //     freeText: "",
  //   //     postdate: null
  //   //   },
    }
  },
  methods: {
    async deleteReview(val) {
      this.deleteJudg = ''
      await this.$bvModal.msgBoxConfirm('本当に投稿を削除しますか？', {
        title: '警告',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'はい',
        cancelTitle: 'いいえ',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          this.deleteJudg = value
        })
        .catch(err => {
          // An error occurred
        })
      if(this.deleteJudg == false){
        return
      } else if (this.deleteJudg == true){
        axios.delete('http://192.168.99.100:8082/restendpoint/' + val.id, val)
          .catch(error => console.log(error))
      }

      // レビュー削除完了メッセージ
      await this.$bvModal.msgBoxOk('レビューが削除されました', {
        title: '確認',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'success',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
      
      //データDELETEが完了したらページのリロード
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }, 
    suraAdd(val){
      // topページ呼び出しの際は、valの値を初期化(undefinedになる為）
      if(val == undefined){
        val = {}
        return val
      } else if(Object.keys(val).length === 0){
        return val = "登録なし"
      } else {
        return val.join(' / ')
      }
    },
    unregisteredjudg(val){
      if(val == undefined || val == null || val == ''){
        return val = "登録なし"
      } else {
        return val
      }
    }
  }
}
</script>

<style>

</style>