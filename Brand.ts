class Brand {
    public _manufacturer: string;
    public _model: string;

    public constructor(manufacturer: string, model: string) {
        this._manufacturer = manufacturer;
        this._model = model;
    }
    public get Manufacturer(): string {
        return this._manufacturer;
    }
    public set Manufacturer(value: string) {
        this._manufacturer = value;
        try {
            Shop.CheckString(value);
        }
        catch{
            document.write("Must be a string!");
        }

    }
    public get Model(): string {
        return this._model;
    }
    public set Model(value: string) {
        this._model = value;
        try {
            Shop.CheckString(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }

    }


    public get Brand(): Brand {
        let brand = new Brand(this._manufacturer, this._model);
        return brand;
    }

    public display(): void {
        document.write("<br>Manufacturer: " + this._manufacturer + " <br>Model: " + this._model);
    }
    public displayBrand(): void {
        document.write("<br>Brand: 1.Manufacturer: " + this._manufacturer + " 2.Model: " + this._model);
    }
}