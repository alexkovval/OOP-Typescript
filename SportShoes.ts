class SportShoes extends GeneralShoes {
    public _date;
    public _laces;

    public constructor(manufacturer: string, model: string, shoesSize: number, price: number, color: string, country: string, laces: boolean, date: number) {
        super(manufacturer, model, shoesSize, price, color, country);
        this._date = date;
        this._laces = laces;
    }

    public get Date() {
        return this._date;
    }
    public set Date(value: number) {
        this._date = value;
       try {
            SportShoes.CheckDate(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }

    }

    public static CheckDate(value: number): number {
        if (value < 0 || value > 2020) {
            throw new Error("Illegal number!");
        }
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        return value;
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
        document.write("<br>Date: " + this._date);
        document.write("<br>Laces: " + this._laces );

    }
    public ShowImage():void {
        document.write("<img height=100 width=100 src = 'Images/SportShoes.jpg'>");

    }

}