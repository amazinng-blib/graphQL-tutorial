export const typeDefs = `#graphql
type Game {
    id: ID!,
    title: String!,
    round: String!,
    platform: [String!]!
}

type Review {
    id: ID!,
    rating: int!,
    content: String!
}

type Author {
    id: ID!,
    name:  String!,
    verified: Boolean!
}
//  this defines the entry point of the graph and specify the return types of these entry points
type Query {
    reviews: [Reviews]
    games: [Game]
    authors: [Author]
}
`;
