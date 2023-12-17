const express = require('express')
const fakeDb = require("./FakeDb")
const db = new fakeDb();
const app = express()
const server_ = require("http").createServer(app)
const { Server } = require("socket.io")
const io = new Server(server_)

const Config = require("./Config");
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

io.on('connection', (socket) => {
    socket.on("sendMessage", (value) => {
        io.emit("renderMessage", true)
    })
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
        //console.log(db.fullData)
    }
})


async function ServerStart() {
    const { ip, port, domain } = await Config()
    server_.listen(port, (error) => {
        console.log(`Iniciando servidor`);
        if (error) console.log("falha ao iniciar")
        else {
            console.log(`servidor iniciado ${domain}:${port}`)

        }
    })
}