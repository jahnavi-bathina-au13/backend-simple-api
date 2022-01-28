const express = require("express")
const movies = require("./routes/movies")
const app = express()
app.use("/movies", movies)
 

app.listen(5000, function(req,res){
    console.log("server is running on port 500")
})