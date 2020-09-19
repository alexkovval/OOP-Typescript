abstract class Clothes extends Shop {
    public _color: string;

    constructor(manufacturer: string, model: string, price: number, color: string, ) {
        super(price, manufacturer, model);
        this._color = color;
    }

    public get Color(): string {
        return this._color;
    }
    public set Color(value: string) {
        this._color = value;
        try {
            Shop.CheckString(value);
        }
        catch(err){
            document.write("Error!"+err.message);
        }
        
}
    





    public display(): void {
        super.display();
        document.write("<br>Color: " + this._color);
    }


}