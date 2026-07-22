const Enquiry = require("../models/Enquiry");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
transporter.verify(function (error, success) {
  if (error) {
    console.log("Mail Error:", error);
  } else {
    console.log("Mail Server Ready");
  }
});
// Create Enquiry
exports.createEnquiry = async (req, res) => {
  try {
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);
    console.log("Enquiry Received:", req.body);

    const enquiry = await Enquiry.create(req.body);

    // User Mail
    if (enquiry.email) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: enquiry.email,
        subject: "BB Landscaping - Enquiry Received",
        html: `
          <h2>Thank You for Contacting BB Landscaping</h2>
          <p>Hello ${enquiry.name},</p>
          <p>We have received your enquiry successfully.</p>
          <p>Our team will contact you shortly.</p>
        `,
      });

      console.log("User email sent");
    }

    // Admin Mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Enquiry Received - BB Landscaping",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${enquiry.name}</p>
        <p><strong>Email:</strong> ${enquiry.email}</p>
        <p><strong>Phone:</strong> ${enquiry.phone}</p>
        <p><strong>Message:</strong> ${enquiry.message}</p>
      `,
    });

    console.log("Admin email sent");

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Enquiries
exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({
      createdAt: -1,
    });

    res.json(enquiries);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Enquiry
exports.deleteEnquiry = async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Enquiry Status
exports.updateEnquiryStatus = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.json({
      success: true,
      enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};