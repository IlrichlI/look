import type { StorybookConfig } from '@storybook/vue3-vite'
const { mergeConfig } = require('vite')
const pluginImp = require('vite-plugin-imp')

const config: StorybookConfig = {
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        ...config.define,
        global: 'window'
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true
          }
        }
      },
      resolve: {
        extensions: ['.js', '.vue']
      },
      plugins: [
        pluginImp({
          libList: [
            {
              libName: 'ant-design-vue',
              style: (name) => `ant-design-vue/es/${name}/style`
            }
          ]
        })
      ]
    })
  }
}
export default config
