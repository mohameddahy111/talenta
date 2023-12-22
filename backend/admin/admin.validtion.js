import Joi from "joi";

export const addValidtion = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password : Joi.string().required()
}).options({allowUnknown : true});
export const loginValidtion = Joi.object({
    email: Joi.string().email().required(),
    password : Joi.string().required()
})