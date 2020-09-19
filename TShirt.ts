class TShirt extends GeneralShirt {
    public _writing;

    public constructor(writing: string, manufacturer: string, model: string, shirtSize: number, price: number, color: string, sleevesLength: number) {
        super(manufacturer, model, shirtSize, price, color, sleevesLength);
        this._writing = writing;
    }

    public get Writing() {
        return this._writing;
    }
    public set Writing(value: string) {
        this._writing = value;
        if (value=='') {
            document.write(null);
        }
    }

    public display(): void {
        super.display();
        document.write("<br>Writing: " + this._writing );
    }

    public ShowImage():void {
        document.write("<img height=100 width=100 src = 'Images/Tshirt.jpg'>");

    }
}