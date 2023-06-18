import Joi from "joi";

export const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .label("Nama Anime")
    .messages({
      "string.empty": "{{#label}} harus diisi yaa",
      "string.min": "{{#label}} harus lebih dari 3 karakter",
      "string.max": "{{#label}} harus kurang dari 30 karakter",
    }),
    deskripsi: Joi.string()
    .min(3)
    .max(50)
    .required()
    .label("Desc Anime")
    .messages({
      "string.empty": "{{#label}} harus diisi yaa",
      "string.min": "{{#label}} harus lebih dari 3 karakter",
      "string.max": "{{#label}} harus kurang dari 50 karakter",
    }),
});
