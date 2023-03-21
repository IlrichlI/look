<!-- eslint-disable vue/no-mutating-props -->
<template>
        <FormItem
                :label="label"
                :name="name"
                :rules="rules"
        >
                <Input />
        </FormItem>
</template>


<script setup lang="ts">
import { FormItem, Input } from 'ant-design-vue'
import type { RuleObject } from 'ant-design-vue/lib/form';
import type { PropType } from 'vue';

defineProps({
        label: {
                type: String,
                default: () => '' 
        },
        name: {
                type: String,
                default: () => '' 
        },
        rules: {
                type: Array as PropType<RuleObject[]>,
                default: () => ([]) 
        },
})

</script>