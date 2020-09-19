class Blousse extends GeneralShirt {
    constructor(material, manufacturer, model, shirtSize, price, color, sleevesLength) {
        super(manufacturer, model, shirtSize, price, color, sleevesLength);
        this._material = material;
    }
    get Materrial() {
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
        document.write("<img height=100 width=100 src = 'Images/Blousse.jpg'>");
    }
}
//# sourceMappingURL=Blousse.js.map