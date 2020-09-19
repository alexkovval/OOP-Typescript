class Dress extends GeneralGirlsClothes {
    public _length: number;
    public _back: boolean;

    public constructor(manufacturer: string, model: string, girlsClothesSize: number, price: number, color: string, volume: number, length: number, back: boolean) {
        super(manufacturer, model, girlsClothesSize, price, color, volume);
        this._length = length;
        this._back = back;
    }

    public get Length() {
        return this._length;
    }
    public set Length(value: number) {
        this._length = value;
        if (value < 0 || value > 3) {
            throw new Error("Illegal number!");
        }
    }

    public get Back(): boolean {
        return this._back;
    }
    public set Back(value: boolean) {
        this._back = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }


    public display(): void {
        super.display();
        document.write("<br>Length: " + this._length );
        document.write("<br>Back: " + this._back );
    }
    public ShowImage(): void {
        document.write("<img height=100 width=100 src = 'Images/Dress.jpg'>");

    }
}