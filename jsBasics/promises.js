const cart = ["apple", "banana", "mango"];

const validateCart = () => {
  return false;
};

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

const promise = createOrder(cart);

console.log("promise", promise);

promise
  .then((data) => {
    console.log("data", data);
    //   proceedToPayment(orderId);
  })
  .catch((err) => {
    console.log("err", err);
  });
