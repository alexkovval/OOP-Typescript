class Test {
    static test() {
        let randomItems = +prompt("How many clothes do you want?");
        let i = 0;
        let Product = new Array(randomItems);
        for (i = 0; i < randomItems; i++) {
            Product[i] = Generator.getRandomItem(randomItems, i);
        }
        for (const item of Product) {
            item.ShowImage();
            item.display();
            item.GetPriceWithoutVat(item._price);
            item.displayBrand;
            if (item instanceof Belt) {
                document.write("<br>Color of Buckle: " + item._colorBuckle);
            }
            document.write("<hr>");
        }
    }
}
//# sourceMappingURL=Test.js.map