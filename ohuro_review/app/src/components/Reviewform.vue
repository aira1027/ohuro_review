<template>
    <div class="reviewform">
        <!-- レビュー投稿フォーム呼び出し -->
        <b-modal id="modal-lg" size="lg" title="レビュー投稿フォーム" @ok="ok()" ok-title="登録" cancel-title="キャンセル">

          <b-container fluid>
            <div role="group">

              <!-- 施設名入力 -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="spa-name">施設名:</label>
                </b-col>

                <b-col sm="9">
                  <b-form-input
                    id="spa-name"
                    v-model="inputResult.spaName" 
                    :state="spaNameState" 
                    aria-describedby="input-live-feedback"
                    placeholder="施設名"
                    trim
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-live-feedback">
                    施設名を入力してください
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>

              <!-- 都道府県選択 -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="location">所在地:</label>
                </b-col>

                <b-col sm="4">
                  <b-form-select v-model="inputResult.selectedLocation" :options="optionsLocation"></b-form-select>
                </b-col>
              </b-row>

              <!-- 湯質 -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="yushitu">湯質:</label>
                </b-col>

                <b-col sm="9">
                  <b-form-group v-slot="{ ariaDescribedby }">
                    <b-form-checkbox-group
                      id="yushitu"
                      v-model="inputResult.selectedYushitu"
                      :options="optionsYushitu"
                      :aria-describedby="ariaDescribedby"
                      name="yushitu"
                    ></b-form-checkbox-group>
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- サウナ -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="sauna">サウナ:</label>
                </b-col>

                <b-col sm="9">
                  <b-form-group v-slot="{ ariaDescribedby }">
                    <b-form-checkbox-group
                      id="sauna"
                      v-model="inputResult.selectedSauna"
                      :options="optionsSauna"
                      :aria-describedby="ariaDescribedby"
                      name="sauna"
                    ></b-form-checkbox-group>
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- その他 -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="other">その他おすすめ<br>ポイント:</label>
                </b-col>

                <b-col sm="9">
                  <b-form-group v-slot="{ ariaDescribedby }">
                    <b-form-checkbox-group
                      id="other"
                      v-model="inputResult.selectedOther"
                      :options="optionsOther"
                      :aria-describedby="ariaDescribedby"
                      name="other"
                    ></b-form-checkbox-group>
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- アクセス -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="access">アクセス(参考):</label>
                </b-col>

                <b-col sm="9">
                  <b-form-group v-slot="{ ariaDescribedby }">
                    <b-form-checkbox-group
                      id="access"
                      v-model="inputResult.selectedAccess"
                      :options="optionsAccess"
                      :aria-describedby="ariaDescribedby"
                      name="access"
                    ></b-form-checkbox-group>
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- 評価 -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="evaluation">評価:</label>
                </b-col>

                <b-col sm="3">
                  <label for="all-evaluation">総合: </label>
                </b-col>
                  <b-form-rating id="all-evaluation" v-model="inputResult.allValue" variant="warning" inline value="0"></b-form-rating>
              </b-row>

              <b-row class="my-1">
                <b-col sm="3">
                  <label for="evaluation"></label>
                </b-col>
                
                <b-col sm="3">
                  <label for="type-evaluation">湯の種類: </label>
                </b-col>
                  <b-form-rating id="type-evaluation" v-model="inputResult.typeValue" variant="warning" inline value="0"></b-form-rating>
              </b-row>

              <b-row class="my-1">
                <b-col sm="3">
                  <label for="evaluation"></label>
                </b-col>
                
                <b-col sm="3">
                  <label for="atmos-evaluation">雰囲気: </label>
                </b-col>
                  <b-form-rating id="atmos-evaluation" v-model="inputResult.atmosValue" variant="warning" inline value="0"></b-form-rating>
              </b-row>

              <!-- 自由記述 -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="evaluation">自由記述:</label>
                </b-col>

                <b-col sm="9">
                  <b-form-textarea
                    id="textarea"
                    v-model="inputResult.freeText"
                    placeholder=""
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-col>
              </b-row>

            </div>
          </b-container>

        </b-modal>
    </div>
</template>

<script>
import location from '../assets/location.json'
import yushitu from '../assets/yushitu.json'
import sauna from '../assets/sauna.json'
import other from '../assets/other.json'
import access from '../assets/access.json'
import post from '../app/post'

export default {
  name: 'Reviewform',
  props: {
    msg: String
  },
  computed: {
    spaNameState() {
      return this.inputResult.spaName.length > 0 ? true : false
    },
  },
  data() {
    return {
      optionsLocation: location,
      optionsYushitu: yushitu,
      optionsSauna: sauna,
      optionsOther: other,
      optionsAccess: access,
      inputResult:{
        id: null,
        spaName: '',
        selectedLocation: null,
        selectedYushitu: [],      
        selectedSauna: [],      
        selectedOther: [],      
        selectedAccess: [],      
        allValue: null,
        typeValue: null,
        atmosValue: null,
        freeText: "",
        postdate: null
      }
    }
  },
  methods: {
    async ok() {
        
        // POST日時の取得とdata()への格納
        const date = new Date()
        this.inputResult.postdate = date.toLocaleString()
        // console.log(postdate)

        // POSTメソッド呼び出し
        // const ResultJson = JSON.stringify(this.inputResult)
        const GetResultJson = post.PostInputResult(this.inputResult)
        // const GetResultJson = post.GetInputResult()
        // console.log(GetResultJson)

        // レビュー登録完了メッセージ
        await this.$bvModal.msgBoxOk('レビューが登録されました', {
          title: '確認',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
      
        //データPOSTが完了したらページのリロード
        this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  }
}
</script>

<style>

</style>