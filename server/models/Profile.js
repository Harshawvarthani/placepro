import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  phone: { type: String, default: "" },
  skills: { type: [String], default: [] },
  bio: { type: String, default: "" },
  resume: { type: String, default: "" },
  college: { type: String, default: "" },
  degree: { type: String, default: "" },
}, { timestamps: true });

export default mongoose.model("Profile", profileSchema);