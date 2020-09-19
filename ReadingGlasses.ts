class ReadingGlasses extends GeneralGlasses {
    public _distanceToRead: number;

    public constructor(manufacturer: string, model: string, price: number, frameColor: string, distanceToRead: number) {
        super(manufacturer, model, price, frameColor);
        this._distanceToRead = distanceToRead;
    }

    public get DistanceToRead() {
        return this._distanceToRead;
    }
    public set DistanceToRead(value: number) {
        this._distanceToRead = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/ReadingGlasses.jpg'>");

    }
    public display(): void {
        super.display();
        document.write("<br>Recommented distance to read: " + this._distanceToRead );
    }
}