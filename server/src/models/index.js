
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        enum: ["buyer", "seller", "admin"],
        default: "buyer",
        required: true,
    },
});

const User = mongoose.model("User", UserSchema);


const SellerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
        required: true,
    }})

const Seller = mongoose.model("Seller", SellerSchema);



module.exports = { Seller, User };