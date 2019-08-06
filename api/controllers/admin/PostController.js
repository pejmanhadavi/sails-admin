/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  viewAdd: async (req, res) => {
    const categories = await Category.find();
    return res.view('admin/posts/add', {categories: categories});
  },
  Add: async (req, res) => {
    await Post.addPost(req, res);
    req.flash('success', 'با موفقیت زخیره شد');
    res.redirect('/admin/posts/add');
  },
  viewList: async (req, res) => {
    const posts = await Post.find().populate('category');
    return res.view('admin/posts/list', {posts: posts});
  },
  viewEdit: async (req, res) => {
    const post = await Post.findOne({id: req.param('id')}).populate('category');
    const categories = await Category.find();

    return res.view('admin/posts/edit', {post: post, categories: categories});
  },
  Edit: async (req, res) => {
    await Post.editPost(req, res);
    req.flash('success', 'با موفقیت زخیره شد');
    res.redirect('/admin/posts');
  },
  Delete: async (req, res) => {
    await Post.deletePost(req, res);
    req.flash('success', 'با موفقیت حذف شد');
    res.redirect('/admin/posts');
  },

};

