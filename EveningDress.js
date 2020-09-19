class EveningDress extends GeneralGirlsClothes {
    constructor(manufacturer, model, girlsClothesSize, price, color, volume, length, back, material) {
        super(manufacturer, model, girlsClothesSize, price, color, volume);
        this._length = length;
        this._back = back;
        this._material = material;
    }
    get Length() {
        return this._length;
    }
    set Length(value) {
        this._length = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    get Back() {
        return this._back;
    }
    set Back(value) {
        this._back = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
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
        document.write("<br>Length: " + this._length);
        document.write("<br>Back: " + this._back);
        document.write("<br>Textile: " + this._material);
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/EveningDress.jpg'>");
    }
}
//# sourceMappingURL=EveningDress.js.map