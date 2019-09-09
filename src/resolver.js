import { Product } from './models/product.js';

export const resolvers = {
  Query: {
    getAllProducts: () => Product.find(),
    getProductById: (parent, { _id }) => {
       return Product.findById(_id);
     },
    getProductsByProducer: (parent, { producerID }) => {
      return Product.find({producerID});
    },
    getProductsByColor: (parent, { color }) => {
      return Product.find({color});
    },
    getProductsByCategory: (parent, { category }) => {
      return Product.find({category});
    },
    getProductsByBrand: (parent, { brand }) => {
      return Product.find({brand});
    },
    getProductsByName: (parent, { name }) => {
      return Product.find({name});
    },

  },
  Mutation: {
    createProduct: async (_, { producerID, name, images, description, longDescription, color, brand, rating, category, allergen, additive, foodSafety, packaging, condition, offerTypes }) => {
      const newProd = new Product({ producerID, name, images, description, longDescription, color, brand, rating, category, allergen, additive, foodSafety, packaging, condition, offerTypes })
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
