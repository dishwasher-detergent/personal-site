const ImageKit = require("imagekit");

const private_api = process.env.NUXT_IMAGEKIT_PRIVATE;
const public_api = process.env.NUXT_IMAGEKIT_PUBLIC;
const imageKit_endpoint = process.env.NUXT_IMAGEKIT_ENDPOINT;

export default async (req, res) => {
    const imagekit = new ImageKit({
        urlEndpoint: imageKit_endpoint,
        publicKey: public_api,
        privateKey: private_api
    })
    var result = imagekit.getAuthenticationParameters();
    return res.status(200).json(result);
}