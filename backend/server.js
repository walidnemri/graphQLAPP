const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const {schema} = require('./schema')
const {root} = require('./rootValue')

const { graphqlHTTP } = require('express-graphql');

const cors = require('cors');

const mongoose = require('mongoose')

mongoose.set('useCreateIndex',true)

console.log('db',process.env.DB_URL)

 
const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

mongoose
  .connect("mongodb+srv://walid:bonchance@cluster0.51dex.mongodb.net/graphQL?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
  })
  .catch(err=> console.log(err))
  
