class Hat extends GeneralHeaddress {
    constructor(manufacturer, model, headdressSize, price, color, diametr, height) {
        super(manufacturer, model, headdressSize, price, color, diametr);
        this._height = height;
    }
    get Height() {
        return this._height;
    }
    set Height(value) {
        this._height = value;
        try {
            Hat.CheckHeight(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    static CheckHeight(value) {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 0 || value > 50) {
            throw new Error("Unlegal size!");
        }
        return value;
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/Hat.jpg'>");
    }
    display() {
        super.display();
        document.write("<br>Height: " + this._height);
    }
}
//# sourceMappingURL=Hat.js.map