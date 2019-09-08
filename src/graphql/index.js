import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer, gql, PubSub } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import { resolvers } from './resolver';
import { typeDefs } from './typeDefs';
import config from 'config';



const mongourl = config.get('mongoURL');

const port = process.env.SERVICE_PORT || 3000;


const pubsub = new PubSub()

const schema = buildFederatedSchema([{ typeDefs, resolvers }])

const server = new ApolloServer({
  schema,
  context: req => ({
    ...req,
    pubsub,
  }),
  playground: {
    endpoint: '/graphql',
  },
})


mongoose.connect( mongourl, {useNewUrlParser: true}, function (err){
  if(err) {
    console.log('unable to connect to database.');
  } else{
    server
      .listen({port: port})
      .then(({mongourl}) => {
        console.log(`connected to mongoDB`)
        console.log(`Product-app is running at localhost::${port}`)
      })
  }
});
