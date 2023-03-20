<template>
        <Button :type="type as any" ghost @click="onClick"><slot /></Button>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue'

defineProps({
        type: {
                type: String,
                default: () => 'primary'
        }
})

const onClick = () => {
        console.log('test')
}

</script>