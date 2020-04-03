const { Router } = require("express");
const router = Router();
const users = require("../assets/data/users");
const users_statistic = require("../assets/data/users_statistic");
const { getCurrentUser } = require("../functions/getCurrentUser");

router.post("/getUser", async (req, res) => {
    const { id, from, to } = JSON.parse(req.body.json);
    if (typeof id === "number" && typeof new Date(from) === "object" && typeof new Date(to) === "object") {
        const userData = getCurrentUser(users, users_statistic, id, from, to);
        res.send(userData);
    } else {
        res.send({err: true})
    }
})



module.exports = router;