const { Router } = require("express");
const router = Router();
const users = require("../assets/data/users");
const users_statistic = require("../assets/data/users_statistic");



const { getCurrentPage } = require("../functions/getCurrentPage");

router.post("/getUsers", async (req, res) => {
    console.log('getUser')
    const { page, elements} = JSON.parse(req.body.json);
    if (typeof page === "number" && typeof elements === "number") {
        const pageData = getCurrentPage(users, users_statistic, page, elements);
        console.log('no err')
        res.send(pageData);
    }   else {
        res.send({err: true})
    }
})

module.exports = router;