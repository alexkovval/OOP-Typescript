class Clothes extends Shop {
    constructor(manufacturer, model, price, color) {
        super(price, manufacturer, model);
        this._color = color;
    }
    get Color() {
        return this._color;
    }
    set Color(value) {
        this._color = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    display() {
        super.display();
        document.write("<br>Color: " + this._color);
    }
}
//# sourceMappingURL=Clothes.js.map