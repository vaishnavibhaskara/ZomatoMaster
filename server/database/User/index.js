import mongoose from "mongoose";

var UserSchema = new _mongoose["default"].Schema({
    fullname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String
    },
    address: [{
      detail: {
        type: String
      },
      "for": {
        type: String
      }
    }],
    phoneNumber: [{
      type: Number
    }]
  }, {
    timestamps: true
  });
  
export const UserModel = mongoose.model("Users", UserSchema);
