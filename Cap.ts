class Cap extends GeneralHeaddress {
    public _printAdvertising: boolean;

    public constructor(manufacturer: string, model: string, size: number, price: number, color: string, diametr: number, printAdvertising: boolean) {
        super(manufacturer, model, size, price, color, diametr);
        this._printAdvertising = printAdvertising;
    }

    public get PrintAdvertising() {
        return this._printAdvertising;
    }
    public set PrintAdvertising(value: boolean) {
        this._printAdvertising = value;
        try {
            Shop.CheckBoolean(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }

    
    }


    public ShowImage():void {
        document.write("<img height=100 width=100 src = 'Images/Cap.jpg'>");

    }
    public display(): void {
        super.display();
        document.write("<br>Printing Advertising: " + this._printAdvertising );
    }
}