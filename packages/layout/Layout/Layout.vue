<template>
  <Layout style="min-height: 100vh">
    <Sidebar :routes="routes" />
    <Layout>
      <Header />
      <LayoutContent style="margin: 0 16px">
        <Breadcrumbs />
        
        <router-view />

      </LayoutContent>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, LayoutContent } from 'ant-design-vue'
import { Sidebar } from '../SideBar';
import { Header } from '../Header';
import { Breadcrumbs } from '../Breadcrumbs';
import { PropType } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

defineProps({
  routes: {
    type: Array as PropType<Array<RouteRecordRaw>>,
    default: () => ([])
  }
})



</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
