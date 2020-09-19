class SunGlasses extends GeneralGlasses {
    public _glassColor;

    public constructor(manufacturer: string, model: string, price: number, frameColor: string, glassColor: string) {
        super(manufacturer, model, price, frameColor);
        this._glassColor = glassColor;
    }

    public get GlassColor() {
        return this._glassColor;
    }
    public set GlassColor(value: string) {
        this._glassColor = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }



    public display(): void {
        super.display();
        document.write("<br>Glass Color: " + this._glassColor);
    }
    public ShowImage() :void{
        document.write("<img height=100 width=100 src = 'Images/SunGlasses.jpg'>");

    }
}