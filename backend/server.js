const { ApolloServer, gql } = require("apollo-server");

const books = [
    {
        title: "斜陽",
        author: "太宰治",
    },
    {
        title: "鼻",
        author: "芥川龍之介",
    },
];

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        test: [Book]
    }
`;

const resolvers = {
    Query: {
        test: () => books,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});