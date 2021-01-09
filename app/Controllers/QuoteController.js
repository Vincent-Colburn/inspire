import quoteService from "../Services/QuoteService.js"
import { ProxyState } from "../AppState.js"
//TODO Create methods for constructor, and rendering the quote to the page
function _drawQuotes() {
    console.log("drawing Quotes")
    let quotes = ProxyState.quotes
    let template = ''
    if (quotes) {
        template = ProxyState.quotes.Template
        // console.log("Quote controller draw", template)
        document.getElementById("quotes").innerHTML = template;
    }

}


export default class QuoteController {
    constructor() {
        ProxyState.on("quotes", _drawQuotes);
        this.getQuotes()
    }

    getQuotes() {
        try {
            quoteService.getQuotes()
        } catch (error) {
            console.error(error)
        }
    }

}