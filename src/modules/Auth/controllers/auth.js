const { User, Coach } = require('../../../DB/models');
const authService = new (require('../services/Auth'))(User);

const signIn = async (req, res) => {
  res.status(200).json(req.user);
};

const signUp = async (req, res) => {
  const result = await authService.signUp(req.body, [User, Coach]);

  res.json(result);
};

module.exports = {
  signIn,
  signUp,
};
