// import mongoose from "mongoose";

// //Schema
// const userSchema = new mongoose.Schema({
//    firstName: {
//       type: String,
//       required: true
//    },
//    lastName: {
//       type: String,
//    },
//    userName: {
//       type: String,
//       unique: true,
//       lowercase: true
//    },
//    email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//       validate: {
//          validator: function (v) {
//             return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
//          },
//          message: props => `${props.value} is not a valid email address!`
//       }
//    }
// }, { timestamps: true })

// //creating and exporting User Model
// export const User = mongoose.model("User", userSchema);