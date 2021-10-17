import mongoose from "mongoose";

var RestaurantSchema = new _mongoose["default"].Schema({
    name: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    mapLocation: {
      type: String,
      required: true
    },
    cuisine: [String],
    restaurantTimings: String,
    contactNumber: Number,
    website: String,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    menuImages: {
      type: _mongoose["default"].Types.ObjectId,
      ref: "Images"
    },
    menu: {
      type: _mongoose["default"].Types.ObjectId,
      ref: "Menus"
    },
    reviews: [{
      type: _mongoose["default"].Types.ObjectId,
      ref: "Reviews"
    }],
    photos: {
      type: _mongoose["default"].Types.ObjectId,
      ref: "Images"
    }
  }, {
    timestamps: true
  }
);
  
export var RestaurantModel = _mongoose["default"].model("Restaurants", RestaurantSchema);