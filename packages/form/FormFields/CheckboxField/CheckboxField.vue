<template>
  <FormItem v-bind="formItemProps">
    <Checkbox @change="onCheckboxChange" :default-value="defaultValue">
      {{ labelI18n ? translate(labelI18n) : label }}
    </Checkbox>
  </FormItem>
</template>

<script setup lang="ts">
import { Checkbox, FormItem } from 'ant-design-vue'
import { CheckboxChangeEvent } from 'ant-design-vue/lib/checkbox/interface'
import { FormItemProps } from 'ant-design-vue/lib/form'
import { PropType, inject } from 'vue'
import { useTranslation } from 'i18next-vue'

const props = defineProps({
  formItemProps: {
    type: Object as PropType<FormItemProps>,
    default: () => {
      return {}
    }
  },
  label: {
    type: String,
    default: () => ''
  },
  labelI18n: {
    type: String,
    default: () => ''
  },
  defaultValue: {
    type: String,
    default: () => ''
  }
})

const changeForm = inject('changeForm') as ({
  key,
  value
}: {
  key: FormItemProps['name']
  value: boolean
}) => void

const onCheckboxChange = (e: CheckboxChangeEvent) => {
  changeForm({ key: props.formItemProps?.name, value: e.target.checked })
}

const { t: translate } = useTranslation()
</script>
