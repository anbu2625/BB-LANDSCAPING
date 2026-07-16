const express = require("express");

const router = express.Router();

const {
  createEnquiry,
  getEnquiries,
  deleteEnquiry,
  updateEnquiryStatus
} = require("../controllers/enquiryController");

router.post("/", createEnquiry);
router.get("/", getEnquiries);
router.delete("/:id", deleteEnquiry);
router.put("/:id", updateEnquiryStatus);

module.exports = router;