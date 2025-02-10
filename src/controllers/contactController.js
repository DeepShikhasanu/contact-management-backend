const Contact = require("../models/Contact");

// GET all contacts (Search, Pagination, Sorting)
exports.getAllContacts = async (req, res) => {
  try {
    const { name, email, sortBy = "createdAt", order = "desc", page = 1, limit = 10 } = req.query;
    let filter = {};

    if (name) filter.name = { $regex: name, $options: "i" };
    if (email) filter.email = { $regex: email, $options: "i" };

    const options = {
      sort: { [sortBy]: order === "asc" ? 1 : -1 },
      skip: (parseInt(page) - 1) * parseInt(limit),
      limit: parseInt(limit),
    };

    const contacts = await Contact.find(filter).sort(options.sort).skip(options.skip).limit(options.limit);
    const totalContacts = await Contact.countDocuments(filter);

    res.status(200).json({ totalContacts, totalPages: Math.ceil(totalContacts / limit), currentPage: parseInt(page), contacts });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET a single contact
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ error: "Invalid contact ID format." });
  }
};

// CREATE a new contact
exports.createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: "Error creating contact." });
  }
};

// UPDATE an existing contact
exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) return res.status(404).json({ error: "Contact not found" });
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(400).json({ error: "Invalid contact ID format." });
  }
};

// DELETE a contact
exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ error: "Contact not found" });
    res.status(200).json({ message: "Contact deleted successfully." });
  } catch (error) {
    res.status(400).json({ error: "Invalid contact ID format." });
  }
};
