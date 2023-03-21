<template>
  <HttpServiceProvider :services="loginService" services-name="loginService">
      <div class="login">
        <h1>This is a login page</h1>
      </div>
  </HttpServiceProvider>
</template>

<script setup lang="ts">
import { HttpServiceProvider } from '@rich/http'
import { loginService } from './loginService'

</script>

<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
