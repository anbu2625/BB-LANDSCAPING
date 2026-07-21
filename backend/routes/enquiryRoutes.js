const express = require("express");
const router = express.Router();

const {
  createEnquiry,
  getEnquiries,
  deleteEnquiry,
  updateEnquiryStatus,
} = require("../controllers/enquiryController");

// Create enquiry
router.post("/", createEnquiry);

// Get all enquiries
router.get("/", getEnquiries);

// Delete enquiry
router.delete("/:id", deleteEnquiry);

// Update enquiry status
router.put("/:id", updateEnquiryStatus);

module.exports = router;