if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()

const { graphqlHTTP } = require('express-graphql')

// const schema = require('./schema1')
const schema = require('./schema2')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`))