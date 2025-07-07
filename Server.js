const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');


app.get("/", (req,res)=>{
    let sitename = "Express Server";
    let content = "This is a simple Express server serving static files.";
        res.render("index" , {sitename:sitename, content: content });

})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})