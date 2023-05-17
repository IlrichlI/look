<template>
  <ConfigProvider :locale="fa_IR" direction="rtl">
    <RichModalProvider>
      <router-view />
    </RichModalProvider>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import { provide, ref } from 'vue'
import fa_IR from 'ant-design-vue/es/locale/fa_IR'
import { RichModalProvider } from '../../core'

const appStatus = ref<'initial' | 'authenticated' | 'unauthenticated'>('initial')

const authenticateAppStatus = () => {
  appStatus.value = 'authenticated'
}

const unauthenticateAppStatus = () => {
  appStatus.value = 'unauthenticated'
}

provide('appStatus', appStatus.value)

provide('authenticateAppStatus', authenticateAppStatus)

provide('unauthenticateAppStatus', unauthenticateAppStatus)
</script>
