<template>
  <FormProvider
    @onFormChange="onFormChange"
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
import { computed } from 'vue';

const onFormChange = (data: any) => {
  console.log(data)
}


const { mutate, loading } = useService({ serviceName: 'loginService', actionName: 'login'})

const buttonLoading = computed(() => loading.value)

const onSubmit = async (data: any) => {

  const res = await mutate(data)

  console.log(res, loading.value)
} 

</script>