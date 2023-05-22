<template>
  <FormItem v-bind="formItemProps" form>
    <Input v-bind="inputProps" @input="onInputChange" :value="model" />
  </FormItem>
</template>

<script setup lang="ts">
import { FormItem, Input, InputProps } from 'ant-design-vue'
import type { ChangeEvent } from 'ant-design-vue/lib/_util/EventInterface'
import { type PropType, inject } from 'vue'
import { FormItemProps } from 'ant-design-vue/lib/form'

const props = defineProps({
  formItemProps: {
    type: Object as PropType<FormItemProps>,
    default: () => {
      return {}
    }
  },
  inputProps: {
    type: Object as PropType<InputProps>,
    default: () => {
      return {}
    }
  },
  model: {
    type: String,
    required: false
  }
})

const emit = defineEmits(['update:model'])

const changeForm = inject('changeForm') as ({
  key,
  value
}: {
  key: FormItemProps['name']
  value: string | undefined
}) => void

const onInputChange = (e: ChangeEvent) => {
  emit('update:model', e.target.value)
  if (changeForm) {
    changeForm({ key: props.formItemProps?.name, value: e.target.value })
  }
}
</script>
