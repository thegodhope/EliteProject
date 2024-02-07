const User = require("../models/user");

exports.submitMessage = async (req, res) => {
  try {
    const { username, phone_number, email, message } = req.body;

    const newUser = new User({
      username,
      phone_number,
      email,
      message,
    });

    await newUser.save();

    res.status(201).json({ message: "Message submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
