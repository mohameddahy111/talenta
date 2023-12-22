import {errorHandler} from "../utils/errerHanderl.js";
import Admin from "./admin.schema.js";
import {AppError} from "../utils/AppError.js";
import {compareSync} from "bcrypt";
import jwt from "jsonwebtoken";
import cloudinary from "../utils/cloudnary.js";

//------------------------------add Admin----------------------------------//
export const addAdmin = errorHandler(async (req, res, next) => {
  const {email} = req.body;
  const isEixst = await Admin.findOne({email: email});
  if (isEixst) {
    return next(new AppError("this Email is already in use"), 401);
  }
  if (req.file) {
    const {secure_url, public_id} = await cloudinary.uploader.upload(
      req.file.path,
      {
        folder: `/admin_avatars/${req.body.name}`,
        transformation:[{width :250 } , {crop:'scale'} , {quality :'auto'}]
      }
    );
    req.body.img = {id: public_id, src: secure_url};
  }
  const admin = new Admin(req.body);
  await admin.save();
  res.status(201).send("Successfully added");
});
//------------------------------login Admin--------------------------------//
export const loginAdmin = errorHandler(async (req, res, next) => {
  const {email, password} = req.body;
  const admin = await Admin.findOne({email: email});
  if (!admin) {
    return next(new AppError(" this email is not found", 403));
  }
  let match = admin && compareSync(password, admin.password, +process.env.SALT);
  if (!match) {
    return next(new AppError("password not match", 403));
  }
  const token = jwt.sign({id: admin._id}, process.env.TOKEN, {
    expiresIn: 60 * 60 * 24
  });
  if (!token) {
    return next(new AppError(" login failed , try agine", 403));
  }
  await Admin.findByIdAndUpdate(admin._id, {_isActive: true});
  res.status(200).send({message: `welcome ${admin.name}`, token});
});
//---------------------------- get admin info------------------------------------//
export const adminInfo = errorHandler(async (req, res, next) => {
  const findAdmin = await Admin.findById(req.adminId).select({password: 0});
  if (!findAdmin) {
    return next(new AppError("this Admin does not exist", 404));
  }
  res.status(200).send(findAdmin);
});
//---------------------------- admin log out --------------------------------//
export const adminLogout = errorHandler(async (req, res, next) => {
  const findAdmin = await Admin.findByIdAndUpdate(req.adminId, {
    _isActive: false
  });
  if (!findAdmin) {
    return next(new AppError("this Admin does not exist", 404));
  }
  res.status(200).send("logged out successfully");
});
   