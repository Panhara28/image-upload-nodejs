const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const port = process.env.PORT || 80;
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage
})

app.use('mocImages', express.static('upload/images'));

app.post('/upload', upload.single('mocImages'), (req, res) => {
    res.json({
        success: 200,
        image_url: `http://localhost:${port}/mocImages/${req.file.filename}`
    })
})

app.listen(port, () => {
    console.log('Server is running' + port);
})