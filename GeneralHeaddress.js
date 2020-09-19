class GeneralHeaddress extends Clothes {
    constructor(manufacturer, model, headdressSize, price, color, diametr) {
        super(manufacturer, model, price, color);
        this._diametr = diametr;
        this._headdressSize = headdressSize;
    }
    //Getter & Setter
    get Diametr() {
        return this._diametr;
    }
    set Diametr(value) {
        this._diametr = value;
        if (value < 0 || value > 50) {
            throw new Error("Illegal number!");
        }
    }
    get HeaddressSize() {
        return this._headdressSize;
    }
    set HeaddressSize(value) {
        this._headdressSize = value;
        try {
            GeneralHeaddress.CheckDiametr(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    static CheckDiametr(diametr) {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (diametr < 0) {
            throw new Error("Must be more than 0!");
        }
        if (diametr > 56) {
            throw new Error("Must be less than 56!");
        }
        return diametr;
    }
    display() {
        super.display();
        document.write("<br>Diametr: " + this._diametr + " SM");
        document.write("<br>Size: " + this._headdressSize);
    }
}
//# sourceMappingURL=GeneralHeaddress.js.map