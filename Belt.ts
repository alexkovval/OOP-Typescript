class Belt extends Accesorizes {
    public _colorBelt: string;
    public _colorBuckle: string;
    public _material: string;
    public dimensions: Dimensions;


    constructor(manufacturer: string, model: string, price: number, colorBelt: string, colorBuckle: string, material: string,width:number,heigth:number,length:number ) {
        super(manufacturer, model, price);
        this._colorBelt = colorBelt; 
        this._colorBuckle = colorBuckle;
        this._material = material;
        this.dimensions = new Dimensions(length, width, heigth);
    }
    //Getter & Setter

    public get ColorBuckle(): string {
        return this._colorBuckle;
    }
    public set ColorBuckle(value: string) {
        this._colorBuckle = value;
        try {
            Clothes.CheckString(value);
        }
        catch(err){
            document.write("Error!"+err.message);
        }
    }
    public get ColorBelt(): string {
        return this._colorBelt;
    }
    public set ColorBelt(value: string) {
        this._colorBelt = value;
        try {
            Clothes.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }


    public display(): void {
        super.display();
        document.write("<br>Material: " + this._material );
        document.write("<br>Belt Color: " + this._colorBelt );
        document.write("<br>Buckle Color: " + this._colorBuckle);
        this.dimensions.display();
    }
    public ShowImage(): void {
        document.write("<img height=100 width=100 src = 'Images/Belt.jpg'>");
    }

}