import { Form } from "../models/form.model.js";
export default async function uploaddb(req, res) {
  try {
    const { nameonpan, pannumber, nameonaadhar, aadharnumber } = req.body;
    const forminstance = await Form.create({
      nameonpan,
      pannumber,
      nameonaadhar,
      aadharnumber,
    });
    console.log("fomrinstance:", forminstance);
    res.json({
      message: "data added",
    });
  } catch (error) {
    console.log("error occured in uploaddb funciton:", error.message);
  }
}
