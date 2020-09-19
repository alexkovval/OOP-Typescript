class Dimensions {
    constructor(length, width, height) {
        this.length = length;
        this.height = height;
        this.width = width;
    }
    get Length() {
        return this.width;
    }
    set Length(value) {
        this.width = value;
        try {
            Dimensions.CheckLength(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    static CheckLength(value) {
        if (value < 0 || value > 200) {
            throw new Error("Illegal number!");
        }
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        return value;
    }
    get Heigth() {
        return this.width;
    }
    set Heigth(value) {
        this.width = value;
        try {
            Dimensions.CheckHeigth(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    static CheckHeigth(value) {
        if (value < 0 || value > 3) {
            throw new Error("Illegal number!");
        }
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        return value;
    }
    get Width() {
        return this.width;
    }
    set Width(value) {
        this.width = value;
        try {
            Dimensions.CheckWidth(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    static CheckWidth(value) {
        if (value < 0 || value > 10) {
            throw new Error("Illegal number!");
        }
        if (isNaN) {
            throw new Error("Must be a number!");
        }
        return value;
    }
    display() {
        document.write("<br>Length: " + this.length);
        document.write("<br>Width: " + this.width);
        document.write("<br>Height: " + this.height);
    }
}
//# sourceMappingURL=Dimensions.js.map