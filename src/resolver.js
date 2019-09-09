import { Product } from './models/product.js';
import { offerType } from './models/offerType.js';

export const resolvers = {
  Query: {
    getAllProducts: () => Product.find(),
    getProductById: (parent, { _id }) => {
       return Product.findById(_id);
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
    createProduct: async (_, { producerID, name, image, description, longDescription, color, brand, createdAt, rating, category, allergen, additive, foodSafety, packaging, condition, offerTypes }) => {
      const newProd = new Product({ producerID, name, image, description, longDescription, color, brand, createdAt, rating, category, allergen, additive, foodSafety, packaging, condition, offerTypes })
      await newProd.save();
      return newProd;
    },
    deleteProduct: (parent, {name}) => {
      return Product.deleteOne({name})
    },


    async updateProduct(_, {_id, input}) {
      return await Product.findOneAndUpdate({_id}, input, { new: true });
    }

  }
};
