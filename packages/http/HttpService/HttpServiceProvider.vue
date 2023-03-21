<template>
    <div>
        <slot />
    </div>
</template>


<script setup lang="ts">
import { getInstance } from '../interceptors'
import { provide } from 'vue';


const props = defineProps({
    services: {
        type: Function,
        default: () => null
    },
    servicesName: {
        type: String,
        default: () => 'service'
    }
})

const { instance } = getInstance()

const getInitialServices = () => {
    let init: any = {}
    if (Array.isArray(props.services))
        props.services.forEach((item) => {
            init = { ...init, ...item(instance) }
        })
    else init = { ...props.services(instance) }
    return init
}

provide(props.servicesName, getInitialServices())


</script>