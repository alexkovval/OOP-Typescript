abstract class GeneralHeaddress extends Clothes {
    public _diametr: number;
    public _headdressSize: number;
    constructor(manufacturer: string, model: string, headdressSize: number, price: number, color: string, diametr: number, ) {
        super(manufacturer, model, price, color);
        this._diametr = diametr;
        this._headdressSize = headdressSize;
    }
    //Getter & Setter
    public get Diametr(): number {
        return this._diametr;
    }
    public set Diametr(value: number) {
        this._diametr = value;
        if (value < 0 || value > 50) {
            throw new Error("Illegal number!");
        }
    }
    public get HeaddressSize(): number {
        return this._headdressSize;
    }
    public set HeaddressSize(value: number) {
        this._headdressSize = value;
        try {
            GeneralHeaddress.CheckDiametr(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public static CheckDiametr(diametr: number): number {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (diametr<0) {
            throw new Error("Must be more than 0!");
        }
        if (diametr>56) {
            throw new Error("Must be less than 56!");
        }
        return diametr;
    }


    public display(): void {
        super.display();
        document.write("<br>Diametr: " + this._diametr+" SM" );
        document.write("<br>Size: " + this._headdressSize );
    }
}