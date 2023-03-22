<template>
  <Form
    :model="form"
    auto-complete="off"
    layout='vertical'
    @submit="onSubmit"
  >
    <slot />
  </Form>
</template>


<script setup lang="ts">
import { Form } from 'ant-design-vue'
import { provide, reactive } from 'vue';

const props = defineProps({
  formModel: {
    type: Object,
    default: () => ({})
  }
})

const form = reactive(props.formModel)

const changeForm = ({ key, value }: { key: string, value: string | number | boolean }) => {
  form[key] = value
        
  emit('onFormChange', JSON.parse(JSON.stringify(form)))
}

provide('changeForm', changeForm)

const emit = defineEmits(['submit', 'onFormChange'])


const onSubmit = (data: any) => {
  let formObj: Record<string, string> = {} as Record<string, string>
  let i = 0
  while(data.target[i]) {
    const input = data.target[i]
    const key = input.id.replace('form_item_', '')
                
    if(key){
      formObj[key]= input.value
    }

    i++
  }

  emit('submit', formObj)
}

</script>