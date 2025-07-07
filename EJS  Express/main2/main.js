const express = require('express');
const app = express();
const port = 3000;

// app.use(express.static('public'));

app.get('/', (req, res) => {
        console.log("Hello World!");
        res.send("Hello World!");

})
app.post('/', (req, res) => {
        console.log("Hello Kaise ho!");
        res.send("Hello kaise ho !");

})

app.put('/', (req, res) => {
        console.log("Hey PUT Function!");
        res.send("Hii I am PUT Function!");

})

app.get("/", (req, res) => {
        console.log("Hello I am main");
        res.send("Hello I am get");
})

app.get('/api', (req , res) => {
        console.log("harshit")
        res.json({a:'Harshit' , b:'Saxena' , c:'Vaibhav'});
})

app.listen(port, () => {
        console.log(`Example app listening on port : ${port}`);
})