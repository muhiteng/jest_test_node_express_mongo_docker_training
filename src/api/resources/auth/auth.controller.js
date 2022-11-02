// register new user
const register = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "failed to register user " });
  }
};

module.exports = {
  register,
};
