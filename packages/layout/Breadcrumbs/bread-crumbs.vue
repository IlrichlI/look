<template>
  <Breadcrumb style="margin: 16px 0">
    <BreadcrumbItem
      v-for="breadcrumb in breadcrumbObject"
      :key="breadcrumb.name"
      :href="breadcrumb.path"
    >
      <RichTypography type="TypographyText" class="text-xs" :text-i18n="breadcrumb.name" />
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
import { PropType, computed } from 'vue'
import { RouteRecordRaw, useRoute } from 'vue-router'
import { RichTypography } from '@rich/core'

const props = defineProps({
  routes: {
    type: Array as PropType<Array<RouteRecordRaw>>,
    default: () => []
  }
})

const route = useRoute()
const breadcrumbObject = computed<any[]>(() => {
  const sidebarRoutes: any[] = []
  props.routes?.map((r: RouteRecordRaw) => {
    if (r.meta?.sidebar) {
      if (r.children) sidebarRoutes.push(...r.children)
    }
  })
  const breadCrumbsFromRoutes = getBreadcrumbFromRoutes(sidebarRoutes)
  const breadcrumbItems: any[] = []
  let breadcrumbObj: any = breadCrumbsFromRoutes
  while (breadcrumbObj?.name) {
    breadcrumbItems.push(breadcrumbObj)
    if (breadcrumbObj?.child) {
      breadcrumbObj = breadcrumbObj?.child
    } else {
      break
    }
  }
  return breadcrumbItems
})
const getBreadcrumbFromRoutes = (routes: RouteRecordRaw[]) => {
  let breadcrumb: any = {}
  const breadcrumbRoute = routes.find((r) => route.path.includes(r.path))

  if (breadcrumbRoute) {
    breadcrumb = { ...breadcrumbRoute, name: '', child: null }
    breadcrumb.name = 'sidebar.' + (breadcrumbRoute.name as string)
    if (breadcrumbRoute.children?.length) {
      breadcrumb.child = getBreadcrumbFromRoutes(breadcrumbRoute.children) as any
    }

    return breadcrumb
  }
}
</script>
