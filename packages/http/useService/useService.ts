import type { AxiosResponse } from "axios"
import { computed, inject, ref } from "vue"

export default function useService({ serviceName, actionName }: { serviceName: string, actionName: string }) {

    const service = inject(serviceName) as Record<string, (payload?: any) => Promise<any>>
    const data = ref<any>(null)
    const loading = ref(false)
    const error = ref<any>(null)

    const mutate = async (payload: any) => {
        loading.value = true
        try {
            const res = service ? (await service[actionName](payload)) as AxiosResponse<any> : { data: null }
            data.value = res.data
        } catch (err) {
            error.value = err
        }
        loading.value = false
    }


    return {
        mutate,
        data: computed(() => data.value).value,
        loading: computed(() => loading.value).value,
        error: computed(() => error.value).value
    }
}