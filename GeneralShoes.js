class GeneralShoes extends Clothes {
    constructor(manufacturer, model, ShoesSize, price, color, country) {
        super(manufacturer, model, price, color);
        this._country = country;
        this._shoesSize = ShoesSize;
    }
    //Getter & Setter
    get Country() {
        return this._country;
    }
    set Country(value) {
        this._country = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    get ShoesSize() {
        return this._shoesSize;
    }
    set ShoesSize(value) {
        this._shoesSize = value;
        try {
            GeneralShoes.CheckSize(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    static CheckSize(value) {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 36) {
            throw new Error("Must be more than 36");
        }
        if (value > 43) {
            throw new Error("Must be less than 43");
        }
        return value;
    }
    display() {
        super.display();
        document.write("<br>Size: " + this._shoesSize);
        document.write("<br>Country: " + this._country);
    }
}
//# sourceMappingURL=GeneralShoes.js.map