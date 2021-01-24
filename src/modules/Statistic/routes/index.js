const router = require('express').Router();
const verifyToken = require('../../utils/middlewares/verifyToken');

const {
  getGeneralClientVisitStatistic,
} = require('../controllers/clientStatistic');

router.get('/clients', verifyToken, getGeneralClientVisitStatistic);

module.exports = router;
