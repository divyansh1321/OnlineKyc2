import mongoose from "mongoose";
let formschema = new mongoose.Schema({
  aadharnumber: {
    type: String,
    required: true,
  },
  nameonaadhar: {
    type: String,
    required: true,
  },
  pannumber: {
    type: String,
    required: true,
  },
  nameonpan: {
    type: String,
    required: true,
  },
});
export const Form = mongoose.model("Form", formschema);
