// const paint = new Promise((resolve, reject) => {
//     orderSupplies('paint', item => {
//       resolve(item);
//     });
// });

const paint = new Promise((resolve, reject) => {
  orderSupplies('paint', resolve);
});

const brush = new Promise((resolve, reject) =>{
  orderSupplies('brush', resolve);
})

paint
  .then(item => {
    // handle item
    receivedItem(item);
  })
  .catch(error => {
    // handle error
    console.log(error.message);
  });
brush
  .then(item => {
    // handle item
    receivedItem(item);
  })
  .catch(error => {
    // handle error
    console.log(error.message);
  });

// A promise has two methods to interact with and handle responses: 
//    then - when the promise resolves, it will call then.
//    catch - if there is a promblem and it rejects, it will call catch.

paint
  .then(item => {
    // handle item
    receivedItem(item);
    brush
      .then(item => {
        // handle item
        receivedItem(item);
      })
      .catch(error => {
        // handle error
        console.log(error.message);
      });
  })
  .catch(error => {
    // handle error
    console.log(error.message);
  });

// This does not affect how wer order items, only when we handle the response. 

paint
  .then(item => {
    // handle item
    receivedItem(item);
    return brush
      .then(item => {
        // handle item
        receivedItem(item);
      });
  })
  .catch(error => {
    // handle error
    console.log(error.message);
  });

// Promises can chain off themselves or other promises. All we need to do is return a promise from within a handler.

paint
  .then(item => {
    // handle item(paint)
    receivedItem(item);
    return brush;
  })
  .then(item => {
    // handle item(brush)
    receivedItem(item);
  })
  .catch(error => {
    // handle error
    console.log(error.message);
  });

// If we wanted to clean up paints handler further we can move brushes then into the chain.

paint
  .then(item => {
    // handle item
    receivedItem(item);
  })
  .then(() => brush)
  .then(item => {
    // handle item
    receivedItem(item);
  })
  .catch(error => {
    // handle error
    console.log(error.message);
  });

// We can move brush entirely out of the paint handler.

paint
  .then(receivedItem)
  .then(() => brush)
  .then(receivedItem)
  .catch(error => console.log(error.message));

// Cleaned up and added a tarp.

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

const tarp = new Promise((resolve, reject) => {
  orderSupplies('tarp', resolve);
});
tarp
  .then(receivedItem)
  .then(() => paint)
  .then(receivedItem)
  .then(() => brush)
  .then(receivedItem)
  .catch(error => console.log(error.message));

