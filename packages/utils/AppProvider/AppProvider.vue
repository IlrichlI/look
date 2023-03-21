<template>
        <div><router-view /></div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';

const appStatus = ref<'initial' | 'authenticated' | 'unauthenticated'>('initial')

const authenticatedAppStatus = () => {
        appStatus.value = 'authenticated'
}

const unauthenticatedAppStatus = () => {
        appStatus.value = 'unauthenticated'
}

provide('appStatus', appStatus.value)

provide('authenticatedAppStatus', authenticatedAppStatus)

provide('unauthenticatedAppStatus', unauthenticatedAppStatus)

</script>