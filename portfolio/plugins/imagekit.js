import Vue from 'vue'
const {ImageKit} = require('imagekitio-vue')

Vue.use(ImageKit, {
  urlEndpoint: imageKit_endpoint,
  publicKey: public_api,
  authenticationEndpoint: 'https://beta.kennethbass.com/api/imageKit'
})