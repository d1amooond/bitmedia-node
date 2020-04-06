const sqlite3 = require('sqlite3');
const users = require("../assets/data/users");
const users_statistic = require("../assets/data/users_statistic");
const db = new sqlite3.Database('database.db');
const tablesData = [
    {
        table: "users",
        data: users},
    {
        table: "users_statistic",
        data: users_statistic
    }]

const pushValuesToTable = async (table, data) => {

    const keys = Object.keys(data[0]).map(el => `${el} TEXT`).join(", ");
    await db.run(`CREATE TABLE ${table} (${keys})`);
    console.log("database created", table, keys)
    await data.forEach((el) => {
        const keys = Object.values(el).map(el => `"${el}"`).join(", ");
        db.run(`INSERT INTO ${table} VALUES (${keys})`);
    });


};

const isTable = (table, data) => {
    db.serialize(() => {
        if (db.run(`SELECT count(*) FROM sqlite_master WHERE type='table' AND name='${table}';`)) {
            db.run(`DROP TABLE ${table}`, (err) => {
                if (err) {
                    console.log('database')
                }   else {
                    console.log("database droped")
                }
            });
        }
        pushValuesToTable(table, data);
    });
};

tablesData.forEach(el => isTable(el.table, el.data));