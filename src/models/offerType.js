import mongoose from 'mongoose';

var offTypeschema = new mongoose.Schema({
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
})

export const offerType = mongoose.model('offerType', offTypeschema)
