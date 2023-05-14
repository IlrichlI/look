import { inject } from 'vue'

export const useModal = () => {
  return inject('rich-modal') as {
    openModal: (modalId: string, payload?: object) => void
    closeModal: (modalId: string) => void
    registerModal: (modalId: string) => void
    modals: { value: Record<string, { open: boolean; payload: object }> }
  }
}

export default useModal
