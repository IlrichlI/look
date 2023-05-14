<template>
  <Form :model="form" auto-complete="off" layout="vertical" @submit="onSubmit">
    <slot />
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'ant-design-vue'
import { provide, reactive } from 'vue'

const props = defineProps({
  formModel: {
    type: Object,
    default: () => ({})
  }
})

const form = reactive(props.formModel)

const changeForm = ({ key, value }: { key: string; value: string | number | boolean }) => {
  form[key] = value

  emit('onFormChange', JSON.parse(JSON.stringify(form)))
}

provide('changeForm', changeForm)

const emit = defineEmits(['submit', 'onFormChange'])

const onSubmit = () => {
  const keys = Object.keys(form).filter((k) => typeof form[k] === 'boolean' && !form[k])
  keys.forEach((k) => {
    delete form[k]
  })
  emit('submit', JSON.parse(JSON.stringify(form)))
}
</script>
