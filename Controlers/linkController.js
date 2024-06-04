import LinksModel from "../Models/LinksModel.js";
const LinksController = {
  getList: async (req, res) => {
    try {
      const Links = await LinksModel.find();//ללא סינון
      res.json({ Links });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const link = await LinksModel.findById(req.params.id);
      res.json("https://"+link._id);
      link.clicks.push({ insertedAt: new Date(), ipAddress: req.ip });
      await link.save();
      res.redirect(link.originalUrl);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  add: async (req, res) => {
    const { originalUrl } = req.body;
    try {
      const newLink = await LinksModel.create({ originalUrl });
      res.json("https://"+newLink._id);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedLink = await LinksModel.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedLink);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await LinksModel.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default LinksController;

