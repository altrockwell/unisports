export class Brand {
  constructor(
    public id: string,
    public name: string,
    public logo: string,
  ) {}
}

export class Category {
  constructor(
    public id: string,
    public name: string,
  ) {}
}
export class Collection {
  constructor(
    public id: string,
    public name: string,
  ) {}
}

export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public brand: Brand,
    public categories: Category[],
    public collection: Collection[],
  ) {}
}

export class Variation {
  constructor() {}
}

export class VariationOption {
  constructor(
    public id: string,
    public variation: Variation,
    public category: Category,
  ) {}
}

export class ProductItem {
  constructor(
    public id: string,
    public product: Product,
    public variationOption: VariationOption,
    public qty_in_stock: number,
    public price: number,
    public image: string,
    public sku: string,
  ) {}
}
