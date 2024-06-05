const BaseController = require("./BaseController");

//Add a photo url link?
class ToDoController extends BaseController {
  constructor(model) {
    super(model);
  }

  //get all items to do (is in the basecontroller already?)

  //get items with a specific description?
  async getSpecificItems(req, res) {
    const { description } = req.body;

    try {
      const items = await this.model
        .find({ description: `${description}` })
        .exec();
      // MyModel.find({ name: 'john', age: { $gte: 18 } }).exec()
      return res.status(200).json(items);
    } catch (error) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  //get a single item by id
  async getItem(req, res) {
    console.log("i am req.params.id:", req.params.id);
    try {
      const item = await this.model.findById(req.params.id);
      return res.status(200).json(item);
    } catch (error) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  //post a new item to do
  async addItem(req, res) {
    const { title, description } = req.body;
    try {
      // Create new user
      const newitem = await this.model.create({
        title,
        description,
      });
      // Respond with new user
      return res.status(200).json(newitem);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
}

module.exports = ToDoController;
