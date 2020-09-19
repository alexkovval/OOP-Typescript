class GeneralPants extends Clothes {
    constructor(manufacturer, model, pantsSize, price, color, pantsLength) {
        super(manufacturer, model, price, color);
        this._pantsLength = pantsLength;
        this._pantsSize = pantsSize;
    }
    //Getter & Setter
    get PantsLength() {
        return this._pantsLength;
    }
    set PantsLangth(value) {
        this._pantsLength = value;
        try {
            GeneralPants.CheckLength(value);
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
        if (value > 100) {
            throw new Error("Must to be less than 100!");
        }
        return value;
    }
    get PantsSize() {
        return this._pantsSize;
    }
    set PantsSize(value) {
        this._pantsSize = value;
        try {
            GeneralPants.CheckSize(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    static CheckSize(value) {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 0) {
            throw new Error("Must be more than 0!");
        }
        if (value < 36 || value > 46) {
            throw new Error("Unlegal size!");
        }
        return value;
    }
    display() {
        super.display();
        document.write("<br>Size: " + this._pantsSize);
        document.write("<br>Pantslength: " + this._pantsLength + " SM");
    }
}
//# sourceMappingURL=GeneralPants.js.map