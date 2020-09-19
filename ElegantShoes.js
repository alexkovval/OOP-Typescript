class ElegantShoes extends GeneralShoes {
    constructor(manufacturer, model, ShoesSize, price, color, country, laces, material) {
        super(manufacturer, model, ShoesSize, price, color, country);
        this._material = material;
        this._laces = laces;
    }
    get Material() {
        return this._material;
    }
    set Material(value) {
        this._material = value;
        try {
            Shop.CheckString(value);
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
    display() {
        super.display();
        document.write("<br>Textile: " + this._material);
        document.write("<br>Laces: " + this._laces);
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/ElegantShoes.jpg'>");
    }
}
//# sourceMappingURL=ElegantShoes.js.map