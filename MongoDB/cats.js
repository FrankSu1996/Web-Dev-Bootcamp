var mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/cat_app', {useNewUrlParser: true});

var catSchema = new mongoose.Schema({
    name: String, 
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

/*var george = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "evil"
});

george.save(function(err, cat) {
    if(err) {
        console.log("something went wrong!!");
    }
    console.log("just saved cat to the db");
    console.log(cat);
});*/

//retrieve cats from db
Cat.find({}, function(err, cats) {
    if(err) {
        console.log("Error!");
        console.log(err);
    }
    else {
        console.log("All the cats...");
        console.log(cats);
    }
});