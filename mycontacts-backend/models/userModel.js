const { default: mongoose } = require('mongoose')
const mangoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the user name"]
        },
        email: {
            type: String,
            required: [true, "Please add the user email"],
            unique: [true, "Email address already taken"]
        },
        password: {
            type: String,
            required: [true, "Please add the user password"]
        },
    },
    {
        timestamp: true
    }
    
)

module.exports = mangoose.model("User", userSchema)