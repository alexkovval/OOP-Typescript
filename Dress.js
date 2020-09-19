class Dress extends GeneralGirlsClothes {
    constructor(manufacturer, model, girlsClothesSize, price, color, volume, length, back) {
        super(manufacturer, model, girlsClothesSize, price, color, volume);
        this._length = length;
        this._back = back;
    }
    get Length() {
        return this._length;
    }
    set Length(value) {
        this._length = value;
        if (value < 0 || value > 3) {
            throw new Error("Illegal number!");
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
    display() {
        super.display();
        document.write("<br>Length: " + this._length);
        document.write("<br>Back: " + this._back);
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/Dress.jpg'>");
    }
}
//# sourceMappingURL=Dress.js.map