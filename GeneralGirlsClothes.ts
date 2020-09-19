abstract class GeneralGirlsClothes extends Clothes {
    public _volume: number;
    public _girlsClothesSize: number;

    constructor(manufacturer: string, model: string, girlsClothesSize: number, price: number, color: string, volume: number) {
        super(manufacturer, model, price, color);
        this._volume = volume;
        this._girlsClothesSize = girlsClothesSize;
    }
    //Getter & Setter
    public get Volune(): number {
        return this._volume;
    }
    public set Volume(value: number) {
        this._volume = value;
        try {
            GeneralGirlsClothes.CheckVolume(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public static CheckVolume(value: number): number {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 0 || value > 200) {
            throw new Error("Illegal number!");
        }
        return value;
    }
    public get GirlsClothsSize(): number {
        return this._girlsClothesSize;
    }
    public set GirlsClothsSize(value: number) {
        this._girlsClothesSize = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    public display() {
        super.display();
        document.write("<br>Volume: " + this._volume +" SM");
        document.write("<br>Size: " + this._girlsClothesSize) ;

    }

}