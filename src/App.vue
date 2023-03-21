<script setup lang="ts">
import { RichButton } from '@rich/core'
import { AppProvider } from '@rich/utils'
import { useI18n } from 'vue-i18n';

const { t } = useI18n({
  messages: {
        en: {
                message: {
                        hello: 'hello world!!!!!!!!!!!!!'
                }
        },
        fa: {
                message: {
                        hello: 'سلام دنیا!!!!!!!!!'
                }
        }
}
})

</script>

<template>
    <AppProvider>
        <RichButton>{{ t('message.hello') }}</RichButton>
    </AppProvider>
</template>

