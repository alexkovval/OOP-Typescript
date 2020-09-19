abstract class GeneralShirt extends Clothes {
    public _sleevesLength: number;
    public _shirtSize: number;

    constructor(manufacturer: string, model: string, shirtSize: number, price: number, color: string, sleevesLength: number) {
        super(manufacturer, model, price, color);
        this._sleevesLength = sleevesLength;
        this._shirtSize = shirtSize;
    }
    //Getter & Setter
    public get SleevesLength(): number {
        return this._sleevesLength;
    }
    public set SleevesLangth(value: number) {
        this._sleevesLength = value;
        try {
            GeneralShirt.CheckLength(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public static CheckLength(value: number): number {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 0) {
            throw new Error("Must be more than 0!");
        }
        if ( value > 50) {
            throw new Error("Must be more than 50!");
        }
        return value;
    }

    public get ShirtSize(): number {
        return this._shirtSize;
    }
    public set ShirtSize(value: number) {
        this._shirtSize = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }



    public display(): void {
        super.display();
        document.write("<br>Size: " + this._shirtSize);
        document.write("<br>Sleeveslength: " + this._sleevesLength+" SM");
    }

}