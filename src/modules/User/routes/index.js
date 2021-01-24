const router = require('express').Router();
const {
  getOwnUserData,
  getOwnPhoto,
  uploadUserPhoto,
} = require('../controllers/user');
const verifyToken = require('../../utils/middlewares/verifyToken');

router.get('/ownData', verifyToken, getOwnUserData);
router.put('/ownData', verifyToken, uploadUserPhoto);

router.get('/ownData/:userId/photo', getOwnPhoto);

module.exports = router;
