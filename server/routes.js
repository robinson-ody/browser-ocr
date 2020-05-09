const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.post(
  '/upload',
  controller.upload.single('File'),
  controller.upload_end_point
);

module.exports = router;
