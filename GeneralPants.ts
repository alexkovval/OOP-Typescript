abstract class GeneralPants extends Clothes {
    public _pantsLength: number;
    public _pantsSize: number;

    constructor(manufacturer: string, model: string, pantsSize: number, price: number, color: string, pantsLength: number) {
        super(manufacturer, model, price, color);
        this._pantsLength = pantsLength;
        this._pantsSize = pantsSize;
    }
    //Getter & Setter
    public get PantsLength(): number {
        return this._pantsLength;
    }
    public set PantsLangth(value: number) {
        this._pantsLength = value;
        try {
            GeneralPants.CheckLength(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public static CheckLength(value: number): number {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 0) {
            throw new Error("Must be more than 0!");
        }
        if ( value > 100) {
            throw new Error("Must to be less than 100!");
        }
        return value;
    }


    public get PantsSize(): number {
        return this._pantsSize;
    }
    public set PantsSize(value: number) {
        this._pantsSize = value;
        try {
            GeneralPants.CheckSize(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }

    public static CheckSize(value: number): number {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value < 0) {
            throw new Error("Must be more than 0!");
        }
        if (value < 36 || value > 46) {
            throw new Error("Unlegal size!");
        }
        return value;
    }


    public display(): void {
        super.display();
        document.write("<br>Size: " + this._pantsSize);
        document.write("<br>Pantslength: " + this._pantsLength+" SM");
    }

}