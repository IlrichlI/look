<template>
        <Button :type="type" ghost @click="onClick">
                <slot />
        </Button>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue'
import type { ButtonType } from 'ant-design-vue/lib/button';
import type { PropType } from 'vue';

const emit = defineEmits(['onClick'])

defineProps({
        type: {
                type: String as PropType<ButtonType>,
                default: () => 'primary'
        }
})

const onClick = () => {
        emit('onClick')
}

</script>