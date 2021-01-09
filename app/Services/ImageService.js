//TODO create methods to retrieve data and save to the State
import { ProxyState } from "../AppState.js"
import Image from "../models/Image.js"
import { api } from "./AxiosService.js"


class ImageService {
    async getImage() {
        console.log("getting image")
        let res = await api.get("images")
        console.log("this is your image", res.data.large_url)
        ProxyState.image = res.data.large_url
        console.log(ProxyState.image)
    }
}

const imageService = new ImageService();
export default imageService;