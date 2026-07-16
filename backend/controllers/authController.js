const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingAdmin =
      await Admin.findOne({ email });

    if (existingAdmin) {

      return res.status(400).json({
        success: false,
        message: "Admin already exists"
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const admin =
      await Admin.create({
        name,
        email,
        password: hashedPassword
      });

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      admin
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const admin =
      await Admin.findOne({ email });

    if (!admin) {

      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });

    }

    const isMatch =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });

    }

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.json({
      success: true,
      token,
      admin
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};