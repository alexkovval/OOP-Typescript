abstract class GeneralOutwear extends Clothes {
    public _fabrickThickness: number;
    public _outwearSize: number;

    constructor(manufacturer: string, model: string, outwearSize: number, price: number, color: string, fabrickThickness: number) {
        super(manufacturer, model, price, color);
        this._fabrickThickness = fabrickThickness;
        this._outwearSize = outwearSize;
    }
    //Getter & Setter
    public get FabrickThickness(): number {
        return this._fabrickThickness;
    }
    public set FabrickThickness(value: number) {
        this._fabrickThickness = value;
        if (value < 0 || value > 20) {
            throw new Error("Illegal number!");
        }
    }
    public get OutwearSize(): number {
        return this._outwearSize;
    }
    public set OutwearSize(value: number) {
        this._outwearSize = value;
        try {
            GeneralOutwear.CheckSize(value);
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
        if (value > 56) {
            throw new Error("Must be less than 56!");
        }
        return value;
    }
    public display(): void {
        super.display();
        document.write("<br>Fabrick Thickness: " + this._fabrickThickness+" SM");
        document.write("<br>Size: " + this._outwearSize);
    }
}