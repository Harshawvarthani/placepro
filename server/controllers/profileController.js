import Profile from "../models/Profile.js";

// Get Profile
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.userId });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create or Update Profile
export const upsertProfile = async (req, res) => {
  try {
    const { phone, skills, bio, resume, college, degree } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: req.userId },
      { phone, skills, bio, resume, college, degree },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};