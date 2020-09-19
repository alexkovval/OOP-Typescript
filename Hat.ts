class Hat extends GeneralHeaddress {
    public _height: number;

    public constructor(manufacturer: string, model: string, headdressSize: number, price: number, color: string, diametr: number, height: number) {
        super(manufacturer, model, headdressSize, price, color, diametr);
        this._height = height;
    }

    public get Height() {
        return this._height;
    }
    public set Height(value: number) {
        this._height = value;
        try {
            Hat.CheckHeight(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public static CheckHeight(value: number): number {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 0 || value > 50) {
            throw new Error("Unlegal size!");
        }
        return value;
    }


    public ShowImage() :void{
        document.write("<img height=100 width=100 src = 'Images/Hat.jpg'>");

    }
    public display(): void {
        super.display();
        document.write("<br>Height: " + this._height );
    }
}