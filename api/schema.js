const mongoose = require('mongoose');

const businessSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
  address: String,
  description: String,
  clientBook: [{
    name: String,
    mobileTN: String,
    altTN: String,
    email: String,
    appointments: [{
      businessName: String,
      startDate: Date,
      endDate: Date,
      notes: String,
      status: String,
    }],
    purchases: [{
      item: String,
      price: String,
      date: Date,
    }],
    clientNotes: String,
  }],
  availableServices: [{
    title: String,
    description: String,
    price: Number,
    minutes: Number,
  }],
  allowCustom: Boolean,
  availability: [{
    day: String,
    startTime: Date,
    endTime: Date,
  }],
  productLine: [{
    name: String,
    description: String,
    imageUrl: String,
    price: Number,
    daysToShip: Number,
  }],
});

exports.businessSchema = businessSchema;
