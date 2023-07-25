export class Product {
    public name: string;
    public price: number;
    public stored: number;
    public description: string;

    constructor(name: string, price: number, stored: number, description: string) {
        this.name = name;
        this.price = price;
        this.stored = stored;
        this.description = description;
    }
}