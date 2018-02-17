import { resolve } from "url";

const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "player",
    description:
      "Este é o meu esquema que informará todas as informações do jogador",
    fields: () => ({
      player: {
        type: GraphQLString,
        args: {
          nickname: {
            type: GraphQLString
          }
        },
        resolve: (root, args) => {
          return `Informações sobre ${args.nickname}`;
        }
      }
    })
  })
});
