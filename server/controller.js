const conn = require('./database');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'images/');
  },

  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

exports.upload = multer({ storage });

exports.upload_end_point = async (req, res) => {
  return res.status(200).json({ message: `Berhasil!` });
};
