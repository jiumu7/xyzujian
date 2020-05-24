
export class Product {
    constructor(
        public sku: string,
        public name: String,
        public imgageUrl: string,
        public department: string[],
        public price: number) {
    }
}