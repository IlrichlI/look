<template>
        <FormProvider
                @submit="onSubmit"
        >
                <h3>{{  translate('login')  }}</h3>
                <InputField 
                        :label="translate('login')"
                        name="email" 
                />
                <InputField 
                        :label="translate('login')"
                        name="password" 
                />
                        
                <RichButton html-type="submit">Submit</RichButton>
        </FormProvider>
</template>

<script setup lang="ts">
import { RichButton } from '@rich/core';
import { FormProvider, InputField } from '@rich/form';
import { useTranslate } from '@rich/utils';
import { useService } from '@rich/http'

const { translate } = useTranslate()



const { mutate } = useService({ serviceName: 'loginService', actionName: 'login'})

const onSubmit = async (data: any) => {

        await mutate(data)
} 

</script>