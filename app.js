const express = require('express')
const fakeDb = require("./FakeDb")
const db = new fakeDb();
const App = express()
const port = 8080
//const cors = require("cors")

App.set("view engine", 'ejs')
App.use(express.urlencoded({ extended: true }))
App.use(express.json())
//App.use(cors())


App.get('/', (req, res) => {
    res.render("index")
})

App.post("/chat", (req, res) => {

    let user = req.body.User;
    let text = req.body.Text;

    if (user == undefined || text == undefined) {
        res.sendStatus(401).send("dados invalidos")
    } else {
        db.newMsg({ user: user, text: text })
        res.sendStatus(200)
        res.statusCode = 200
        //console.log(db.fullData)
    }

})

App.get("/chat", (req, res) => {
    res.send(db.fullData)
})

App.listen(port, (error) => {
    if (error) console.log("falha ao iniciar")
    else console.log("tudo certo no local porta => " + port)
})