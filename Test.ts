﻿class Test {


    public static test(): void {
        let randomItems = +prompt("How many clothes do you want?");
        let i = 0;
        let Product = new Array<Shop>(randomItems);
        for (i = 0; i < randomItems; i++) {
                Product[i] = Generator.getRandomItem(randomItems,i);
        }

            for (const item of Product) {
                item.ShowImage();
                item.display();
                item.GetPriceWithoutVat(item._price);
                item.displayBrand;
                if (item instanceof Belt) {
                    document.write("<br>Color of Buckle: " + (item as Belt)._colorBuckle);
                }
                document.write("<hr>");


            }
        }
      
            
        

    }
