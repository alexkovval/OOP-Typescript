class GeneralGirlsClothes extends Clothes {
    constructor(manufacturer, model, girlsClothesSize, price, color, volume) {
        super(manufacturer, model, price, color);
        this._volume = volume;
        this._girlsClothesSize = girlsClothesSize;
    }
    //Getter & Setter
    get Volune() {
        return this._volume;
    }
    set Volume(value) {
        this._volume = value;
        try {
            GeneralGirlsClothes.CheckVolume(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    static CheckVolume(value) {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 0 || value > 200) {
            throw new Error("Illegal number!");
        }
        return value;
    }
    get GirlsClothsSize() {
        return this._girlsClothesSize;
    }
    set GirlsClothsSize(value) {
        this._girlsClothesSize = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    display() {
        super.display();
        document.write("<br>Volume: " + this._volume + " SM");
        document.write("<br>Size: " + this._girlsClothesSize);
    }
}
//# sourceMappingURL=GeneralGirlsClothes.js.map