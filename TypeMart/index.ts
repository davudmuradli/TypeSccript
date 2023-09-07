import products from './products';

const productName : string ='beanie';


const filteredProducts = products.filter((product) => {
  return productName === product.name;
});

if (filteredProducts.length > 0) {
  const product = filteredProducts[0];
  if (product.preOrder === true) { // Assuming preOrder is a string 'true' or 'false'
    console.log("We will send you a message when it is on the way!");
  }
  else {
  console.log(`Product '${product.name}' not found.`);
  }
  console.log(product);
  } 
