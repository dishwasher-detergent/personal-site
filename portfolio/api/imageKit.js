const ImageKit = require("imagekit");

export default async (req, res) => {
    const imagekit = new ImageKit({
        urlEndpoint: process.env.IMAGEKIT_ENDPOINT,
        publicKey: process.env.IMAGEKIT_PUBLIC,
        privateKey: process.env.IMAGEKIT_PRIVATE
    })
    var result = imagekit.getAuthenticationParameters();
    return res.status(200).json(result);
}
