function calculateTax(amount: number, format: boolean, discount = 0, ...extraFees :number[]) : string | number {
    const calcAmount = (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

// enum Product { Hat = "hat", Gloves = "gloves", Umbrella = "umbrella", Socks = "socks"}
// const enum Product { Hat, Gloves , Umbrella }

let hat = { name: "Hat", price: 100}
let gloves = { name: "Gloves", price: 75}
let umbrella = { name: "Umbrella" }

let products: {name: string, price: number []} = [hat, gloves, umbrella]



let taxNumber = calculateTax(100, false);
let taxString = calculateTax(100, true);
// let taxBoolean = calculateTax(100, false) as boolean;
