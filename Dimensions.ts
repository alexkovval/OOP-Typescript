class Dimensions {
    public length: number;
    public width: number;
    public height: number;


    constructor(length: number, width: number, height: number) {
        this.length = length;
        this.height = height;
        this.width = width;
    }

    public get Length(): number {
        return this.width;
    }
    public set Length(value: number) {
        this.width = value;
        try {
            Dimensions.CheckLength(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }

    }

    public static CheckLength(value: number): number {
        if (value < 0 || value > 200) {
            throw new Error("Illegal number!");
        }
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        return value;
    }

    public get Heigth(): number {
        return this.width;
    }
    public set Heigth(value: number) {
        this.width = value;
        try {
            Dimensions.CheckHeigth(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }

    }

    public static CheckHeigth(value: number): number {
        if (value < 0 || value > 3) {
            throw new Error("Illegal number!");
        }
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        return value;
    }


    public get Width(): number {
        return this.width;
    }
    public set Width(value: number) {
        this.width = value;
        try {
            Dimensions.CheckWidth(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }

    }

    public static CheckWidth(value: number): number {
        if (value<0||value>10) {
            throw new Error("Illegal number!");
        }
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        return value;
    }

    public display() {
        document.write("<br>Length: " + this.length);
        document.write("<br>Width: " + this.width);
        document.write("<br>Height: " + this.height);

    }
}