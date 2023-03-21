<template>
  <h3>{{  translate ? translate('login') : ''  }}</h3>
</template>

<script setup lang="ts">
import { inject } from 'vue';


const translate = inject('translate') as Function

</script>