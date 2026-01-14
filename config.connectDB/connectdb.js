import mongoose from "mongoose";
const connectdb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log("mongodb connected.")
    } catch (error) {
        console.log("error",error)
    }
}
export default connectdb;