class ReadingGlasses extends GeneralGlasses {
    constructor(manufacturer, model, price, frameColor, distanceToRead) {
        super(manufacturer, model, price, frameColor);
        this._distanceToRead = distanceToRead;
    }
    get DistanceToRead() {
        return this._distanceToRead;
    }
    set DistanceToRead(value) {
        this._distanceToRead = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/ReadingGlasses.jpg'>");
    }
    display() {
        super.display();
        document.write("<br>Recommented distance to read: " + this._distanceToRead);
    }
}
//# sourceMappingURL=ReadingGlasses.js.map