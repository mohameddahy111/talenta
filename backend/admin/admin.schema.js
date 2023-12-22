import {hashSync} from "bcrypt";
import mongoose from "mongoose";

const adminSchame = new mongoose.Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    roll: {type: String, default: "admin"},
    _isBlocked: {type: Boolean, default: false},
    _isVerify: {type: Boolean, default: true},
    _isActive: { type: Boolean, default: false },
    phone: { type: Number},

        changePasswordAt: { type: Date },
    img:{id :{type:String} ,src :{type:String}},
  },
  {timestamps: true}
);

adminSchame.pre("save", function () {
  this.password = hashSync(this.password, +process.env.SALT);
});
adminSchame.pre("findOneAndUpdate", function () {
  if (this._update.password) {
    this._update.password = hashSync(this._update.password, +process.env.SALT);
  }
});

const Admin = mongoose.model("Admin", adminSchame);
export default Admin;
