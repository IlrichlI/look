<template>
        <Button :type="type as any" ghost @click="onClick"><slot /></Button>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue'
import { inject, provide } from 'vue';

defineProps({
        type: {
                type: String,
                default: () => 'primary'
        }
})

const onClick = () => {
        console.log('test')
}

const appStatus = inject('appStatus')

console.log(appStatus)
</script>