const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 450 }
];

function calculateTotalWithDiscount(products, discount) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    total -= total * discount;
    return total;
}

const total = calculateTotalWithDiscount(products, 0.1);
console.log("Total with discount:", total);
