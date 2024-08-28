//Apenas um comentario 
class FakeDb {
    constructor() {
        this.data = [{
            User: "Admin",
            Text: "ola a todos, sejam bem vindos.",
            Time: "A todo o momento"
        }]

    }
    get fullData() {
        return this.data;
    }
    newMsg({ user = "any", text }) {
        let date = new Date();
        //let time = `${date.getFullYear()}${date.getmon()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
        let time = date.getTime()
        this.data.push({ User: user, Text: text.join(" "), Time: time })
    }
}
module.exports = FakeDb;