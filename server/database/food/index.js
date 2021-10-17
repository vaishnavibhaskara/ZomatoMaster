import mongoose from "mongoose";

var FoodSchema = new _mongoose["default"].Schema({
    name: {
      type: String,
      required: true
    },
    descript: {
      type: String,
      required: true
    },
    isVeg: {
      type: Boolean,
      required: true
    },
    isContainsEgg: {
      type: Boolean,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    photos: {
      type: _mongoose["default"].Types.ObjectId,
      ref: "Images"
    },
    price: {
      type: Number,
      "default": 150,
      required: true
    },
    addOns: [{
      type: _mongoose["default"].Types.ObjectId,
      ref: "Foods"
    }],
    restaurant: {
      type: _mongoose["default"].Types.ObjectId,
      ref: "Restaurants",
      required: true
    },
    reviews: {
      type: _mongoose["default"].Types.ObjectId,
      ref: "Reviews"
    }
  }, {
    timestamps: true
  }
);
  
export var FoodModel = _mongoose["default"].model("Foods", FoodSchema);
