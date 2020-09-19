class Generator {
    static getRandomItem(items, i) {
        let v = 0;
        if (items > 20) {
            v = Math.floor(Math.random() * 20) + 1;
        }
        if (items <= 20) {
            v = i + 1;
        }
        switch (v) {
            case 1: return new Belt(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomPrice(), this.RandomColor(), this.RandomColor(), this.RandomAccesorizesMaterial(), this.RandomBeltWidth(), this.RandomBeltHeight(), this.RandomBeltLength());
            case 2: return new Blousse(this.RandomGeneralMaterial(), this.RandomManufacturerClassic(), this.RandomModel(), this.RandomClothsSize(), this.RandomPrice(), this.RandomColor(), this.RandomSleevesLength());
            case 3: return new ButtonedShirt(this.RandomButtones(), this.RandomManufacturerClassic(), this.RandomModel(), this.RandomClothsSize(), this.RandomPrice(), this.RandomColor(), this.RandomSleevesLength());
            case 4: return new Cap(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomHeaddressSize(), this.RandomPrice(), this.RandomColor(), this.RandomDiametr(), this.RandomBoolean());
            case 5: return new Coat(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomClothsSize(), this.RandomPrice(), this.RandomColor(), this.RandomThickness(), this.RandomBoolean());
            case 6: return new CozyShoes(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomShoesSize(), this.RandomPrice(), this.RandomColor(), this.RandomCountry(), this.RandomBoolean(), this.RandomBoolean());
            case 7: return new ElegantPants(this.RandomPockets(), this.RandomManufacturerClassic(), this.RandomModel(), this.RandomPantsSize(), this.RandomPrice(), this.RandomColor(), this.RandomPantsLength());
            case 8: return new ElegantShoes(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomShoesSize(), this.RandomPrice(), this.RandomColor(), this.RandomCountry(), this.RandomBoolean(), this.RandomAccesorizesMaterial());
            case 9: return new EveningDress(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomClothsSize(), this.RandomPrice(), this.RandomColor(), this.RandomVolume(), this.RandomPantsLength(), this.RandomBoolean(), this.RandomGeneralMaterial());
            case 10: return new Hat(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomHeaddressSize(), this.RandomPrice(), this.RandomColor(), this.RandomDiametr(), this.RandomHeight());
            case 11: return new HighHeels(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomShoesSize(), this.RandomPrice(), this.RandomColor(), this.RandomCountry(), this.RandomHighHeels());
            case 12: return new Jacket(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomClothsSize(), this.RandomPrice(), this.RandomColor(), this.RandomThickness(), this.RandomPockets());
            case 13: return new ReadingGlasses(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomPrice(), this.RandomColor(), this.RandomDistanceToRead());
            case 14: return new Skirt(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomClothsSize(), this.RandomPrice(), this.RandomColor(), this.RandomVolume(), this.RandomTypeSkirt());
            case 15: return new SportShoes(this.RandomManufacturerSport(), this.RandomModel(), this.RandomShoesSize(), this.RandomPrice(), this.RandomColor(), this.RandomCountry(), this.RandomBoolean(), this.RandomDate());
            case 16: return new SunGlasses(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomPrice(), this.RandomColor(), this.RandomColor());
            case 17: return new TShirt(this.Writing(), this.RandomManufacturerClassic(), this.RandomModel(), this.RandomClothsSize(), this.RandomPrice(), this.RandomColor(), this.RandomSleevesLength());
            case 18: return new CozyShoes(this.RandomManufacturerClassic(), this.RandomModel(), this.RandomShoesSize(), this.RandomPrice(), this.RandomColor(), this.RandomCountry(), this.RandomBoolean(), this.RandomBoolean());
            case 19: return new Jeans(this.RandomBoolean(), this.RandomManufacturerClassic(), this.RandomModel(), this.RandomPantsSize(), this.RandomPrice(), this.RandomColor(), this.RandomPantsLength());
            case 20: return new Shorts(this.RandomGeneralMaterial(), this.RandomManufacturerClassic(), this.RandomModel(), this.RandomPantsSize(), this.RandomPrice(), this.RandomColor(), this.RandomPantsLength());
        }
    }
    static RandomBoolean() {
        let value;
        switch (Math.floor(Math.random() * 2) + 1) {
            case 1:
                value = true;
                break;
            case 2:
                value = false;
                break;
        }
        return value;
    }
    static RandomHeight() {
        let value = Math.floor(Math.random() * 20) + 5;
        return value;
    }
    static RandomBeltHeight() {
        let value = Math.floor(Math.random() * 3) + 1;
        return value;
    }
    static RandomBeltWidth() {
        let value = Math.floor(Math.random() * 10) + 1;
        return value;
    }
    static RandomBeltLength() {
        let value = Math.floor(Math.random() * 200) + 1;
        return value;
    }
    static RandomDate() {
        let value = Math.floor(Math.random() * 2020) + 2018;
        return value;
    }
    static RandomDistanceToRead() {
        let value = Math.floor(Math.random() * 150) + 20;
        return value;
    }
    static RandomPockets() {
        let value = Math.floor(Math.random() * 4) + 1;
        return value;
    }
    static RandomHeaddressSize() {
        let value = Math.floor(Math.random() * 65) + 54;
        return value;
    }
    static RandomShoesSize() {
        let value = Math.floor(Math.random() * 43) + 36;
        return value;
    }
    static RandomThickness() {
        let value = Math.floor(Math.random() * 65) + 6;
        return value;
    }
    static RandomButtones() {
        let value = Math.floor(Math.random() * 20) + 7;
        return value;
    }
    static RandomSleevesLength() {
        let value = Math.floor(Math.random() * 65) + 6;
        return value;
    }
    static RandomPantsLength() {
        let value = Math.floor(Math.random() * 95) + 15;
        return value;
    }
    static RandomDiametr() {
        let value = Math.floor(Math.random() * 55) + 40;
        return value;
    }
    static RandomPrice() {
        let value = Math.floor(Math.random() * 500) + 200;
        return value;
    }
    static RandomVolume() {
        let value = Math.floor(Math.random() * 200) + 70;
        return value;
    }
    static RandomClothsSize() {
        let value = Math.floor(Math.random() * 52) + 34;
        return value;
    }
    static RandomPantsSize() {
        let value = Math.floor(Math.random() * 46) + 34;
        return value;
    }
    static RandomTypeSkirt() {
        let value;
        switch (Math.floor((Math.random() * 2) + 1)) {
            case 1:
                value = "short";
                break;
            case 2:
                value = "long";
                break;
        }
        return value;
    }
    static RandomHighHeels() {
        let value;
        switch (Math.floor((Math.random() * 3) + 1)) {
            case 1:
                value = "low";
                break;
            case 2:
                value = "middle";
                break;
            case 3:
                value = "high";
                break;
        }
        return value;
    }
    static RandomAccesorizesMaterial() {
        let value;
        switch (Math.floor(Math.random() * 3) + 1) {
            case 1:
                value = "Leather";
                break;
            case 2:
                value = "Nylon";
                break;
            case 3:
                value = "Synthetics";
                break;
        }
        return value;
    }
    static Writing() {
        let value;
        switch (Math.floor(Math.random() * 4) + 1) {
            case 1:
                value = "Today is that day";
                break;
            case 2:
                value = "Perfect";
                break;
            case 3:
                value = "This person will win";
                break;
            case 4: value = null;
        }
        return value;
    }
    static RandomSportsShoesMaterial() {
        let value;
        switch (Math.floor(Math.random() * 2) + 1) {
            case 1:
                value = "Nylon";
                break;
            case 2:
                value = "Synthetics";
                break;
        }
        return value;
    }
    static RandomGeneralMaterial() {
        let value;
        switch (Math.floor(Math.random() * 3) + 1) {
            case 1:
                value = "Cotton";
                break;
            case 2:
                value = "Synthetics";
                break;
            case 3:
                value = "Silk";
                break;
        }
        return value;
    }
    static RandomCountry() {
        let value;
        switch (Math.floor(Math.random() * 9) + 1) {
            case 1:
                value = "France";
                break;
            case 2:
                value = "German";
                break;
            case 3:
                value = "Ukraine";
                break;
            case 4:
                value = "USA";
                break;
            case 5:
                value = "United Kindom";
                break;
            case 6:
                value = "China";
                break;
            case 7:
                value = "Japan";
                break;
            case 8:
                value = "Korea";
                break;
            case 9:
                value = "Israel";
                break;
        }
        return value;
    }
    static RandomModel() {
        let value;
        switch (Math.floor(Math.random() * 2) + 1) {
            case 1:
                value = "New Collection";
                break;
            case 2:
                value = "Outlet";
                break;
        }
        return value;
    }
    static RandomColor() {
        let value;
        switch (Math.floor(Math.random() * 10) + 1) {
            case 1:
                value = "black";
                break;
            case 2:
                value = "yellow";
                break;
            case 3:
                value = "pink";
                break;
            case 4:
                value = "orange";
                break;
            case 5:
                value = "blue";
                break;
            case 6:
                value = "violet";
                break;
            case 7:
                value = "grey";
                break;
            case 8:
                value = "red";
                break;
            case 9:
                value = "green";
                break;
            case 10:
                value = "mint";
                break;
        }
        return value;
    }
    static RandomManufacturerSport() {
        let value;
        switch (Math.floor(Math.random() * 4) + 1) {
            case 1:
                value = "Adidas";
                break;
            case 2:
                value = "Nike";
                break;
            case 3:
                value = "New Balance";
                break;
            case 4:
                value = "Fila";
                break;
        }
        return value;
    }
    static RandomManufacturerClassic() {
        let value;
        let v = Math.floor(Math.random() * 4) + 1;
        switch (v) {
            case 1:
                value = "Gucci";
                break;
            case 2:
                value = "Jimmy Choo";
                break;
            case 3:
                value = "Chanel";
                break;
            case 4:
                value = "Louis Vuitton";
                break;
        }
        return value;
    }
}
//# sourceMappingURL=Generator.js.map