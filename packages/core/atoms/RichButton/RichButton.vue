<template>
        <Button :type="type" :html-type="htmlType" ghost @click="onClick">
                <slot />
        </Button>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue'
import type { ButtonType } from 'ant-design-vue/lib/button';
import { ButtonHTMLType } from 'ant-design-vue/lib/button/buttonTypes';
import type { PropType } from 'vue';

const emit = defineEmits(['onClick'])

defineProps({
        type: {
                type: String as PropType<ButtonType>,
                default: () => 'primary'
        },
        htmlType: {
                type: String as PropType<ButtonHTMLType>,
                default: () => 'button'
        }
})

const onClick = () => {
        emit('onClick')
}

</script>