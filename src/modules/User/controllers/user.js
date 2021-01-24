const authService = require('../services/user');
const config = require('../../../../config/env');
const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const getOwnUserData = async (req, res) => {
  const result = await authService.getUserById(req.decoded._id, '-photo');

  res.json(result);
};

const getOwnPhoto = async (req, res) => {
  const userId = req.params.userId;

  const { photo } = await authService.getUserById(userId, 'photo');

  if (photo) {
    res.writeHead(200, {
      'Content-Type': 'image/jpeg',
    });

    res.end(photo.buffer);
  } else {
    return res.download(
      path.join(__dirname, '../../../../assets/images/avatar.jpg'),
    );
  }
};

const uploadUserPhoto = (req, res) => {
  upload.single('photo')(req, res, () => {
    if (req.file) {
      const userId = req.decoded._id;
      const hostName = config.HOST_NAME;
      const photoName = req.file.originalname;
      const photoUri = `${hostName}api/user/ownData/${userId}/photo?${photoName}`;

      authService.updateUserPhoto(userId, {
        photo: req.file.buffer,
        photoUri,
      });

      res.json({});
    }
  });
};

module.exports = {
  getOwnUserData,
  getOwnPhoto,
  uploadUserPhoto,
};
