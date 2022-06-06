// 1. imort all dependeinces
const express = require("express");
const cors = require('cors')
const app = express();
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const postRoute = require("./routes/post")
const categoryRoute = require("./routes/categories")
const multer = require("multer")
const path = require("path");
const port = 8000;



// 2.1 config express, cors, mongoose
dotenv.config();
require("./configs/mongoose.config")
app.use(cors())


// 2.2 config express //needed for post method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded!");
});

// 3. routes & logic
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
const AllMyRoutes = require("./routes/product_routes.js");
AllMyRoutes(app);


// 4. listen to the port
// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));