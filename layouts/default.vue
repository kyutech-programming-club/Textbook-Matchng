<template>
  <div>
    <main>
      <Nuxt />
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from '~/components/Footer.vue'

export default {
 components: {
   AppFooter
 }
}
</script>

<style>
main {
  min-height: 600px;
		background-color: #ddd;
		text-align: center;
		padding: 30px;
}
</style>
