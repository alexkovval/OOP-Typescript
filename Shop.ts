abstract class Shop extends Brand {
    public _price: number;

    constructor(price, manufacturer, model) {
        super(manufacturer, model);
        this._price = price;
    }


    public get Price(): number {
        return this._price;
    }
    public set Price(value: number) {
        this._price = value;
        try {
            Shop.CheckNumber(value);
        }
        catch(err){
            document.write("Error!"+err.message);
        }

    }

    public static CheckString(value: string):string {
        if (value != '') {
            throw new Error("Must be a string!");
        }
        return value;
    }
    public static CheckBoolean(value: boolean): boolean {
        if (value == true || value == false) {
        }
        else {
            throw new Error("Must be a string!");
        }
        return value;
    }

    public static CheckNumber(value: number): number {
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        if (value<0||value>100) {
            throw new Error("Must be more than 0!");
        }
        return value;
    }

    public display(): void {
        document.write("<br>Price:" + this._price+" NIS");
    }

    public abstract ShowImage(): void;

    

    
    public GetPriceWithoutVat(value: number) {
        value = value * 0.83;
        document.write("<br>Price without Vat: " + value+" NIS");
    }


}