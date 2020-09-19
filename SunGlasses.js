class SunGlasses extends GeneralGlasses {
    constructor(manufacturer, model, price, frameColor, glassColor) {
        super(manufacturer, model, price, frameColor);
        this._glassColor = glassColor;
    }
    get GlassColor() {
        return this._glassColor;
    }
    set GlassColor(value) {
        this._glassColor = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    display() {
        super.display();
        document.write("<br>Glass Color: " + this._glassColor);
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/SunGlasses.jpg'>");
    }
}
//# sourceMappingURL=SunGlasses.js.map