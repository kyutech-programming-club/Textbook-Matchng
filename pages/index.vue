<template>
  <div v-if="isUserStateFetched">
    <button @click="googleLogin">ログイン</button>
  </div>
  <div v-else>
    <v-progress-circular
      indeterminate
    />
  </div>

</template>

<script>

import firebase from '@/plugins/firebase'

export default{
  data() {
    return {
      isUserStateFetched: false,
    }
  },
  created: function () {
    firebase.auth().onAuthStateChanged(user => {
      console.log('Login scceeded!')
      if (user != null) {
        this.$router.push('/postlist')
      }
      this.isUserStateFetched = true
    })
    console.log('created')
  },
  methods: {
    async googleLogin () {
      // 認証プロバイダへリダイレクト
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithRedirect(provider)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

