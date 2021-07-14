import Vue from 'vue'
const {ImageKit} = require('imagekitio-vue')

const private_api = process.env.NUXT_IMAGEKIT_PRIVATE;
const public_api = process.env.NUXT_IMAGEKIT_PUBLIC;
const imageKit_endpoint = process.env.NUXT_IMAGEKIT_ENDPOINT;

Vue.use(ImageKit, {
  urlEndpoint: imageKit_endpoint,
  publicKey: public_api,
  authenticationEndpoint: 'https://beta.kennethbass.com/api/imageKit'
})