const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use('/', router)



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
