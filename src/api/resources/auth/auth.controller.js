// register new user
const register = async (req, res) => {
  try {
    const { emai, password, confirmpassword } = req.body;
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "password is required" });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "password is too short" });
    }
    if (password !== confirmpassword) {
      return res
        .status(400)
        .json({ message: "confirm passord must match password" });
    }
    // db insert user info

    return res.status(200).json({ message: "register successfully done" });
  } catch (error) {
    return res.status(500).json({ message: "failed to register user " });
  }
};

module.exports = {
  register,
};
