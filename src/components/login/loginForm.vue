<template>
  <FormProvider
    @submit="onSubmit"
  >

    <InputField 
      label-i18n="login.email"
      name="email" 
    />

    <InputField
      label-i18n="login.password"
      name="password"
      type="password"
    />
            
    <RichButton 
      ghost
      html-type="submit" 
      text-i18n="login.enter" 
      :loading="buttonLoading" 
    />

  </FormProvider>
</template>

<script setup lang="ts">
import { RichButton } from '@rich/core';
import { FormProvider, InputField } from '@rich/form';
import { useService } from '@rich/http'
import { computed, inject } from 'vue';
import { useAuth } from '@/composables/useAuth'

const { mutate, loading } = useService({ serviceName: 'loginService', actionName: 'login'})
const authenticatedAppStatus = inject('authenticatedAppStatus') as () => void

const { login } = useAuth({ mutate, authenticatedAppStatus })

const buttonLoading = computed(() => loading.value)


const onSubmit = async (data: any) => {

  await login(data)
  
}

</script>