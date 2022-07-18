const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose')

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        // res.json(res.locals._sort)
        let courseQuery = Course.find({});

        Promise.all([courseQuery.sortable(req), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => 
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses)
                })
            )
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({  })
            .then(courses => res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
