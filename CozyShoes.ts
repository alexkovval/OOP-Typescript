class CozyShoes extends GeneralShoes {
    public _foothold: boolean;
    public _laces: boolean;

    public constructor(manufacturer: string, model: string, ShoesSize: number, price: number, color: string, country: string, laces: boolean, foothold: boolean) {
        super(manufacturer, model, ShoesSize, price, color, country);
        this._foothold = foothold;
        this._laces = laces;
    }
    public get Foothold(): boolean {
        return this._foothold;
    }
    public set Foothold(value: boolean) {
        this._foothold = value;
        try {
            Shop.CheckBoolean(value);
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

    public ShowImage():void {
        document.write("<img height=100 width=100 src = 'Images/CozyShoes.jpg'>");

    }
    public display(): void {
        super.display();
        document.write("<br>Foothold: " + this._foothold );
        document.write("<br>Laces: " + this._laces );
    }
}