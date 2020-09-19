class Jacket extends GeneralOutwear {
    public _pockets: number;

    public constructor(manufacturer: string, model: string, outwearSize: number, price: number, color: string, fabrickThikness: number, pockets: number) {
        super(manufacturer, model, outwearSize, price, color, fabrickThikness);
        this._pockets = pockets;
    }

    public get Pockets() {
        return this._pockets;
    }
    public set Pockets(value: number) {
        this._pockets = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }


    public ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/Jacket.jpg'>");

    }
    public display(): void {
        super.display();
        document.write("<br>Pockets: " + this._pockets );
    }
}