import Admin from "../admin/admin.schema.js";
import { AppError } from '../utils/AppError.js'
import jwt from 'jsonwebtoken'

export const auth = async (req, res, next) => {
    const berrerToken = req.headers["authorization"];
    if (!berrerToken  )
      return next(new AppError(" Authorization is Required", 401));
    const token = berrerToken.split(" ")[1];
    const decode = jwt.verify(token, process.env.TOKEN, (err, decoded) => {
      if (err) {
        return next(new AppError("token verification failed", 403));
      } else {
        return decoded;
      }
    });
    const admin = await Admin.findById(decode?.id)
    if (!admin) {
      return next(new AppError("this admin is deleted", 401));
    }
    const time  = parseInt(admin.changePasswordAt?.getTime()/1000);
    if (time > decode?.iat) {
      return next(new AppError("this token is not failed ", 403));
  
    } else {
      req.adminId = decode?.id
      next()
    }
  };
  