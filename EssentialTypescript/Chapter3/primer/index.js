let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);
if (hatPrice == bootsPrice) {
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

let totalPrice = hatPrice + bootsPrice;
console.log(`Total Price: ${totalPrice}`);

let hat = {
    name: "Hat",
    price: 100
};

let boots = {
    name: "Boots",
    price: "100"
};

let additionalProperties = { ...hat, discounted: true};
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);

let replacedProperties = { ...hat, price: 10};
console.log(`Replaced: ${JSON.stringify(replacedProperties)}`);

let { price , ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);
console.log(price);


let myObject = {
    greeting: "Hi, there",

    getWriter() {
        return (message) => console.log(`${this.greeting}, ${message}`);
    }
}

greeting = "Hello";

let writer = myObject.getWriter();
writer("It is raining today");

let standAlone = myObject.getWriter;
let standAloneWriter = standAlone();
standAloneWriter("It is sunny today");

let hat2 = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,

    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },

    get price() {
        return this._price;
    },

    writeDetails: () => console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`)
};

hat2.writeDetails();

hat2.writeDetails.bind(hat2)();


let hat3 = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,

    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },

    get price() {
        return this._price;
    },

    writeDetails() {
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`)
    }
};

hat3.writeDetails();
hat3.price = 120;
hat3.writeDetails();

