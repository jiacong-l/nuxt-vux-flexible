const vuxLoader = require('vux-loader')
const webpack = require('webpack')

module.exports = {
  head: {
    title: 'mobileApp',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8' } //响应样式
    ]
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  //设置跨域
  proxy: [
    [
      '/api',
      {
        target: 'url',
        pathRewrite: { '^/api': '' }
      }
    ]
  ],

  //css
  css: [
    '@/assets/css/main.css',
    'vux/src/styles/reset.less',
    'vux/src/styles/1px.less'
  ],

  plugins: [
    { src: '~/plugins/prototype', ssr: false },
    { src: '~/plugins/vux-plugins', ssr: false },
    { src: '~/plugins/vux-components', ssr: true }
  ],

  loading: { color: '#3B8070' },

  build: {
    postcss: [
      require('postcss-px2rem')({
        remUnit: 75
      })
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const configs = vuxLoader.merge(config, {
        options: {
          ssr: true
        },
        plugins: ['vux-ui']
      })
      return configs
    }
  }
}
