interface product_interface {
    Id: number;
    Name: string;
    Image_url: string;
    Price: number;
};

class Product implements product_interface {
    Id: number;
    Name: string;
    Image_url: string;
    Price: number;

    constructor(id: number, name: string, image_url: string, price: number) {
        this.Id = id;
        this.Name = name;
        this.Image_url = image_url
        this.Price = price
    }
}

class ProductCart extends Product {
    Description: string

    constructor(id: number, name: string, image_url: string, price: number, description: string) {
        super(id, name, image_url, price);
        this.Description = description
    }
}

class ProductCartDefault extends ProductCart {
    constructor() {
        super(0, "bitcoin", "bitcoin", 100000, "bitcoin")
    }
}

class ProductDefault extends Product {
    constructor() {
        super(0,  "bitcoin", "bitcoin", 123)
    }
}

export {Product, ProductDefault, ProductCart, ProductCartDefault}