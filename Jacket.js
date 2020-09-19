class Jacket extends GeneralOutwear {
    constructor(manufacturer, model, outwearSize, price, color, fabrickThikness, pockets) {
        super(manufacturer, model, outwearSize, price, color, fabrickThikness);
        this._pockets = pockets;
    }
    get Pockets() {
        return this._pockets;
    }
    set Pockets(value) {
        this._pockets = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/Jacket.jpg'>");
    }
    display() {
        super.display();
        document.write("<br>Pockets: " + this._pockets);
    }
}
//# sourceMappingURL=Jacket.js.map