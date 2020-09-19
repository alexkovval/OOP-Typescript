class Shorts extends GeneralPants {
    public _material;

    public constructor(material: string, manufacturer: string, model: string, pantsSize: number, price: number, color: string, pantsLength: number) {
        super(manufacturer, model, pantsSize, price, color, pantsLength);
        this._material = material;
    }

    public get Material() {
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
        document.write("<img height=100 width=100 src = 'Images/Shorts.jpg'>");

    }

}