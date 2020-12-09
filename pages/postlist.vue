<template>
  <v-app>
    <v-content>
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

      <div class="ma-4">
        <v-card width="600px" class="mx-auto mt-5" href="https://o-xian.netlify.app/">
          <v-container>
            <v-card-actions>
              <v-avatar class="d-inline-block" size="40">
                <v-img
                  :src="photo_url"
                />
              </v-avatar>
              <v-card-title>数学の教科書3点お譲りします</v-card-title>
            </v-card-actions>
          </v-container>
        </v-card>

        <v-card width="600px" class="mx-auto mt-5">
          <v-card-title>タイトル2</v-card-title>
          <V-card-subtitle>サブタイトル2</V-card-subtitle>
          <v-card-text>本文てすとてすと</v-card-text>
        </v-card>

        <v-card width="600px" class="mx-auto mt-5">
          <v-container>
            <v-card-actions>
              <v-avatar class="d-inline-block" size="40">
                <v-img
                  :src="photo_url"
                />
              </v-avatar>
              <v-card-title>数学の教科書3点お譲りします</v-card-title>
            </v-card-actions>
          </v-container>
        </v-card>

        <v-card width="600px" class="mx-auto mt-5">
          <v-card-title>タイトル3</v-card-title>
          <V-card-subtitle>サブタイトル3</V-card-subtitle>
          <v-card-text>本文だあひあひぃ！</v-card-text>
        </v-card>

        <v-card width="600px" class="mx-auto mt-5">
          <v-container>
            <v-card-actions>
              <v-avatar class="d-inline-block" size="40">
                <v-img
                  :src="photo_url"
                />
              </v-avatar>
              <v-card-title>数学の教科書3点お譲りします</v-card-title>
            </v-card-actions>
          </v-container>
        </v-card>

        <v-card width="600px" class="mx-auto mt-5">
          <v-card-title>タイトル3</v-card-title>
          <V-card-subtitle>サブタイトル3</V-card-subtitle>
          <v-card-text>本文だあひあひぃ！</v-card-text>
        </v-card>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  data() {
    return {
      photo_url: null,
      user_name: null,
      posts: []
    }
  },
  created: function () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.photo_url = user.photoURL
        this.user_name = user.displayName
        console.log(this.photo_url)
      }
    })
  },
  methods: {
    logout () {
      firebase.auth().signOut()
      this.$router.push("/")
    }
  }
}
</script>