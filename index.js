const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/User");
const authRoute = require("./routes/Auth");

mongoose.connect("mongodb+srv://yoye:Pass123@cluster0.r9cuqx7.mongodb.net/shop").then(() => console.log("success............")).catch((err) => {
    console.log(err);
});

app.get("/api/test", () => {
    console.log("yoye successfull");
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(5000, () => {
    console.log("backend server is running");
});

