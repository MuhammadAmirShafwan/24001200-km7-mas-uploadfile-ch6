require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const imgkit = require("../libs/imageKit");


exports.uploadImage = async (req, res) => {
    try {
        const file = req.file;
        const result = await imgkit.upload({
            file: file.buffer,
            fileName: file.originalname,
            folder: "challenge-6",
        });
        const data = await prisma.image.create({
            data: {
                tittle: req.body.tittle,
                description: req.body.description,
                image_url: result.url,
                imageFieldId: result.fileId,
            }
        });
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.getImage = async (req, res) => {
    try {
        const data = await prisma.image.findMany();

        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.getImageDetail = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const data = await prisma.image.findUnique({
            where: {
                id: id
            }
        });
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.editImage = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const file = req.file;
        const awal = await prisma.image.findUnique({
            where: {
                id: id
            }
        })

        if (awal.imageFieldId) {
            await imgkit.deleteFile(awal.imageFieldId);
        }

        const result = await imgkit.upload({
            file: file.buffer,
            fileName: file.originalname,
            folder: "challenge-6",
        });
        const data = await prisma.image.update({
            where: {
                id: id
            },
            data: {
                tittle: req.body.tittle,
                description: req.body.description,
                image_url: result.url,
                imageFieldId: result.fileId,
            }
        });
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteImage = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const data = await prisma.image.delete({
            where: {
                id: id
            }
        });

        if (data.imageFieldId) {
            await imgkit.deleteFile(data.imageFieldId);
        }
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}
