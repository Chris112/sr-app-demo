import "reflect-metadata"; // reflect-metadata must be first line
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core/dist/plugin/landingPage/default";
import { ApolloServer } from "apollo-server-express";
import "dotenv";
import express from "express";
import http from "http";
import {
  buildSchema,
  MiddlewareFn,
  MiddlewareInterface,
  NonEmptyArray,
} from "type-graphql";
// import MyResolvers from "./resolvers";
import Container, { Service } from "typedi";
import { RequestResolver } from "./resolvers/Requests";

const app = express();
const httpServer = http.createServer(app);

async function main() {
  const schema = await buildSchema({
    resolvers: [RequestResolver],
    container: Container,
  });

  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      req,
      //   prisma: global.prisma,
    }),
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault,
    ],
  });

  // More required logic for integrating with Express
  await server.start();
  app.get("/", (req, res) => {
    res.sendStatus(200);
  });
  server.applyMiddleware({
    app,
  });

  const endpoint = `http://localhost:4000/graphql`;

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at ${endpoint}`);
}

main();
