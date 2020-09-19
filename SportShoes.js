class SportShoes extends GeneralShoes {
    constructor(manufacturer, model, shoesSize, price, color, country, laces, date) {
        super(manufacturer, model, shoesSize, price, color, country);
        this._date = date;
        this._laces = laces;
    }
    get Date() {
        return this._date;
    }
    set Date(value) {
        this._date = value;
        try {
            SportShoes.CheckDate(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    static CheckDate(value) {
        if (value < 0 || value > 2020) {
            throw new Error("Illegal number!");
        }
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        return value;
    }
    get Laces() {
        return this._laces;
    }
    set Laces(value) {
        this._laces = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    display() {
        super.display();
        document.write("<br>Date: " + this._date);
        document.write("<br>Laces: " + this._laces);
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/SportShoes.jpg'>");
    }
}
//# sourceMappingURL=SportShoes.js.map