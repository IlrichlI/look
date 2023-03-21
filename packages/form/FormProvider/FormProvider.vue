<template>
        <Form
                @submit="onSubmit"
        >
                <slot />
        </Form>
</template>


<script setup lang="ts">
import { Form } from 'ant-design-vue'

defineProps({
        formModel: {
                type: Object,
                default: () => ({})
        }
})

const emit = defineEmits(['submit'])


const onSubmit = (data: any) => {
        let formObj: Record<string, string> = {} as Record<string, string>
        let i = 0
        while(data.target[i]) {
                const input = data.target[i]
                const key = input.id.replace('form_item_', '')
                
                if(key){
                        formObj[key]= input.value
                }

                i++
        }

        emit('submit', formObj)
}

</script>