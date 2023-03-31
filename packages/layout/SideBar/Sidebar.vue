<template>
    <LayoutSider v-model:collapsed="collapsed" collapsible>
      <div class="flex justify-around items-center">
        <img class="h-12 w-12 rounded" src="../../../src/assets/logo.svg" />
        <RichTypography text-i18n="sidebar.title" class="!text-white p-4 truncate" type="TypographyTitle" :level="5" />
      </div>
      <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <template v-for="menuItem in menuItems" :key="menuItem.name">
          <MenuItem 
            v-if="!menuItem?.children?.length" 
            :disabled="!usePermission(menuItem?.permissions || []).hasPermission"
            :key="menuItem.name" 
            @click="navigateMenu(menuItem.name)"
          >
            <RichIcon v-if="menuItem.icon" :icon="menuItem.icon" />
            <RichTypography 
              class="!text-white"
              type="TypographyText" 
              :text-i18n="`sidebar.${menuItem.name as string}`" 
            />
          </MenuItem>

          <SubMenu v-else :key="menuItem.path">
            <template #title>
              <RichIcon v-if="menuItem.icon" :icon="menuItem.icon" />
              <RichTypography 
                class="!text-white"
                type="TypographyText" 
                :text-i18n="`sidebar.${menuItem.name as string}`" 
              />
            </template>
            <MenuItem 
              v-for="subMenuItem in menuItem.children" 
              :disabled="!usePermission(menuItem?.permissions || []).hasPermission"
              :key="subMenuItem.name" 
              @click="navigateMenu(subMenuItem.name)"
            >
              <RichIcon v-if="subMenuItem.icon" :icon="subMenuItem.icon" />
              <RichTypography 
                class="!text-white"
                type="TypographyText" 
                :text-i18n="`sidebar.${subMenuItem.name as string}`" 
              />
            </MenuItem>
          </SubMenu>

        </template>
        
        

      </Menu> 
    </LayoutSider>
</template>

<script setup lang="ts">
import { LayoutSider ,Menu, MenuItem, SubMenu } from 'ant-design-vue'
import { type PropType, ref, computed, onMounted } from 'vue';
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';
import { RichIcon, RichTypography } from '../../core'
import { usePermission } from '../../utils'

const props = defineProps({
  routes: {
    type: Array as PropType<Array<RouteRecordRaw>>,
    default: () => ([])
  }
})

const router = useRouter()
const route = useRoute()

const navigateMenu = (name: string) => {
  router.push({ name })
}

const serilizeRoutes = (routes: RouteRecordRaw[]) => routes.filter(r => r.meta?.menuItem).map(r => ({ name: r.name, path: r.path, icon: r.meta?.icon as string, permissions: r.meta?.permissions as string[], children: r.children ? serilizeRoutes(r.children) : [] }))

const menuItems = computed(() => serilizeRoutes(props.routes.find(r => r.meta?.sidebar)?.children || []))

const collapsed = ref(false)
const selectedKeys = ref<string[]>([])

onMounted(() => {
  menuItems.value.forEach(item => {
    if(item.children?.length) {
      const name = item.children.find(mi => route.fullPath.includes(mi.path))?.name
      if(name) selectedKeys.value = [name]
    } else if(route.fullPath === item.path || route.fullPath.includes(item.path)){
      selectedKeys.value = [item.name]
    }
  })
})

</script>
