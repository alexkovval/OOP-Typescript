class Jeans extends GeneralPants {
    constructor(cuts, manufacturer, model, pantsSize, price, color, pantsLength) {
        super(manufacturer, model, pantsSize, price, color, pantsLength);
        this._cuts = cuts;
    }
    get Cuts() {
        return this._cuts;
    }
    set Cuts(value) {
        this._cuts = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    display() {
        super.display();
        document.write("<br>Cuts: " + this._cuts);
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/Jeans.jpg'>");
    }
}
//# sourceMappingURL=Jeans.js.map