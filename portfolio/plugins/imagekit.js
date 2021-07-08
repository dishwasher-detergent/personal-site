import Vue from 'vue'
const {ImageKit} = require('imagekitio-vue')

Vue.use(ImageKit, {
  urlEndpoint: process.env.NUXT_IMAGEKIT_ENDPOINT,
  publicKey: process.env.NUXT_IMAGEKIT_PUBLIC,
  authenticationEndpoint: 'https://kennethbass.com/api/imageKit'
})
