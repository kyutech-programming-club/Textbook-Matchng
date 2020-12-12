<template>
  <v-app>
    <v-main>
      <div class="text-center">
        <v-avatar class="d-inline-block ma-8" size="80">
          <v-img
            :src="photo_url"
          />
        </v-avatar>

        <v-btn
          class="ma-4"
          outlined
          color="teal"
          @click="logout()"
        >
          Sign out
        </v-btn>
      </div>

      <v-card width="600px" class="mx-auto mt-5">
        <v-card-title>新規投稿作成</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="4">
                <label>タイトル</label>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="タイトル名"
                  v-model="title"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <label>説明文</label>
              </v-col>
              <v-col>
                <v-textarea
                  label="説明"
                  auto-grow
                  v-model="description"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal" @click="addPost">投稿</v-btn>
        </v-card-actions>
      </v-card>

      <v-card width="600px" class="mx-auto mt-5">
        <v-card-title>タイトル2</v-card-title>
        <V-card-subtitle>サブタイトル2</V-card-subtitle>
        <v-card-text>本文てすとてすと</v-card-text>
      </v-card>

      <v-card width="600px" class="mx-auto mt-5">
        <v-card-title>タイトル3</v-card-title>
        <V-card-subtitle>サブタイトル3</V-card-subtitle>
        <v-card-text>本文だあひあひぃ！</v-card-text>
      </v-card>

      <v-card width="600px" class="mx-auto mt-5">
        <v-card-title>タイトル3</v-card-title>
        <V-card-subtitle>サブタイトル3</V-card-subtitle>
        <v-card-text>本文だあひあひぃ！</v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import firebase from '@/plugins/firebase'
import { db } from '@/plugins/firebase'

export default {
  data() {
    return {
      photo_url: '',
      user_name: '',
      title: '',
      description: ''
    }
  },
  created: function () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.photo_url = user.photoURL
        this.user_name = user.displayName
        const db = firebase.firestore
        console.log(this.photo_url)
      }
    })
  },
  methods: {
    addPost () {
      db.collection('post')
        .add({
          created: firebase.firestore.FieldValue.serverTimestamp(),
          description: this.description,
          title: this.title,
          uid: firebase.auth().currentUser.uid,
          userName: firebase.auth().currentUser.displayName
        })
        .then(docRef => {
          this.title = '',
          this.description = ''
        })
        .catch(error => {
          console.error('Error adding document: ', error)
        })
    },
    logout () {
      firebase.auth().signOut()
      this.$router.push("/")
    }
  }
}
</script>