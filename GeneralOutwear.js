class GeneralOutwear extends Clothes {
    constructor(manufacturer, model, outwearSize, price, color, fabrickThickness) {
        super(manufacturer, model, price, color);
        this._fabrickThickness = fabrickThickness;
        this._outwearSize = outwearSize;
    }
    //Getter & Setter
    get FabrickThickness() {
        return this._fabrickThickness;
    }
    set FabrickThickness(value) {
        this._fabrickThickness = value;
        if (value < 0 || value > 20) {
            throw new Error("Illegal number!");
        }
    }
    get OutwearSize() {
        return this._outwearSize;
    }
    set OutwearSize(value) {
        this._outwearSize = value;
        try {
            GeneralOutwear.CheckSize(value);
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
        if (value > 56) {
            throw new Error("Must be less than 56!");
        }
        return value;
    }
    display() {
        super.display();
        document.write("<br>Fabrick Thickness: " + this._fabrickThickness + " SM");
        document.write("<br>Size: " + this._outwearSize);
    }
}
//# sourceMappingURL=GeneralOutwear.js.map