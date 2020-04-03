const getCurrentUser = (users, users_statistic, id, from, to) => {
    from = new Date(from);
    to = new Date(to);
    let user;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            user = users[i];
            break;
        }
    }

    let statistic = [];

    for (let i = 0; i < users_statistic.length; i++) {
        if (users_statistic[i].user_id === user.id) {
            if (new Date(users_statistic[i].date).getTime() >= from.getTime()
                && new Date(users_statistic[i].date).getTime() <= to.getTime()) {
                statistic.push(users_statistic[i]);
            }
        }

    }

    statistic = statistic.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());


    return {...user, statistic};


}
module.exports = {
    getCurrentUser
}