import mongoose from "mongoose";

var MenuSchema = new _mongoose["default"].Schema({
    menus: [{
      name: {
        type: String,
        required: true
      },
      items: [{
        type: _mongoose["default"].Types.ObjectId,
        ref: "Foods"
      }]
    }],
    recommended: [{
      type: _mongoose["default"].Types.ObjectId,
      ref: "Foods",
      unique: true
    }]
  }, {
    timestamps: true
  }
);

export var MenuModel = _mongoose["default"].model("Menu", MenuSchema);
