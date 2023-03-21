import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { RichButton } from './index'

describe('RichButton', () => {
  it('renders properly', () => {
    const wrapper = mount(RichButton, { props: { type: 'secondary' } })
    expect(wrapper.text()).toContain('')
  })
})
