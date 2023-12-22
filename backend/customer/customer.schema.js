import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      ar: {type: String, required: true, unique: true},
      en: {type: String, required: true, unique: true}
    },

    logo: {id: {type: String}, src: {type: String}}
  },
  {timestamps: true}
);

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
