<template>
  <FormItem
    :name="name"
    :rules="rules"
  >
    <Checkbox @change="onCheckboxChange" :default-value="defautValue">
      {{ labelI18n ? translate(labelI18n) : label }}
    </Checkbox>
  </FormItem>
</template>

<script setup lang="ts">
import { Checkbox, FormItem } from 'ant-design-vue';
import { RuleObject } from 'ant-design-vue/lib/form';
import { PropType, inject } from 'vue';
import { useTranslate } from '../../../utils';


const props = defineProps({
  label: {
    type: String,
    default: () => '' 
  },
  labelI18n: {
    type: String,
    default: () => '' 
  },
  name: {
    type: String,
    default: () => '' 
  },
  defautValue: {
    type: String,
    default: () => '' 
  },
  rules: {
    type: Array as PropType<RuleObject[]>,
    default: () => ([]) 
  },
})

const changeForm = inject('changeForm') as Function

const onCheckboxChange = (e: any) => {
  changeForm({ key: props.name, value: e.target.checked })
}

const { translate } = useTranslate()

</script>