class HighHeels extends GeneralShoes {
    constructor(manufacturer, model, shoesSize, price, color, country, heelstype) {
        super(manufacturer, model, shoesSize, price, color, country);
        this._heelstype = heelstype;
    }
    get Heelstype() {
        return this._heelstype;
    }
    set Heelstype(value) {
        this._heelstype = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    display() {
        super.display();
        document.write("<br>Heelstype: " + this._heelstype);
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/HighHeels.jpg'>");
    }
}
//# sourceMappingURL=HighHeels.js.map