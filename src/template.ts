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
    Description: string

    constructor(id: number, name: string, image_url: string, price: number, description: string) {
        this.Id = id;
        this.Name = name;
        this.Image_url = image_url
        this.Price = price
        this.Description = description
    }
}
class ProductDefault extends Product {
    constructor() {
        super(1, "bitcoin", "bitcoin", 100000, "bitcoin")
    }
}

class ProductView implements product_interface {
    Id: number;
    Name: string;
    Image_url: string;
    Price: number;
    
    constructor(id: number, name: string, image_url: string, price: number) {
        this.Id = id;
        this.Name = name;
        this.Image_url = image_url;
        this.Price = price
    }
}

export {ProductView, ProductDefault, Product}