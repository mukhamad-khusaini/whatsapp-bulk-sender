const client = require("../model/client");

const chating = async (req, res, next) => {
    let noHp = req.body.number;
    let message = req.body.message;

    let noHpArr = noHp.split(",");

    try {
        if (noHp) {
            for (i in noHpArr) {
                let hp = `${noHpArr[i]}@c.us`;
                const user = await client.isRegisteredUser(hp);
                if (user) {
                    await client.sendMessage(hp, message);
                    console.log("Pesan berhasil terkirim. AKHRINYAA :)");
                } else {
                    res.send("No Hp tidak terdaftar di whatsapp");
                }
            }
        }

        res.send(`${noHp}`);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

module.exports = chating;
