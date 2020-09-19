class Brand {
    constructor(manufacturer, model) {
        this._manufacturer = manufacturer;
        this._model = model;
    }
    get Manufacturer() {
        return this._manufacturer;
    }
    set Manufacturer(value) {
        this._manufacturer = value;
        try {
            Shop.CheckString(value);
        }
        catch (_a) {
            document.write("Must be a string!");
        }
    }
    get Model() {
        return this._model;
    }
    set Model(value) {
        this._model = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    get Brand() {
        let brand = new Brand(this._manufacturer, this._model);
        return brand;
    }
    display() {
        document.write("<br>Manufacturer: " + this._manufacturer + " <br>Model: " + this._model);
    }
    displayBrand() {
        document.write("<br>Brand: 1.Manufacturer: " + this._manufacturer + " 2.Model: " + this._model);
    }
}
//# sourceMappingURL=Brand.js.map