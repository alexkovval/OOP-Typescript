class Shop extends Brand {
    constructor(price, manufacturer, model) {
        super(manufacturer, model);
        this._price = price;
    }
    get Price() {
        return this._price;
    }
    set Price(value) {
        this._price = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    static CheckString(value) {
        if (value != '') {
            throw new Error("Must be a string!");
        }
        return value;
    }
    static CheckBoolean(value) {
        if (value == true || value == false) {
        }
        else {
            throw new Error("Must be a string!");
        }
        return value;
    }
    static CheckNumber(value) {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 0 || value > 100) {
            throw new Error("Must be more than 0!");
        }
        return value;
    }
    display() {
        document.write("<br>Price:" + this._price + " NIS");
    }
    GetPriceWithoutVat(value) {
        value = value * 0.83;
        document.write("<br>Price without Vat: " + value + " NIS");
    }
}
//# sourceMappingURL=Shop.js.map