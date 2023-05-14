import { inject, ref } from 'vue'

export default function useService({
  serviceName,
  actionName
}: {
  serviceName: string
  actionName: string
}): {
  mutate: (payload?: object) => Promise<any>
  data: { value: object }
  error: { value: object }
  loading: { value: boolean }
} {
  const service = inject(serviceName) as Record<string, (payload?: any) => Promise<any>>
  const data = ref<any>(null)
  const loading = ref(false)
  const error = ref<any>(null)

  const mutate = async (payload: any) => {
    loading.value = true
    try {
      const res = await service[actionName](payload)
      data.value = JSON.parse(JSON.stringify(res))
    } catch (err) {
      error.value = err
    }
    loading.value = false

    return data.value
  }

  return {
    mutate,
    data,
    loading,
    error
  }
}
