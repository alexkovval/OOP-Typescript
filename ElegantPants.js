class ElegantPants extends GeneralPants {
    constructor(pockets, manufacturer, model, pantsSize, price, color, pantsLength) {
        super(manufacturer, model, pantsSize, price, color, pantsLength);
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
        document.write("<img height=100 width=100 src = 'Images/ElegantPants.jpg'>");
    }
    display() {
        super.display();
        document.write("<br>Pockets: " + this._pockets);
    }
}
//# sourceMappingURL=ElegantPants.js.map