const mongoose = require('mongoose')

const Schema = mongoose.Schema
const schema = new Schema({
    name:{ type:String ,required: true},
    age:{ type:String ,required: true}
})
const User = mongoose.model('User',schema)


module.exports = {
    User
}