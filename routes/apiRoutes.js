const path = require("path");

module.exports = function (app) {
    app.get("/api/workout", ({ body }, res) => {
        console.log('body==>>', body);
    })
}