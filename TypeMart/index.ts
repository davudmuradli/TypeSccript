import products from "./products";

let productName: string = "fanny pack";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAdress: string = "575 Broadway, New York City, New York";

const filteredProducts = products.filter((product) => {
  return productName === product.name;
});

if (filteredProducts.length > 0) {
  const product = filteredProducts[0];
  if (product.preOrder === true) {
    // Assuming preOrder is a string 'true' or 'false'
    console.log("We will send you a message when it is on the way!");
  } else {
    console.log(`Product '${product.name}' not found.`);
  }
}

  if (filteredProducts[0].price > 25) {
     shipping = 0;
    console.log("Your Shipping is free.");
  } else {
     shipping = 5;
    console.log(`Shipping is '${shipping}' euros.`);
  }

if(shippingAdress.match('New York')){
   taxPercent = 0.1;  
}else{
   taxPercent = 0.5;
}

taxTotal = filteredProducts[0].price * taxPercent;
total = filteredProducts[0].price + taxTotal + shipping;


console.log(`Receipt: \n Product Name: ${filteredProducts[0].name} \n Shipping Adress: ${shippingAdress} \n Price of the product: ${filteredProducts[0].price} USD \n Tax Total: ${taxTotal} USD \n Shipping: ${shipping} USD \n \n Total Amount: ${total} USD`)
