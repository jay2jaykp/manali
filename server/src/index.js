const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require('cors')
const mongoose = require("mongoose");

const {User} = require("./models");
const sellerRoutes = require('./routes')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
// body-parser - for parsing json data
app.use(express.json());
// morgan - for logging
app.use(morgan("tiny"));
// cors - for avoiding cors errors when using localhost
// if (process.env.NODE_ENV === "development") {
    // console.log('using cors')
  app.use(cors())
// }


app.post('/login', async (req, res) => {
    try {
        // find user from mongo 
        const user = await User.findOne({
            email: req.body.email,
            passwordHash: req.body.passwordHash
        }).exec()

        console.log(user)
        if (user === null) {
            res.sendStatus(401)
        } else {
            res.send(user)
        }

        
    } catch (error) {
        console.log("🚀 ~ file: index.js:31 ~ app.post ~ error:", error)
        
    }
})

app.use('/seller', sellerRoutes)

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
