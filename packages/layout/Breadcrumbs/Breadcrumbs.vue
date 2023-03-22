<template>
  <Breadcrumb style="margin: 16px 0">
    <BreadcrumbItem v-for="breadcrumb in getBreadcrumb()" :key="breadcrumb">
      <RichTypography type="TypographyText" class="text-xs" :text-i18n="breadcrumb" />
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
import { PropType, computed } from 'vue';
import { RouteRecordRaw, useRoute } from 'vue-router';
import { RichTypography } from '../../core';

const props = defineProps({
  routes: {
    type: Array as PropType<Array<RouteRecordRaw>>,
    default: () => ([])
  }
})

const route = useRoute()
const breadcrumbObject = computed(() => getBreadcrumbFromRoutes(props.routes.find(r => r.meta?.sidebar)?.children || []))

const getBreadcrumbFromRoutes = (routes: RouteRecordRaw[]) => {
  let breadcrumb = { name: '', childe: null }
  const breadcrumbRoute = routes.find(r => route.path.includes(r.path))
  if(breadcrumbRoute){
    breadcrumb.name = 'sidebar.' + (breadcrumbRoute.name as string)
    if(breadcrumbRoute.children?.length) {
      breadcrumb.childe = getBreadcrumbFromRoutes(breadcrumbRoute.children) as any
    }
    return breadcrumb
  }
}



const getBreadcrumb = () => {
  let breadcrumbItemes: string[] = []
  let breadcrumbObj = breadcrumbObject.value

  while(breadcrumbObj?.name) {
    breadcrumbItemes.push(breadcrumbObj?.name as string)
    if(breadcrumbObj?.childe) {
      breadcrumbObj = breadcrumbObj?.childe
    } else {
      break;
    }
  }

  return breadcrumbItemes
}
</script>