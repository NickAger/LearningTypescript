export type Product = {
    id: number,
    name: string,
    description: string,
    category: string,
    price: number
}

export class OrderLine {
    constructor(public product: Product, public quantity: number) {
        // no statements required
    }

    get total(): number {
        return this.product.price * this.quantity
    }
}

export class Order {
    private lines = new Map<number, OrderLine>();

    constructor(initialLines?: OrderLine[]) {
        if (initialLines) {
            initialLines.forEach(ol => this.lines.set(ol.product.id, ol))
        }
    }

    public addProduct(prod: Product, quantity: number) {
        if (this.lines.has(prod.id)) {
            if (quantity === 0) {
                this.removeProduct(prod.id)
            } else {
                this.lines.get(prod.id)!.quantity += quantity
            }
        } else {
            this.lines.set(prod.id, new OrderLine(prod, quantity))
        }
    }

    public removeProduct(id: number) {
        this.lines.delete(id)
    }

    get orderLines(): OrderLine[] {
        return [...this.lines.values()]
    }

    get productCount(): number {
        return [...this.lines.values()].reduce((total, ol) => total += ol.quantity, 0)
    }

    get total(): number {
        return [...this.lines.values()].reduce((total, ol) => total += ol.total, 0)
    }

    // this is a hack to ensure we have a new object which can cause a rerender
    // see: 
    // * https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render
    // * https://stackoverflow.com/questions/58784464/usestate-not-rerendering-when-update-function-is-called-inside-onclick-function
    // * https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/
    public makeACopy() : Order {
        return new Order(this.orderLines)
    }
}
