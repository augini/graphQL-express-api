import express from 'express';
import graphqlHTTP from 'express-graphql';
import graphql from 'graphql';

const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql;
const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: { type: GraphQLString, resolve: () => 'Hello World' },
    }),
  }),
});

app.use(
  '/graphql',
  graphqlHTTP.graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000, () => console.log('Server started'));
