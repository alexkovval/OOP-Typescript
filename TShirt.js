class TShirt extends GeneralShirt {
    constructor(writing, manufacturer, model, shirtSize, price, color, sleevesLength) {
        super(manufacturer, model, shirtSize, price, color, sleevesLength);
        this._writing = writing;
    }
    get Writing() {
        return this._writing;
    }
    set Writing(value) {
        this._writing = value;
        if (value == '') {
            document.write(null);
        }
    }
    display() {
        super.display();
        document.write("<br>Writing: " + this._writing);
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/Tshirt.jpg'>");
    }
}
//# sourceMappingURL=TShirt.js.map