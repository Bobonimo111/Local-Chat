
class FakeDb {
    constructor() {
        this.data = [{
            User: "Admin",
            Text: "ola a todos, sejam bem vindos."
        }]

    }
    get fullData() {
        return this.data;
    }
    get lastChat() {
        let chat = this.data;
        return chat[chat.length - 1]
    }
    newMsg({ user = "any", text }) {
        let date = new Date();
        //let time = `${date.getFullYear()}${date.getmon()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
        let time = date.getTime()
        this.data.push({ User: user, Text: text, Time: time })
    }
}
module.exports = FakeDb;