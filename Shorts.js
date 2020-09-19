class Shorts extends GeneralPants {
    constructor(material, manufacturer, model, pantsSize, price, color, pantsLength) {
        super(manufacturer, model, pantsSize, price, color, pantsLength);
        this._material = material;
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
    display() {
        super.display();
        document.write("<br>Textile: " + this._material);
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/Shorts.jpg'>");
    }
}
//# sourceMappingURL=Shorts.js.map