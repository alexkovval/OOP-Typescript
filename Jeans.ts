class Jeans extends GeneralPants {
    public _cuts: boolean;

    public constructor(cuts: boolean, manufacturer: string, model: string, pantsSize: number, price: number, color: string, pantsLength: number) {
        super(manufacturer, model, pantsSize, price, color, pantsLength);
        this._cuts = cuts;
    }

    public get Cuts() {
        return this._cuts;
    }
    public set Cuts(value: boolean) {
        this._cuts = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public display(): void {
        super.display();
        document.write("<br>Cuts: " + this._cuts );
    }
    public ShowImage():void {
        document.write("<img height=100 width=100 src = 'Images/Jeans.jpg'>");

    }

}