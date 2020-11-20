<template>
  <div>
    <h3>Loged in!</h3>
    <button @click="logout">Sign out</button>
    <v-avatar class="d-inline-block" size="128">
      <v-img
        :src="photo_url"
      />
    </v-avatar>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  data() {
    return {
      photo_url: ""
    }
  },
  created: function () {
    firebase.auth().onAuthStateChanged(user => {
      this.photo_url = user.photoURL
      console.log(this.photo_url)
    })
  },
  methods: {
    logout () {
      firebase.auth().signOut()
    }
  }
}
</script>