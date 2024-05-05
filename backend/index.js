const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use("/files", express.static("files"));

const mongoUrl =
  "mongodb+srv://bathulavishnu546:vishnu@cluster0.upvnpty.mongodb.net/"
mongoose
  .connect(mongoUrl, {
    useNewUrlparser: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));
//api--------------------------------------------------------------
app.listen(5000, () => {
  console.log("sever started");
});

app.get("/", async (req, res) => {
  res.send("Success!!!!");
});

app.get("/get-files", async (req, res) => {
  try {
    Pdfschema.find({}).then((data) => {
      res.send({ status: "super", data: data });
    });
  } catch (error) {}
});

//multer--------------------------------------------------------
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
require("./pdfdetails");
const Pdfschema = mongoose.model("pdfDetails");
const upload = multer({ storage: storage });

app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await Pdfschema.create({ title: title, pdf: fileName });
    res.send({ status: "okk" });
  } catch (error) {
    res.json({ status: "error" });
  }
});
