<!-- eslint-disable vue/no-mutating-props -->
<template>
  <FormItem
    :label="labelI18n ? translate(labelI18n) : label"
    :name="name"
    :rules="rules"
  >
    <Input :type="type" @input="onInputChange" :default-value="defautValue" />
  </FormItem>
</template>


<script setup lang="ts">
import { FormItem, Input } from 'ant-design-vue'
import type { ChangeEventHandler } from 'ant-design-vue/lib/_util/EventInterface';
import type { RuleObject } from 'ant-design-vue/lib/form';
import { type PropType, inject } from 'vue';
import { useTranslate } from '../../../utils';


const props = defineProps({
  type: {
    type: String as PropType<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password">,
    default: () => '' 
  },
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

const onInputChange: ChangeEventHandler = (e) => {
  changeForm({ key: props.name, value: e.target.value })
}

const { translate } = useTranslate()

</script>