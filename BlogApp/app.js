//initial setup
var express         = require("express"),
app                 = express(),
bodyParser          = require("body-parser"),
mongoose            = require("mongoose");

//connect to Mongodb configure mongoose
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/blog_app');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//setup schema
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

//RESTFUL routes
app.get("/", function(req, res) {
    res.redirect("/blogs");
})

//INDEX route
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err) {
            console.log("ERROR!");
        }
        else {
            res.render("index.ejs", {blogs: blogs});
        }
    });
});

//NEW route
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

//CREATE route
app.post("/blogs", function(req, res) {
    //create blog and redirect to index
    Blog.create(req.body.blog, function(err, newBlog) {
        if(err) {
            res.render("new");
        }
        else {
            res.redirect("/blogs");
        }
    });
});

// SHOW route
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {blog:foundBlog});
        }
    });
});

app.listen(3000, process.env.IP, function() {
    console.log("server is running!");
});