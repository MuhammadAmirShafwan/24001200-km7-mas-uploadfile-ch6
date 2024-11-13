require("dotenv").config();
const router = require("express").Router();
const imageController = require("../controllers/imageController")
const upload = require("../libs/multer");

router.get("/", async (req, res) => {
    res.json({
        message: "Hello World",
    });
})

router.get('/images', imageController.getImage)
router.get('/images/:id', imageController.getImageDetail)
router.post('/add-image', upload.single('image'), imageController.uploadImage)
router.put('/edit-image/:id', upload.single('image'), imageController.editImage)
router.delete('/delete-image/:id', imageController.deleteImage)





module.exports = router