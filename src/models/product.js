import mongoose from 'mongoose';


const offerTypes_Schema = new mongoose.Schema({
  price: {
    type: String
  },
  ammount: {
    type: String
  },
  unit: {
    type: String
  },
  tax: {
    type: String
  },
  discount: {
    type: String
  }
});

const imagesType_Schema = new mongoose.Schema({
  name: {
    type: String
  },
  resolution: {
    type: String
  }
});


const prod_schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  createdAt: {
    type: String
  },
  producerID: {
    type: String
  },
  description: {
    type: String
  },
  longDescription: {
    type: String
  },
  color: {
    type: String
  },
  images: {
    type: [imagesType_Schema]
  },
  rating: {
    type: String
  },
  brand: {
    type: String
  },
  offerTypes: {
    type: [offerTypes_Schema]
  },
  category: {
    type: String
  },
  allergen: [{
    type: String
  }],
  additive: [{
    type: String
  }],
  foodSafety: [{
    type: String
  }],
  packaging: [{
    type: String
  }],
  condition: [{
    type: String
  }]


})

export const Product = mongoose.model('Product', prod_schema)
