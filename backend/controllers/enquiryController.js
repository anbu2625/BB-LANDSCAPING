const Enquiry = require("../models/Enquiry");
const nodemailer = require("nodemailer");

// Brevo SMTP Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


// Create Enquiry
exports.createEnquiry = async (req, res) => {
  try {
    console.log("Enquiry Received:", req.body);

    // Save enquiry to MongoDB
    const enquiry = await Enquiry.create(req.body);

    console.log("Enquiry saved successfully");


    // Send Email Notification
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL, 
      subject: "New BB Landscaping Enquiry Received",

      html: `
        <h2>New Enquiry Details</h2>

        <p><strong>Name:</strong> ${req.body.name}</p>

        <p><strong>Email:</strong> ${req.body.email}</p>

        <p><strong>Phone:</strong> ${req.body.phone}</p>

        <p><strong>Service:</strong> ${req.body.service || "Not mentioned"}</p>

        <p><strong>Message:</strong></p>
        <p>${req.body.message}</p>

        <hr>

        <p>Sent from BB Landscaping Website</p>
      `,
    };


    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");


    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      enquiry,
    });


  } catch (error) {

    console.error("Enquiry Error:", error);

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
      message: "Deleted successfully",
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