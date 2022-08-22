const express = require("express");
const { verifyMerchant } = require("../controllers/merchant.controller");
const router = express.Router();
const { addMoney } = require("../controllers/services/addMoney.controller");
const { eCheckInfo } = require("../controllers/services/eCheck.controller");
const {
  getServices,
} = require("../controllers/services/getServices.controller");
const { mechantToPersonal } = require("../controllers/services/merchantToPersonal.controller");

const {
  requestMoney,
  approveMoneyRequest,
  getRequests,
} = require("../controllers/services/requestMoney.controller");
const { saveMoney } = require("../controllers/services/saveMoney.controller");
const { sendMoney } = require("../controllers/services/sendMoney.controller");

// Add Money
router.post("/addMoney", addMoney);
// Send Money
router.post("/sendMoney", sendMoney);
// Request Money
router.post("/requestMoney", requestMoney);
// Save Money
router.post("/saveMoney", saveMoney);
// Approve money request
router.post("/approveRequestMoney", approveMoneyRequest);
// E-check
router.post("/eCheck", eCheckInfo);
// Get requests
router.get("/getRequests", getRequests);
// Get requests
router.get("/getServices", getServices);

// Merchant Services Routes

// Merchant to Personal
router.post("/merchant-to-personal", verifyMerchant, mechantToPersonal)

module.exports = router;
