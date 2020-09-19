abstract class GeneralShoes extends Clothes {
    public _country: string;
    public _shoesSize: number;
    constructor(manufacturer: string, model: string, ShoesSize: number, price: number, color: string, country: string ) {
        super(manufacturer, model, price, color);
        this._country = country;
        this._shoesSize = ShoesSize;
    }
    //Getter & Setter
    public get Country(): string {
        return this._country;
    }
    public set Country(value: string) {
        this._country = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    public get ShoesSize(): number {
        return this._shoesSize;
    }
    public set ShoesSize(value: number) {
        this._shoesSize = value;
        try {
            GeneralShoes.CheckSize(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public static CheckSize(value: number): number {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 36) {
            throw new Error("Must be more than 36");
        }
        if ( value > 43) {
            throw new Error("Must be less than 43");
        }
        return value;
    }




    public display(): void {
        super.display();
        document.write("<br>Size: " + this._shoesSize);
        document.write("<br>Country: " + this._country);
    }

}