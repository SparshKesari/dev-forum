import {GraphQLCLient} from "graphql-request"
export {gql} from "graphql-request"

export const hasuraAdminClient = new GraphQLCLient(
    process.env.NEXT_PUBLIC_HASURA_API_ENDPOINT,
    {
        headers:{
            'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET
        }
    });