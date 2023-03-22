<template>
        <ConfigProvider :locale="fa_IR" direction="rtl">
                <router-view />
        </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import { provide, ref } from 'vue';
import fa_IR from 'ant-design-vue/es/locale/fa_IR';

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