class Skirt extends GeneralGirlsClothes {
    constructor(manufacturer, model, girlsClothesSize, price, color, volume, type) {
        super(manufacturer, model, girlsClothesSize, price, color, volume);
        this._type = type;
    }
    get Type() {
        return this._type;
    }
    set Type(value) {
        this._type = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    display() {
        super.display();
        document.write("<br>Type of skirt: " + this._type);
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/Skirt.jpg'>");
    }
}
//# sourceMappingURL=Skirt.js.map