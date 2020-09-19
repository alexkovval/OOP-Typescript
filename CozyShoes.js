class CozyShoes extends GeneralShoes {
    constructor(manufacturer, model, ShoesSize, price, color, country, laces, foothold) {
        super(manufacturer, model, ShoesSize, price, color, country);
        this._foothold = foothold;
        this._laces = laces;
    }
    get Foothold() {
        return this._foothold;
    }
    set Foothold(value) {
        this._foothold = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    get Laces() {
        return this._laces;
    }
    set Laces(value) {
        this._laces = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/CozyShoes.jpg'>");
    }
    display() {
        super.display();
        document.write("<br>Foothold: " + this._foothold);
        document.write("<br>Laces: " + this._laces);
    }
}
//# sourceMappingURL=CozyShoes.js.map