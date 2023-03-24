import { inject } from "vue"

export const useModal = () => {
  const richModal = inject('rich-modal') as {
    openModal: (modalId: string, payload?: object) => void,
    closeModal: (modalId: string) => void,
    registerModal: (modalId: string) => void,
    modals: { value: Record<string, { open: boolean, payload: object }> }
  }

  return richModal

}


export default useModal