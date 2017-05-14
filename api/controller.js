const db = require('./models');

exports.someFunction = function (req, res) {
  const test = new db.Business({
    name: 'Andrew',
    imgUrl: null,
    address: '123 Test Road Los Angeles CA 90045',
    description: 'some description',
    clientBook: [{
      name: 'Client 1',
      mobileTN: '303-123-1234',
      altTN: '542-843-5812',
      email: 'someclient@gmail.com',
      purchases: [{
        item: 'Shampoo 5',
        price: 45.99,
        date: Date.now(),
      }],
      clientNotes: 'boring',
    }],
    availableServices: [{
      title: 'cut',
      description: '...',
      price: 10000,
      minutes: 90,
    }],
    allowCustom: false,
    productLine: [{
      name: 'Shampoo 5',
      description: '...',
      imageUrl: null,
      price: 45.99,
      daysToShip: 5,
    }],
  });
  test.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};
