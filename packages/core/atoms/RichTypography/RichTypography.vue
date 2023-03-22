<template>
  <component :is="getComponent(type)" :color="color" :level="level">{{ getText() }}</component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { 
  Typography, TypographyLink, TypographyParagraph, TypographyText, TypographyTitle
} from 'ant-design-vue'
import { useTranslate } from '../../../utils'

type TTypographyType = 
  | 'Typography'
  | 'TypographyLink'
  | 'TypographyParagraph'
  | 'TypographyText'
  | 'TypographyTitle' 

const props = defineProps({
  type: {
    type: String as PropType<TTypographyType>,
    default: () => 'Typography'
  },
  text: {
    type: String,
    default: () => ''
  },
  textI18n: {
    type: String,
    default: () => ''
  },
  color: {
    type: String,
    default: () => ''
  },
  level: {
    type: Number,
    default: () => 1
  },
})

const { translate } = useTranslate()

const getComponent = (type: TTypographyType) => {
  switch (type) {
  case 'Typography':
    return Typography
  case 'TypographyLink':
    return TypographyLink
  case 'TypographyParagraph':
    return TypographyParagraph
  case 'TypographyText':
    return TypographyText
  case 'TypographyTitle':
    return TypographyTitle
  default:
    return Typography
  }
}

const getText = () => {
  return props.textI18n ? translate(props.textI18n) : props.text
}

</script>