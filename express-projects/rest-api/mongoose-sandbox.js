'use strict';

var mongoose = require("mongoose");
var db = mongoose.connection;

mongoose.connect("mongodb://localhost:27017/sandbox");
db.on("error", function(err) {
    console.error("Connection error:", err);
});

db.once("open", function() {
    console.log("DB connection successful");
    // All database communication goes here.
    var Schema = mongoose.Schema;
    var animalSchema = new Schema({
        type: String,
        size: String,
        color: String,
        mass: Number,
        name: String
    });
    var Animal = mongoose.model("Animal", animalSchema);

    var elephant = new Animal({
        type: "elephant",
        size: "big",
        color: "grey",
        mass: 6000,
        name: "Lawrence"
    });

    elephant.save(function(err) {
        if (err) console.error("Save failed:", err);
        else console.log("Saved.")
        db.close(function() {
            console.log("DB connection closed.")
        });
    });
});