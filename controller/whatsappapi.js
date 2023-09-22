const client = require("../model/client");

const routing = async (req, res, next) => {
    await client.initialize();

    res.render("main");
};

module.exports = routing;
