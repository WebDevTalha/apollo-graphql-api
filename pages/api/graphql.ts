import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { PrismaClient } from "@prisma/client"
import { typeDefs } from "@/graphql/schema"
import { resolvers } from "@/graphql/resolvers"
import prisma from "@/prisma/db"

export type Context = {
    prisma: PrismaClient
}

const apolloServer = new ApolloServer<Context>({
    resolvers,
    typeDefs,
})

export default startServerAndCreateNextHandler(apolloServer, {
    context: async (req, res) => ({ req, res, prisma }),
})
