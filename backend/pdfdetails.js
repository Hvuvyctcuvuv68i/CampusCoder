const mongoose = require("mongoose");
const Pdfschema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  {
    collection: "pdfDetails",
  }
);
mongoose.model("pdfDetails", Pdfschema);
