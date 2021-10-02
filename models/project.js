var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    githublink: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
      required: true,
    },
    demolink: {
      type: String,
      trim: true,
    },
    underdev: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
