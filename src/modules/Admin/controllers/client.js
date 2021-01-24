const { Client } = require('../../../DB/models');
const authService = new (require('../../Auth/services/Auth'))(Client);
const clientService = new (require('../services/UsersManagement'))(Client);

const createClient = async (req, res, next) => {
  try {
    const result = await authService.signUp(req.body);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const deleteClient = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await clientService.deleteUser(id);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const editClient = async (req, res, next) => {
  try {
    const { body } = req;

    const result = await clientService.editUser(body);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getClient = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await clientService.getUser(id);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getAllClients = async (req, res, next) => {
  try {
    const result = await clientService.getAllUsers();

    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createClient,
  deleteClient,
  editClient,
  getClient,
  getAllClients,
};
