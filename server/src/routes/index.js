const express = require('express');
const { User, Seller } = require('../models');

const sellerRoutes = express.Router();

// /seller
sellerRoutes.post('/signup', async (req, res) => {
    try {
        console.log(req.body)
        const {lastName, firstName, email, phone, passwordHash} = req.body;
        
        // save user information in mongodb
        const user = await User.create({
            firstName, lastName, email, phone, passwordHash, role: "seller"
        })
        
        // save seller information in mongodb
        await Seller.create({
            user: user._id
        })

        res.json(user)
    } catch (error) {
        console.log("🚀 ~ file: index.js:13 ~ sellerRoutes.post ~ error:", error)
    }
})




module.exports = sellerRoutes