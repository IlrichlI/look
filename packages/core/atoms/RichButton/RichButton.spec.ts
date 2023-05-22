import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import { RichButton } from './index'

// you need to mock router
vi.mock('i18next-vue', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    }
  }
}))

describe('RichButton', () => {
  it('renders properly', () => {
    const wrapper = mount(RichButton, { props: { type: 'secondary' } })
    expect(wrapper.findComponent(RichButton).isVisible()).toBe(true)
  })
})
