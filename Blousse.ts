class Blousse extends GeneralShirt {
    public _material: string;

    public constructor(material: string, manufacturer: string, model: string, shirtSize: number, price: number, color: string, sleevesLength: number) {
        super(manufacturer, model, shirtSize, price, color, sleevesLength);
        this._material = material;
    }

    public get Materrial() {
        return this._material;
    }
    public set Material(value: string) {
        this._material = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public display(): void {
        super.display();
        document.write("<br>Textile: " + this._material );
    }
    public ShowImage():void {
        document.write("<img height=100 width=100 src = 'Images/Blousse.jpg'>");
    }


}