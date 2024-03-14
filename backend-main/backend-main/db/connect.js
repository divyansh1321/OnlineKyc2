import mongoose from "mongoose";
export async function connect() {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://unknowngaming1888:EOqs5zpRqCRJecMt@cluster0.h0riyhf.mongodb.net/form_collection`
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error occured in connect function:", error.message);
    process.exit(1);
  }
}
