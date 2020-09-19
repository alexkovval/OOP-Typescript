class ButtonedShirt extends GeneralShirt {
    constructor(buttones, manufacturer, model, shirtSize, price, color, sleevesLength) {
        super(manufacturer, model, shirtSize, price, color, sleevesLength);
        this._buttones = buttones;
    }
    get Buttones() {
        return this._buttones;
    }
    set Buttones(value) {
        this._buttones = value;
        try {
            Shop.CheckNumber(value);
        }
        catch (err) {
            document.write("Error!" + err.message);
        }
    }
    display() {
        super.display();
        document.write("<br>Number of buttones: " + this._buttones);
    }
    ShowImage() {
        document.write("<img height=100 width=100 src = 'Images/ButtonedShirt.jpg'>");
    }
}
//# sourceMappingURL=ButtonedShirt.js.map