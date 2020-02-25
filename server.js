let express = require("express");
let pseudo = require("./data/pseudo")
var localStorage = require('localStorage')

let app = express()

let bodyParser = require('body-parser')

app.set("view engine", "ejs")


//middelware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/assets", express.static("public"))


//Routes

app.get('/', (request, response) => {

    response.render("pages/index", {test: "salut"})

})

app.post('/', (request, response) => {

    if(request.body.pseudo === undefined || request.body.pseudo === ""){
        response.render("pages/index", {error: "Veuillez entrer un pseudo"})
    }

    pseudo.create(request.body.pseudo, function(){})

    response.redirect("/posts");

})

app.get("/posts", (request, response) => {
    console.log(localStorage.getItem('author'))
    response.render("pages/posts", {author: localStorage.getItem('author')})
})


app.listen(800)