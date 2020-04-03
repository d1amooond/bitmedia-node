const getCurrentPage = (users, users_statistic, page, elements) => {


    const pages = Math.ceil(users.length / elements);
    const filterUsers = users.slice(page * elements - elements, page * elements);

    const pageData = filterUsers.map((el) => {

        let userClicks = [];
        let userViews = [];

        for (let i = 0; i < users_statistic.length; i++) {
            if (el.id === users_statistic[i].user_id) {
                userClicks.push(users_statistic[i].clicks);
                userViews.push(users_statistic[i].page_views);
            }
        }
        const total_clicks = userClicks.reduce((sum, el) => sum + el);
        const total_page_views = userViews.reduce((sum, el) => sum + el);
        return {
            ...el,
            total_clicks,
            total_page_views
        }
    })

    return {
        pages,
        pageData
    }
}
module.exports = {
    getCurrentPage
}