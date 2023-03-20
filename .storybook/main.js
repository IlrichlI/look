const { mergeConfig } = require('vite')
const pluginImp = require('vite-plugin-imp')

module.exports = {
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
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