const {User} = require('./models/user')
const root = {
    hello: () => 'Hello world!',
    createUser: async ({ name, age }) => {
        console.log('ok')
        const newUser = new User({name, age})
        await newUser.save();
        console.log(newUser)
        return newUser
    
    },
    users: async () => {
        const users =  await User.find()
        return users
    }

};


module.exports = {
    root
}