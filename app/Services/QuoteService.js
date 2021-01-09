//TODO create methods to retrieve data and update the State
import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuoteService {
    async getQuotes() {
        console.log("Getting Quotes");
        let res = await api.get("quotes")
        console.log("initial quotes", res.data)
        ProxyState.quotes = new Quote(res.data);
    }

}

const quoteService = new QuoteService();
export default quoteService;