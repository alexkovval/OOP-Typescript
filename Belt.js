class Belt extends Accesorizes {
    constructor(manufacturer, model, price, colorBelt, colorBuckle, material, width, heigth, length) {
        super(manufacturer, model, price);
        this._colorBelt = colorBelt;
        this._colorBuckle = colorBuckle;
        this._material = material;
        this.dimensions = new Dimensions(length, width, heigth);
    }
    //Getter & Setter
    get ColorBuckle() {
        return this._colorBuckle;
    }
    set ColorBuckle(value) {
        this._colorBuckle = value;
        try {
            Clothes.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    get ColorBelt() {
        return this._colorBelt;
    }
    set ColorBelt(value) {
        this._colorBelt = value;
        try {
            Clothes.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    display() {
        super.display();
        document.write("<br>Material: " + this._material);
        document.write("<br>Belt Color: " + this._colorBelt);
        document.write("<br>Buckle Color: " + this._colorBuckle);
        this.dimensions.display();
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/Belt.jpg'>");
    }
}
//# sourceMappingURL=Belt.js.map