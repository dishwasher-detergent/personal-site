import Vue from 'vue'
const {ImageKit} = require('imagekitio-vue')

const private_api = process.env.IMAGEKIT_PRIVATE;
const public_api = process.env.IMAGEKIT_PUBLIC;
const imageKit_endpoint = process.env.IMAGEKIT_ENDPOINT;

Vue.use(ImageKit, {
  urlEndpoint: imageKit_endpoint,
  publicKey: public_api,
  authenticationEndpoint: 'https://branandtate.com/api/imageKit'
})
