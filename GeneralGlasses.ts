abstract class GeneralGlasses extends Accesorizes {

    public _frameColor: string;

    constructor(manufacturer: string, model: string, price: number, frameColor: string, ) {
        super(manufacturer, model, price);
        this._frameColor = frameColor;
    }
    //Getter & Setter
    public get FrameColor(): string {
        return this._frameColor;
    }
    public set FrameColor(value: string) {
        this._frameColor = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public display() {
        super.display();
        document.write("<br>Frame Color: " + this._frameColor );
    }

}