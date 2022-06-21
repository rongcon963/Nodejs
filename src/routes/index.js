const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);

    //   app.post('/search', (req, res) => {

    //     console.log(req.body);
    //     res.send('');
    //   })
}

module.exports = route;
