import mongoose from "mongoose";

const Connected = async () => {
  try {
    const DbConnect = await mongoose.connect(process.env.DB, {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.log(errpr + "Error in connecting  db ");
  }
};
export default Connected;
