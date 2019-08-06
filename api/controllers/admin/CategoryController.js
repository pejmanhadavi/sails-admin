/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  viewAdd: async (req, res) => {
    return res.view('admin/categories/add');
  },

  Add: async (req, res) => {
    await Category.addCategory(req, res);
    req.flash('success', 'با موفقیت ثبت شد');
    res.redirect('/admin/categories/add');
  },
  viewList: async (req, res) => {
    const categories = await Category.find();
    return res.view('admin/categories/list', {categories: categories});
  },
  viewEdit: async (req, res) => {
    const category = await Category.findOne({id: req.param('id')});
    return res.view('admin/categories/edit', {category: category});
  },
  Edit: async (req, res) => {
    await Category.editCategory(req, res);
    req.flash('success', 'با موفقیت ثبت شد');
    res.redirect('/admin/categories');
  },
  Delete: async (req, res) => {
    await Category.deleteCategory(req, res);
    req.flash('success', 'با موفقیت حذف شد');
    res.redirect('/admin/categories');
  },

};

