class GeneralShirt extends Clothes {
    constructor(manufacturer, model, shirtSize, price, color, sleevesLength) {
        super(manufacturer, model, price, color);
        this._sleevesLength = sleevesLength;
        this._shirtSize = shirtSize;
    }
    //Getter & Setter
    get SleevesLength() {
        return this._sleevesLength;
    }
    set SleevesLangth(value) {
        this._sleevesLength = value;
        try {
            GeneralShirt.CheckLength(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    static CheckLength(value) {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 0) {
            throw new Error("Must be more than 0!");
        }
        if (value > 50) {
            throw new Error("Must be more than 50!");
        }
        return value;
    }
    get ShirtSize() {
        return this._shirtSize;
    }
    set ShirtSize(value) {
        this._shirtSize = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    display() {
        super.display();
        document.write("<br>Size: " + this._shirtSize);
        document.write("<br>Sleeveslength: " + this._sleevesLength + " SM");
    }
}
//# sourceMappingURL=GeneralShirt.js.map