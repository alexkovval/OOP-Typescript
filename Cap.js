class Cap extends GeneralHeaddress {
    constructor(manufacturer, model, size, price, color, diametr, printAdvertising) {
        super(manufacturer, model, size, price, color, diametr);
        this._printAdvertising = printAdvertising;
    }
    get PrintAdvertising() {
        return this._printAdvertising;
    }
    set PrintAdvertising(value) {
        this._printAdvertising = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/Cap.jpg'>");
    }
    display() {
        super.display();
        document.write("<br>Printing Advertising: " + this._printAdvertising);
    }
}
//# sourceMappingURL=Cap.js.map