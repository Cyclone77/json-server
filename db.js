let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = function() {
    var data = {
        news: [],
        users: [],
        SurplusData: [],
        tblSysCcountData: [],
        tblpage: []
    };
    [1, 2, 3].forEach(x => {
        data.users.push({
            'name': Random.cname(),
            'city': Random.city(),
            'time': Random.date()
        })
    })
    var images = [1, 2, 3].map(x => Random.image('200x100', Random.color(), Random.word(2, 6)));

    for (var i = 0; i < 100; i++) {

        var content = Random.cparagraph(0, 10);

        data.news.push({
            id: i,
            title: Random.cword(8, 20),
            desc: content.substr(0, 40),
            tag: Random.cword(2, 6),
            views: Random.integer(100, 5000),
            images: images.slice(0, Random.integer(1, 3))
        })
    }

    for (var i = 0; i < 3; i++) {
        data.SurplusData.push({
            address: Random.city(),
            centum: Random.integer(60, 100),
            thousand: Random.integer(10, 50),
            tenthousand: Random.integer(1, 10)
        })
    }

    for (var i = 1; i <= 18; i++) {
        data.tblpage.push({
            rowindex: i,
            applicationtime: Random.date(),
            applicationpsn: Random.cname(),
            tickettime: Random.date(),
            ticketunit: Random.city(),
            comeunit: Random.city(),
            ticketcon: Random.ctitle(),
            Subprime: Random.ctitle(3, 5),
            gathering: Random.integer(10, 50),
            area: Random.city(),
            source: Random.city(),
            way: Random.ctitle(1, 3)
        })
    }

    for (var i = 1; i <= 18; i++) {
        data.tblSysCcountData.push({
            rowindex: i,
            applicationtime: Random.date(),
            applicationpsn: Random.cname(),
            tickettime: Random.date(),
            ticketunit: Random.city(),
            comeunit: Random.city(),
            ticketcon: Random.ctitle(),
            Subprime: Random.ctitle(3, 5),
            gathering: Random.integer(10, 50),
            area: Random.city(),
            source: Random.city(),
            way: Random.ctitle(1, 3)
        })
    }

    return data
}