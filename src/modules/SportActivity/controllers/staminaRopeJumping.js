const dalStaminaRopeJumping = require('../DAL/StaminaRopeJumping');

const createJumpingProgress = async (req, res) => {
  const data = {
    user: req.decoded._id,
    times: [req.body.time],
  };

  const result = await dalStaminaRopeJumping.create(data);

  res.json(result);
};

const getJumpingProgress = async (req, res) => {
  const result = await dalStaminaRopeJumping.findByQuery(
    {
      user: req.params.id.toObjectId(),
    },
    'created_at _id times ',
  );

  res.json(result);
};

const updateJumpingProgress = async (req, res) => {
  const result = await dalStaminaRopeJumping.update({
    ...req.body,
    id: req.body.id.toObjectId(),
  });

  res.json(result);
};

module.exports = {
  createJumpingProgress,
  getJumpingProgress,
  updateJumpingProgress,
};
