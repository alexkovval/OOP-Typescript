class GeneralGlasses extends Accesorizes {
    constructor(manufacturer, model, price, frameColor) {
        super(manufacturer, model, price);
        this._frameColor = frameColor;
    }
    //Getter & Setter
    get FrameColor() {
        return this._frameColor;
    }
    set FrameColor(value) {
        this._frameColor = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    display() {
        super.display();
        document.write("<br>Frame Color: " + this._frameColor);
    }
}
//# sourceMappingURL=GeneralGlasses.js.map