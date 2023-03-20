<script setup lang="ts">
import { RichButton } from '@rich/core'
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
    <div>
        <RichButton>{{ t('message.hello') }}</RichButton>
    </div>
</template>

