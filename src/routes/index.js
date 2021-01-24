const authRoutes = require('../modules/Auth/routes');
const userRoutes = require('../modules/User/routes');
const adminRoutes = require('../modules/Admin/routes');
const statisticRoutes = require('../modules/Statistic/routes');
// const userActivityRoutes = require('./userActivityRoutes');
// const socketActivityRoutes = require('./socketActivityRoutes');

const router = require('express').Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/admin', adminRoutes);
router.use('/statistic', statisticRoutes);
// router.use('/userSportActivities', userActivityRoutes);
// router.use('/socketActivities', socketActivityRoutes);

module.exports = router;
