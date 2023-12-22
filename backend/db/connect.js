import mongoose from "mongoose";

export const connect =  () => {
    mongoose.connect(process.env.MANGODB).then(() => {
        console.log('connect')
    }).catch((err) => {
        console.log(err)
    })
}