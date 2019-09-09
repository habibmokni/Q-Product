var mongoose = require('mongoose')
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const offerTypes_Schema = new Schema({
  price: {
    type: SchemaTypes.Double
  },
  ammount: {
    type: SchemaTypes.Double
  },
  unit: {
    type: String
  },
  tax: {
    type: SchemaTypes.Double
  },
  discount: {
    type: SchemaTypes.Double
  }
});

const imagesType_Schema = new Schema({
  name: {
    type: String
  },
  resolution: {
    type: String
  }
});


const prod_schema = new Schema({
  name: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
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
    type: SchemaTypes.Double
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
