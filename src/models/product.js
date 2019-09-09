import mongoose from 'mongoose';


const offerType_Schema = new mongoose.Schema({
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
      images:{
        type: String
      },
      rating: {
        type: String
      },
      brand: {
        type: String
      },
      offerType:[{
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
        //type : offerType_Schema
      }],
      category : {
        type : String 
      },
      allergen : [{
        type : String
      }],
      additive : [{
        type : String
      }],
      foodSafety : [{
        type : String
      }],
      packaging : [{
        type : String 
      }],
      condition : [{
        type : String
      }]
    
    
})

export const Product = mongoose.model('Product', prod_schema)
