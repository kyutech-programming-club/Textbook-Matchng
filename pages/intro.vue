<template>
  <v-app>
    <v-container fluid>
     <v-content>

     <p class="letterspacing25px">
      <section class="title">
      <v-row >
       <h2>教科書を次の世代へ</h2>
        <div justify="end">
         <v-col>
         <n-link 
         to="login"
         class="button--green">Sign Up</n-link>
         <a class="button--green">Sign In</a>
         </v-col>
        </div>
       </v-row>
      </section>
     </p>


    <p class="letterspacing20px">
　　  <v-card color="#dbf6e9">
       <section>
        <v-col>
          <h2>積んでる教科書は後輩に</h2>
        </v-col>
        <v-col>
          <h3>家に積んである教科書はTextbook-Matchingに投稿して、取引したい後輩と交渉しましょう</h3>
        </v-col>
       </section> 
　　  </v-card>
    </p>

    <p class="letterspacing20px">
     <v-card>
      <section>
       <v-col>
      <h1>同じ学部の後輩はその教科書を欲しがっているかも？</h1>
       </v-col>
       <v-col>
      <h3>学部・学科を登録すれば、大学内直属の後輩と繋がりやすくなります。</h3>
       </v-col>
      </section>
     </v-card>
    </p>

    <p class="letterspacing20px">
      <v-card color="#dbf6e9">
       <section>
         <v-col>
          <h1>取引は対面で</h1>
         </v-col>
         <v-col>
          <h3>確実で誠実な取引をしましょう</h3>
         </v-col> 
    </section>
      </v-card>
    </p>

      </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {
  
}
</script>

<style>

.letterspacing20px{
  color: #35495e;
  text-decoration: underline #35495e;
}
</style>
