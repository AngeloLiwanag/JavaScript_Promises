function orderSupplies(item) {
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        warehouse = {
          paint: {
            product: 'Neon Green Paint',
            directions: () => 'mix it!'
          },
          brush: {
            product: 'Horsehair brush',
            directions: () => 'start painting!'
          },
          tarp: {
            product: 'A large tarp',
            directions: () => 'cover the floor!',
          }
        };
        if (item in warehouse) {
            resolve(warehouse[item]);
        } else {
            reject(new Error(`Item '${item}' is out of stock!`));
        }
      }, deliveryTime);
    });
}
function receivedItem(item){
    console.log(`Received ${item.product}, time to ${item.directions()}`);
}

const handleError = error => console.log(error.message);
const tarp = orderSupplies('tarp');
const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const roller = orderSupplies('roller').catch(handleError);

Promise.all([tarp, paint, brush])
  .then(items => items.forEach(receivedItem))
  .catch(error => console.log(error.message));

orderSupplies(tarp)