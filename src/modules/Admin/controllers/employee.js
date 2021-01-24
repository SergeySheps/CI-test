// const coachService = require('../services/coach');
const { User, Coach, Admin } = require('../../../DB/models');
const coachAuthService = new (require('../../Auth/services/Auth'))(Coach);
const adminAuthService = new (require('../../Auth/services/Auth'))(Admin);
const coachManagementService = new (require('../services/UsersManagement'))(
  Coach,
);
const adminManagementService = new (require('../services/UsersManagement'))(
  Admin,
);

const getAllEmployees = async (req, res, next) => {
  try {
    const [admins, coaches] = await Promise.all([
      adminManagementService.getAllUsers(),
      coachManagementService.getAllUsers(),
    ]);

    const result = [...admins, ...coaches];

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const createCoach = async (req, res, next) => {
  try {
    const result = await coachAuthService.signUp(req.body, [User, Coach]);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getAllCoaches = async (req, res, next) => {
  try {
    const result = await coachManagementService.getAllUsers();

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const deleteCoach = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await coachManagementService.deleteUser(id);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const editCoach = async (req, res, next) => {
  try {
    const { body } = req;

    const result = await coachManagementService.editUser(body);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getCoach = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await coachManagementService.getUser(id);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

// admin
const createAdmin = async (req, res, next) => {
  try {
    const result = await adminAuthService.signUp(req.body, [Admin, Coach]);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getAllAdmins = async (req, res, next) => {
  try {
    const result = await adminManagementService.getAllUsers();

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const deleteAdmin = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await adminManagementService.deleteUser(id);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const editAdmin = async (req, res, next) => {
  try {
    const { body } = req;

    const result = await adminManagementService.editUser(body);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getAdmin = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await adminManagementService.getUser(id);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllEmployees,
  createCoach,
  getAllCoaches,
  createAdmin,
  getAllAdmins,
  deleteAdmin,
  deleteCoach,
  editCoach,
  getCoach,
  editAdmin,
  getAdmin,
};
