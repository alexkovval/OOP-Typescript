class ButtonedShirt extends GeneralShirt {
    public _buttones: number;

    public constructor(buttones: number, manufacturer: string, model: string, shirtSize: number, price: number, color: string, sleevesLength: number) {
        super(manufacturer, model, shirtSize, price, color, sleevesLength);
        this._buttones = buttones;
    }

    public get Buttones() {
        return this._buttones;
    }
    public set Buttones(value: number) {
        this._buttones = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public display(): void {
        super.display();
        document.write("<br>Number of buttones: " + this._buttones );
    }
    public ShowImage():void {
        document.write("<img height=100 width=100 src = 'Images/ButtonedShirt.jpg'>");
    }

}