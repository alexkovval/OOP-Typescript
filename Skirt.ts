class Skirt extends GeneralGirlsClothes {
    public _type;

    public constructor(manufacturer: string, model: string, girlsClothesSize: number, price: number, color: string, volume: number, type: string) {
        super(manufacturer, model, girlsClothesSize, price, color, volume);
        this._type = type;
    }

    public get Type() {
        return this._type;
    }
    public set Type(value: string) {
        this._type = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }


    public display(): void {
        super.display();
        document.write("<br>Type of skirt: " + this._type);

    }
    public ShowImage():void {
        document.write("<img height=100 width=100 src = 'Images/Skirt.jpg'>");

    }
} 