import Application from "../models/Application.js";

// Apply for a job
export const applyJob = async (req, res) => {
  try {
    const { jobTitle, company, location } = req.body;
    const existing = await Application.findOne({
      user: req.userId,
      jobTitle,
      company,
    });
    if (existing) return res.status(400).json({ message: "Already applied!" });
    const application = await Application.create({
      user: req.userId,
      jobTitle,
      company,
      location,
    });
    res.status(201).json({ message: "Applied successfully!", application });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get my applications
export const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};