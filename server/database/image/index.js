import mongoose from "mongoose";

var ImageSchema = new _mongoose["default"].Schema({
    images: [{
      location: {type: String,required: true},
    }]
  }, {
    timestamps: true
  }
);

export const ImageModel = mongoose.model("Images", ImageSchema);