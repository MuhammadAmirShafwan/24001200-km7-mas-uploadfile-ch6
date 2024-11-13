const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
    res.json({
        message: "test action",
    });
})

router.get('/users', async (req, res) => {
    data = await prisma.user.findMany();
    res.json(data);
})







module.exports = router