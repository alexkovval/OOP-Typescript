class Coat extends GeneralOutwear {
    constructor(manufacturer, model, outwearSize, price, color, fabrickThikness, waterproof) {
        super(manufacturer, model, outwearSize, price, color, fabrickThikness);
        this._waterproof = waterproof;
    }
    get Wateproof() {
        return this._waterproof;
    }
    set Waterproof(value) {
        this._waterproof = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/Coat.jpg'>");
    }
    display() {
        super.display();
        document.write("<br>Waterproof: " + this._waterproof);
    }
}
//# sourceMappingURL=Coat.js.map