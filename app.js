const express = require('express')
const fakeDb = require("./FakeDb")
const db = new fakeDb();
const app = express()
const server = require("http").createServer(app)
const io = require("socket.io")

const Config = require("./config");
const cors = require("cors")

app.set("view engine", 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set(ServerStart())
app.use(cors())

app.get("/", (req, res) => {
    res.render("home")
})

app.get('/chat', (req, res) => {
    res.render("index")
})

app.get("/chats", (req, res) => {
    res.send(db.fullData)
})

app.post("/chat", (req, res) => {
    let user = req.body.user;
    let text = req.body.text;
    if (user == undefined || text == undefined) {
        res.sendStatus(401).send("dados invalidos")
    } else {
        db.newMsg({ user: user, text: text })
        res.sendStatus(200)
        res.statusCode = 200
        console.log(db.fullData)
    }
})


async function ServerStart() {
    const { ip, port } = await Config()
    server.listen(port, (error) => {
        console.log(`Iniciando servidor`);
        if (error) console.log("falha ao iniciar")
        else {
            console.log(`servidor iniciado ${ip}:${port}`)

        }
    })
}