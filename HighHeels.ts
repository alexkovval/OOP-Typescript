class HighHeels extends GeneralShoes {
    public _heelstype: string;

    public constructor(manufacturer: string, model: string, shoesSize: number, price: number, color: string, country: string, heelstype: string) {
        super(manufacturer, model, shoesSize, price, color, country);
        this._heelstype = heelstype;
    }

    public get Heelstype() {
        return this._heelstype;
    }
    public set Heelstype(value: string) {
        this._heelstype = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public display(): void {
        super.display();
        document.write("<br>Heelstype: " + this._heelstype );
    }
    public ShowImage():void {
        document.write("<img height=100 width=100 src = 'Images/HighHeels.jpg'>");

    }
}