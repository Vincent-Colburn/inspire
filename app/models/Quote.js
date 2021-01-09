export default class Quote {
    constructor(data) {
        this.author = data.quote.author;
        this.body = data.quote.body;
    }

    get Template() {
        return /**html */ `
    <div> 
    
    <div id ="top">
    <div id="toQuote"></div>
    <h5>${this.body}</h5>
    <div id="disbox">
    <p id="author"><a> ${this.author} </a></p>
    </div>
        `
    }
}