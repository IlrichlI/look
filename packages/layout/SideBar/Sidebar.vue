<template>
    <LayoutSider v-model:collapsed="collapsed" collapsible>
      <RichTypography text-i18n="sidebar.title" class="!text-white p-4" type="TypographyTitle" :level="5" />
      <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <MenuItem v-for="menuItem in menuItems" :key="menuItem.name" @click="navigateMenu(menuItem.name, !menuItem.children)">
          <RichIcon v-if="menuItem.icon" :icon="menuItem.icon" />
          <RichTypography type="TypographyText" :text-i18n="`sidebar.${menuItem.name as string}`" />
          <SubMenu v-for="subMenuItem in menuItem.children" :key="subMenuItem.name"  @click="navigateMenu(subMenuItem.name)">
            <RichIcon v-if="subMenuItem.icon" :icon="subMenuItem.icon" />
            <RichTypography type="TypographyText" :text-i18n="`sidebar.${subMenuItem.name as string}`" />
          </SubMenu>
        </MenuItem>
      </Menu> 
    </LayoutSider>
</template>

<script setup lang="ts">
import { LayoutSider ,Menu, MenuItem, SubMenu } from 'ant-design-vue'
import { type PropType, ref, computed } from 'vue';
import { RouteRecordRaw, useRouter } from 'vue-router';
import { RichIcon, RichTypography } from '../../core'

const props = defineProps({
  routes: {
    type: Array as PropType<Array<RouteRecordRaw>>,
    default: () => ([])
  }
})

const router = useRouter()

const navigateMenu = (name: string, noChilderen?: boolean) => {
  noChilderen && router.push({ name })
}

const serilizeRoutes = (routes: RouteRecordRaw[]) => routes.map(r => ({ name: r.name, icon: r.meta?.icon as string, children: r.children ? serilizeRoutes(r.children) : [] }))

const menuItems = computed(() => serilizeRoutes(props.routes.find(r => r.meta?.sidebar)?.children || []))

const collapsed = ref(false)
const selectedKeys = ref<string[]>([menuItems.value[0]?.name as string || ''])

</script>
