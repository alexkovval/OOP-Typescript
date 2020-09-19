class ElegantShoes extends GeneralShoes {
    public _material: string;
    public _laces: boolean;

    public constructor(manufacturer: string, model: string, ShoesSize: number, price: number, color: string, country: string, laces: boolean, material: string) {
        super(manufacturer, model, ShoesSize, price, color, country);
        this._material = material;
        this._laces = laces;
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
    public get Laces(): boolean {
        return this._laces;
    }
    public set Laces(value: boolean) {
        this._laces = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public display(): void {
        super.display();
        document.write("<br>Textile: " + this._material );
        document.write("<br>Laces: " + this._laces );
    }
    public ShowImage(): void  {
        document.write("<img height=100 width=100 src = 'Images/ElegantShoes.jpg'>");

    }
}