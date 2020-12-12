<template>
  <v-dialog>
    <v-card>
      <v-card-title>新規投稿作成
        <v-spacer></v-spacer>
        <v-btn icon @click="close">
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row :align="alignCenter">
            <v-col cols="4" class="text-right">
              <label>タイトル</label>
            </v-col>
            <v-col cols="8">
              <v-text-field-with-validation
                v-model="newPost.title"
                label="タイトル名"
              ></v-text-field-with-validation>
            </v-col>
            <v-col cols="4" class="text-right">
              <label>説明文</label>
            </v-col>
            <v-col>
              <v-textarea
                v-model="forms.textarea"
                label="テキストエリア"
                auto-grow
                :rules="[rules.required, rules.max_100]"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outlined color="accent" @click="close">キャンセル</v-btn>
        <v-btn color="success" @click="update">上書き保存</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  
}
</script>