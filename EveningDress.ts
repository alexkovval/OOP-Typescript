class EveningDress extends GeneralGirlsClothes {
    public _length: number;
    public _back: boolean;
    public _material: string;

    public constructor(manufacturer: string, model: string, girlsClothesSize: number, price: number, color: string, volume: number, length: number, back: boolean, material: string) {
        super(manufacturer, model, girlsClothesSize, price, color, volume);
        this._length = length;
        this._back = back;
        this._material = material;
    }

    public get Length() {
        return this._length;
    }
    public set Length(value: number) {
        this._length = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    public get Back() {
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
        document.write("<br>Length: " + this._length );
        document.write("<br>Back: " + this._back );
        document.write("<br>Textile: " + this._material);
    }
    public ShowImage():void {
        document.write("<img height=100 width=100 src = 'Images/EveningDress.jpg'>");

    }
}