const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Name is required.",
    "string.min": "Name should be at least 3 characters long.",
    "string.max": "Name should not exceed 50 characters.",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required.",
    "string.email": "Invalid email format.",
  }),
  phone: Joi.string()
    .pattern(/^\d{10,15}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required.",
      "string.pattern.base": "Phone number must be between 10 to 15 digits.",
    }),
  address: Joi.string().max(100).optional().messages({
    "string.max": "Address should not exceed 100 characters.",
  }),
});

const validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map((err) => err.message) });
  }
  next();
};

module.exports = validateContact;
