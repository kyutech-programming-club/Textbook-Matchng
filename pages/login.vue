<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h3>あひあひ</h3>
      </v-card-title>
      <v-catd-text>
        <v-form>
          <v-text-field prepend-icon="mdi-account-circle" label="ユーザー名" />
          <v-text-field prepend-icon="mdi-lock" append-icon="mdi-eye-off" type="password" label="パスワード" />
          <v-card-actions>
            <v-btn class="info">ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-catd-text>
    </v-card>
  </v-app>
</template>