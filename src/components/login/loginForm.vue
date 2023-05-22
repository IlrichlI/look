<template>
  <FormProvider @submit="onSubmit">
    <InputField label-i18n="login.email" name="email" v-model:model="asghar" />

    <InputField label-i18n="login.password" name="password" type="password" />

    <RichButton ghost html-type="submit" text-i18n="login.enter" :loading="buttonLoading" />
  </FormProvider>
</template>

<script setup lang="ts">
import { RichButton } from '@rich/core'
import { FormProvider, InputField } from '@rich/form'
import { useService } from '@rich/http'
import { computed, inject, ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const asghar = ref<string>('')

const { mutate, loading } = useService({ serviceName: 'loginService', actionName: 'login' })
const authenticateAppStatus = inject('authenticateAppStatus') as () => void

const { login } = useAuth({ mutate, authenticateAppStatus })

const buttonLoading = computed(() => loading.value)

const onSubmit = async (data: never) => {
  login(data)
}
</script>
