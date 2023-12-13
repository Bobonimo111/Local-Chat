
class FakeDb {
    constructor() {
        this.data = [{
            Name: "admin",
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
        let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
        this.data.push({ User: user, Text: text, Time: time })
    }
}
module.exports = FakeDb;