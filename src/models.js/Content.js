
class Content {

    constructor ({
        welcome = "",
        prompt = ""
    } = {}) {
        this.welcome = welcome;
        this.prompt = prompt;
    }

}

const ContentCN = new Content( {
    welcome: "你好，我是肖宇宣",
} );

const ContentEN = new Content( {
    welcome: "Hi, I am Yuxuan Xiao",
} );

export  { ContentCN, ContentEN };
