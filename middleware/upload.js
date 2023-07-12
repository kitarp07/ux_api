const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')

    },
    filename: (req, file, cb) => {
        let extName = path.extname(file.originalname)

        cb(null, `${file.fieldname}--${Date.now()}${extName}`,)

    }
})

const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|mp3|m4a|mp4|wav|aac)$/)) {
        return cb(new Error('File format not supported'), false)
    }
    cb(null, true)

}

const upload = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }
})

module.exports = upload