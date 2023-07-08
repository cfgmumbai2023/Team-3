const { Router } = require('express')
const { mediaUpload } = require('../multer')
const { addLecture, getLectures } = require('../controllers/lecture')

const lectureRouter = Router()

lectureRouter.post('/media', mediaUpload.single('course'), (req, res) => {
    res.status(201).send({
        file: `uploads/courses/${req.file.filename}`
    })
})

lectureRouter.post('/:cId', addLecture)
lectureRouter.get('/:cId', getLectures)

module.exports = lectureRouter