const Article = require('../models/Article');

async function index (req, res) {
    try {
      const articles = await Article.find();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

async function show (req, res) {
    const { id } = req.params;
    try {
      const article = await Article.findById(id);
      res.json(article);
    } catch (error) {
      res.status(404).json({ error: 'Article not found' });
    }
  }

  async function create(req, res) {
    const { title, body } = req.body;
    try {
      const article = await Article.create({ title, body });
      res.status(201).json(article);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async function update(req, res) {
    const { id } = req.params;
    const { title, body } = req.body;
    try {
      const article = await Article.findByIdAndUpdate(id, { title, body }, { new: true });
      res.json(article);
    } catch (error) {
      res.status(404).json({ error: 'Article not found' });
    }
  }

  async function destroy(req, res) {
    const { id } = req.params;
    try {
      await Article.findByIdAndDelete(id);
      res.json({ message: 'Article deleted successfully' });
    } catch (error) {
      res.status(404).json({ error: 'Article not found' });
    }
  }

  module.exports = {
    index, show, update, create, destroy
}
