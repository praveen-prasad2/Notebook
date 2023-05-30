const express = require("express");
const app = express();
const mongoose = require('mongoose');
const noteRouter=require("./Routes/noteRoute");
const cors=require("cors");

mongoose.connect("mongodb+srv://uglymallu:123@cluster0.jonxpqi.mongodb.net/Notebook?retryWrites=true&w=majority")


app.use(express.urlencoded({
    extended: false
}))

app.use(cors());

app.use(express.json());

app.use("/",noteRouter);

app.listen(8080, (err) => {
    if (err) {
        console.log("error");
    } else {
        console.log("success");
    }
})