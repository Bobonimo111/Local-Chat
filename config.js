
async function getIp() {
    return await fetch("http://meuip.com/api/meuip.php", {
        method: "GET",
    })
        .then(Response => Response.text())
        .then(data => { return data })
}

async function config() {
    return {
        domain: "192.168.0.105",
        ip: await getIp(),
        port: 8080
    }
}
/*
async function main() {
    console.log(await config())
}
main()
*/
module.exports = config;