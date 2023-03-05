<template>
        <a-button type="primary" ghost @click="onClick">Primary</a-button>
</template>

<script setup lang="ts">

const onClick = () => {
        console.log('test')
}

</script>