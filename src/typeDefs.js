    import { gql } from 'apollo-server';

    export const typeDefs = gql`
    type Query{
        getAllProducts: [Product!]!
        getProductById(id: ID!): Product
        getProductsByProducer(producerID: String!): [Product!]!
        getProductsBycolor(color: String!): [Product!]!
        getProductsBycategory(category: String!): [Product!]
        getProductsBybrand(brand: String!): [Product!]
        getProductsByname(name: String!): [Product!]
    }

    type Mutation{
        createProduct(
            producerID: String! 
            name: String! 
            description: String!
            longDescription: String!
            createdAt: DateTime!
            offerTypes:[OfferTypeInput!]!
            brand: String!
            category: Category! 
            allergen:[Allergen!] 
            additive: [Additive!]
            foodSafety: [FoodSafety!]
            color: String!
            packaging: [Packaging!]
            condition:[Condition!]
            images: [ImageInput!]
            ): Product!
        deleteProduct(name: String!): Product
        updateProduct(
            id: ID!
            name: String 
            description: String 
            brand: String 
            color: String 
        ): Product!
    }

    type Product{ 
    id: ID!
    producerID: String!
    name: String!
    createdAt: DateTime! 
    description: String!
    longDescription: String!
    offerTypes:[OfferType!]!
    brand: String 
    rating: Float
    category: Category! 
    allergen:[Allergen!] 
    additive: [Additive!]
    foodSafety: [FoodSafety!]
    color: String!
    packaging: [Packaging!]
    condition:[Condition!]
    images: [Image!]!
    }


    type Image {
        name: String! 
        resolutions: String!
    } 

    input ImageInput {
        name: String!
        resolutions: String!
    } 


   type OfferType{
        price: Float!
        amount: Float!
        unit: Unit
        tax: Float!
        discount: Float!
    }

 

    input OfferTypeInput{ 
        price: Float! 
        amount: Float! 
        unit: Unit 
        tax: Float! 
        discount: Float! 
    } 

    scalar DateTime

    enum Unit{
    PIECR
    GRAM
    MILILITER
    }
    enum Category{
    CEREAL
    CEREAL_PRODUCTS
    POTATO
    POTATO_PRODUCTS
    FRUIT
    FRUIT_PRODUCTS
    DRIED_FRUIT
    VEGETABLES
    PULSES
    NUTS
    SEEDS
    MEAT
    MEAT_PRODUCTS
    FISH
    FISH_PRODUCTS
    MILK
    DAIRY_PRODUCTS
    EGG
    EGG_DISHES
    OILS
    FATS
    CONFECTIONERY
    SUGAR
    PRESERVES
    READY_MEALS
    SAUCES
    SEASONINGS
    SPICES
    HERBS
    NON_ALCOHOLIC
    ALCOHOLIC
    }

    enum Allergen {
    GLUTEN
    CRUSTACEAN
    EGG
    FISH
    PEANUTS
    SOYBEAN
    MILK
    LACTOSE
    NUT
    CELERY
    MUSTARD
    SESAME_SEEDS
    SULFUR_DIOXIDE
    SULFITE
    LUPIN
    }

    enum Additive {
    DYE
    PRESERVATIVE
    ANTIOXIDANT
    FLAVOUR_ENHANCER
    SULFURED
    BLACKENED
    WAXED
    PHOSPHATE
    SWEETENER
    PHENYLALANINE
    }

    enum FoodSafety {
    ALCOHOL
    GELATIN
    PORK
    MEATLESS
    }

    enum Packaging {
    PLASTIC
    PAPER
    }

    enum Condition {
    MOIST
    FROZEN
    COOLED
    DRIED
    RTP
    RIPE
    RAW
    FERMENTED
    }
    `;
