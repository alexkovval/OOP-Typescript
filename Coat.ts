class Coat extends GeneralOutwear {
    public _waterproof: boolean;


    public constructor(manufacturer: string, model: string, outwearSize: number, price: number, color: string, fabrickThikness: number, waterproof: boolean) {
        super(manufacturer, model, outwearSize, price, color, fabrickThikness);
        this._waterproof = waterproof;
    }

    public get Wateproof(): boolean {
        return this._waterproof;
    }
    public set Waterproof(value: boolean) {
        this._waterproof = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }

    }

    public ShowImage():void { 
        document.write("<img height=100 width=100 src = 'Images/Coat.jpg'>");
    }
    public display(): void {
        super.display();
        document.write("<br>Waterproof: " + this._waterproof );
    }
}