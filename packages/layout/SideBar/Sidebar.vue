<template>
    <LayoutSider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <MenuItem v-for="menuItem in menuItems" :key="menuItem.name">
          <RichIcon v-if="menuItem.icon" :icon="menuItem.icon" />
          <span>{{ $t(`sidebar.${menuItem.name as string}`) }}</span>
          <SubMenu v-for="subMenuItem in menuItem.children" :key="subMenuItem.name">
            <RichIcon v-if="subMenuItem.icon" :icon="subMenuItem.icon" />
            <span>{{ $t(`sidebar.${subMenuItem.name as string}`) }}</span>
          </SubMenu>
        </MenuItem>
      </Menu> 
    </LayoutSider>
</template>

<script setup lang="ts">
import { LayoutSider ,Menu, MenuItem, SubMenu } from 'ant-design-vue'
import { type PropType, ref, computed } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { RichIcon } from '../../core'

const props = defineProps({
  routes: {
    type: Array as PropType<Array<RouteRecordRaw>>,
    default: () => ([])
  }
})

const serilizeRoutes = (routes: any[]) => routes.map(r => ({ name: r.name, icon: r.meta?.icon as string, children: r.children ? serilizeRoutes(r.children) : [] }))

const menuItems = computed(() => serilizeRoutes(props.routes.find(r => r.meta?.sidebar)?.children || []))

const collapsed = ref(false)
const selectedKeys = ref<string[]>([menuItems.value[0]?.name as string || ''])

</script>
