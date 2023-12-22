import {AppError} from "../utils/AppError.js";
import cloudinary from "../utils/cloudnary.js";
import {errorHandler} from "../utils/errerHanderl.js";
import Customer from "./customer.schema.js";

export const addCustomer = errorHandler(async (req, res, next) => {
  const isEixst = await Customer.findOne({'name.en': req.body.name_en });
  console.log(isEixst)
  if (isEixst) {
    return next(new AppError("This customer already exists", 401));
  }
  req.body.name={en: req.body.name_en ,  ar: req.body.name_ar}

  if (req.file) {
    const {secure_url, public_id} = await cloudinary.uploader.upload(
      req.file.path,
      {
        folder: `/customer_logo/${req.body.name_en}`,
        transformation: [{width: 300}, {crop: "scale"}, {quality: "auto"}]
      }
    );
    req.body.logo = {id: public_id, src: secure_url};
  }
  await Customer.insertMany(req.body)
    res.status(200).send("Add new  Customer successfully ")
});
//----------------------------- get all Customers-----------------------------------//
export const getAllCustomers = errorHandler(async (req, res, next) => {
  const customers = await Customer.find()
  res.status(200).send(customers)
})