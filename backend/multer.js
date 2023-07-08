const multer = require('multer')

const createStorage = (path) => multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const mediaUpload = multer({
    storage: createStorage('uploads/courses/')
})

module.exports = {
    mediaUpload
}