<template>
  <div>
    <h3>Loged in!</h3>
    <button @click="logout">Sign out</button>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  methods: {
    logout () {
      firebase.auth().signOut()
    }
  }
}
</script>