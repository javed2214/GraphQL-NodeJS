const { default: axios } = require('axios')
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql')

const SmapleAPI = new GraphQLObjectType({
    name: 'MyAPI',
    fields: () => ({
        userId: { type: GraphQLInt },
        title: { type: GraphQLString },
        completed: { type: GraphQLBoolean }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        data: {
            type: new GraphQLList(SmapleAPI),
            resolve(parent, args){
                return axios.get('https://jsonplaceholder.typicode.com/todos')
                    .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})