const exp = require("express");
const userApp = exp.Router();
const bcryptjs = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const verifyToken = require('../Middlewares/verifyToken');
require("dotenv").config();

let usercollection;

userApp.use((req, res, next) => {
  if (!usercollection) {
    usercollection = req.app.get("userscollection");
  }
  next();
});

//user creation
userApp.post(
  "/user",
  expressAsyncHandler(async (req, res) => {
    const newUser = req.body;
    const dbuser = await usercollection.findOne({ username: newUser.username });
    if (dbuser !== null) {
      res.send({ message: "User existed" });
    } else {
      const hashedPassword = await bcryptjs.hash(newUser.password, 6);
      newUser.password = hashedPassword;
      await usercollection.insertOne(newUser);
      res.send({ message: "User created" });
    }
  })
);

//user login
userApp.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const userCred = req.body;
    const dbuser = await usercollection.findOne({
      username: userCred.username,
    });
    if (dbuser === null) {
      res.send({ message: "Invalid username" });
    } else {
      const status = await bcryptjs.compare(userCred.password, dbuser.password);
      if (status === false) {
        res.send({ message: "Invalid password" });
      } else {
        const signedToken = jwt.sign(
          { username: dbuser.username },
          process.env.SECRET_KEY,
          { expiresIn: '1d' }
        );
        res.send({
          message: "login success",
          token: signedToken,
          user: dbuser,
        });
      }
    }
  })
);

module.exports = userApp;
