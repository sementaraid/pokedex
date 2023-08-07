import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://graphqlpokemon.favware.tech/v7',
  cache: new InMemoryCache(),
  connectToDevTools: true
})