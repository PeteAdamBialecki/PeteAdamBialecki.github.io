class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    };
    drawHTMLToken() {
        let newDiv = document.createElement("div");
    };
    htmlToken() {

    };
}
