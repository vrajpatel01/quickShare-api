const express = require("express");
const multer = require("multer");
const path = require("path");
const { v4: uuid4 } = require("uuid");
require("dotenv").config();
const File = require("../models/files");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(
        file.originalname
      )}`
    );
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 * 100 },
}).single("file");

router.post("/", (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(500).send({ error: err });
    }
    if (!req.file) {
      res.json({ status: "faild", error: "file needed in body" });
    } else {
      const file = new File({
        uuid: uuid4(),
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
      });

      const result = await file.save();
      res.send({
        location: `${process.env.SERVER_DOMAIN_NAME}/file/${result.uuid}`,
        filename: result.filename,
      });
    }
  });
});

module.exports = router;
