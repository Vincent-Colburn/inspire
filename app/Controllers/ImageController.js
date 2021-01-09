import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js"
import image from "../models/Image.js"

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
function _drawBackground() {
    let test = ProxyState.image
    // console.log("TEST RIGHT HURRRR", test)

    document.body.style.backgroundImage = `url('${test}')`;
    document.body.style.backgroundColor = "#f3f3f3"
}

export default class ImageController {
    constructor() {
        ProxyState.on("image", _drawBackground)
        imageService.getImage()
    }
    getImage() {
        try {
            imageService.getImage()
        } catch (error) {
            console.error(error)
        }
    }
}