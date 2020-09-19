class ElegantPants extends GeneralPants {
    public _pockets: number;

    public constructor(pockets: number, manufacturer: string, model: string, pantsSize: number, price: number, color: string, pantsLength: number) {
        super(manufacturer, model, pantsSize, price, color, pantsLength);
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
        document.write("<img height=100 width=100 src = 'Images/ElegantPants.jpg'>");

    }
    public display(): void {
        super.display();
        document.write("<br>Pockets: " + this._pockets );
    }

}