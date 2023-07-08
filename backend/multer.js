const multer = require('multer')

const fileUpload = multer({
    dest: 'uploads/',
})

module.exports = {
    fileUpload
}