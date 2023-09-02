const { default: mongoose } = require("mongoose")
const mangoose = require("mongoose")

const contactShcema = mangoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        name : {
            type : String,
            required : [true,"please add the contact name"]
        },
        email : {
            type : String,
            required : [true,"please add the valid email"]
        },
        phone : {
            type : String,
            required : [true,"please add the contact phone number"]
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mangoose.model("Contact", contactShcema)