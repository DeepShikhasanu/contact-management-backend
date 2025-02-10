const express = require("express");
const { getAllContacts, getContactById, createContact, updateContact, deleteContact } = require("../controllers/contactController");
const validateContact = require("../middlewares/validateMiddleware");

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:id", getContactById);
router.post("/", validateContact, createContact);
router.put("/:id", validateContact, updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
