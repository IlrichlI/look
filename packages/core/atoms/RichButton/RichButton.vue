<template>
  <Button :type="type" :html-type="htmlType" :ghost="ghost" :loading="loading" @click="onClick">
    <slot v-if="!textI18n" />
    <span v-else>
      {{ translate(textI18n) }}
    </span>
  </Button>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue'
import type { ButtonType } from 'ant-design-vue/lib/button'
import { ButtonHTMLType } from 'ant-design-vue/lib/button/buttonTypes'
import type { PropType } from 'vue'
import { useTranslation } from 'i18next-vue'

const emit = defineEmits(['onClick'])

defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: () => 'primary'
  },
  htmlType: {
    type: String as PropType<ButtonHTMLType>,
    default: () => 'button'
  },
  textI18n: {
    type: String,
    default: () => ''
  },
  ghost: {
    type: Boolean,
    default: () => false
  },
  loading: {
    type: Boolean as PropType<
      | boolean
      | {
          delay?: number | undefined
        }
    >,
    default: () => false
  }
})

const { t: translate } = useTranslation()

const onClick = () => {
  emit('onClick')
}
</script>
