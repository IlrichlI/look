<template>
        <div><slot/></div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';


const appStatus = ref<'initial' | 'authenticated' | 'unauthenticated'>('initial')

provide('appStatus', appStatus.value)

</script>