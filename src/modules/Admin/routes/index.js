const router = require('express').Router();
const {
  createAdmin,
  createCoach,
  getAllCoaches,
  getAllAdmins,
  getAllEmployees,
  deleteAdmin,
  deleteCoach,
  editCoach,
  getCoach,
  getAdmin,
  editAdmin,
} = require('../controllers/employee');
const {
  createClient,
  deleteClient,
  editClient,
  getAllClients,
  getClient,
} = require('../controllers/client');
const {
  createScheduleItem,
  deleteScheduleItem,
  editScheduleItem,
  getPeriodScheduleItems,
  getScheduleResources,
} = require('../controllers/schedule');
const {
  getAllSubscriptionCards,
  getAllDiscounts,
} = require('../controllers/discounts');
const verifyToken = require('../../utils/middlewares/verifyToken');

router.get('/employees', verifyToken, getAllEmployees);

router.post('/coaches', verifyToken, createCoach);
router.put('/coaches', verifyToken, editCoach);
router.delete('/coaches/:id', verifyToken, deleteCoach);
router.get('/coaches', verifyToken, getAllCoaches);
router.get('/coaches/:id', verifyToken, getCoach);

router.post('/admins', verifyToken, createAdmin);
router.put('/admins', verifyToken, editAdmin);
router.delete('/admins/:id', verifyToken, deleteAdmin);
router.get('/admins', verifyToken, getAllAdmins);
router.get('/admins/:id', verifyToken, getAdmin);

router.post('/clients', verifyToken, createClient);
router.put('/clients', verifyToken, editClient);
router.delete('/clients/:id', verifyToken, deleteClient);
router.get('/clients', verifyToken, getAllClients);
router.get('/clients/:id', verifyToken, getClient);

router.post('/schedule', verifyToken, createScheduleItem);
router.put('/schedule', verifyToken, editScheduleItem);
router.delete('/schedule/:id', verifyToken, deleteScheduleItem);
router.get('/schedule', verifyToken, getPeriodScheduleItems);
router.get('/scheduleResources', verifyToken, getScheduleResources);

router.get('/subscriptionCards', verifyToken, getAllSubscriptionCards);
router.get('/discounts', verifyToken, getAllDiscounts);

module.exports = router;
