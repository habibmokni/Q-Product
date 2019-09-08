import { Product } from './models/product.js';
import { offerType } from './models/offerType.js';

export const resolvers = {
  Query: {
    getAllProducts: () => Product.find(),
    getProductById: (parent, { id }) => {
       return Product.findById(id);
     },
    getProductsByProducer: (parent, { producerID }) => {
      return Product.find({producerID});
    },
    getProductsBycolor: (parent, { color }) => {
      return Product.find({color});
    },
    getProductsBycategory: (parent, { category }) => {
      return Product.find({category});
    },
    getProductsBybrand: (parent, { brand }) => {
      return Product.find({brand});
    },
    getProductsByname: (parent, { name }) => {
      return Product.find({name});
    },

  },
  Mutation: {
    createProduct: async (_, { producerID, name, images, description, longDescription, color, brand, createdAt, rating, category, allergen, additive, foodSafety, packaging, condition, offerTypes }) => {
      const newProd = new Product({ producerID, name, images, description, longDescription, color, brand, createdAt, rating, category, allergen, additive, foodSafety, packaging, condition, offerTypes })
      await newProd.save();
      return newProd;
    },
    deleteProduct: (parent, {name}) => {
      return Product.deleteOne({name})
    }
  },
}