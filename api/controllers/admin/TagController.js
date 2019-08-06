/**
 * TegController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  viewAdd: async (req, res) => {
    return res.view('admin/tags/add');
  },
  Add: async (req, res) => {
    await Tag.addTag(req, res);
    req.flash('success', 'با موفقیت ثبت شد');
    res.redirect('/admin/tags/add');
  },
  viewList: async (req, res) => {
    const tags = await Tag.find();
    return res.view('admin/tags/list', {tags: tags});
  },
  viewEdit: async (req, res) =>{
    const tag = await Tag.findOne({id: req.param('id')});
    return res.view('admin/tags/edit', {tag: tag});
  },
  Edit: async (req, res) => {
    await Tag.editTag(req, res);
    req.flash('success', 'با موفقیت زخیره شد');
    res.redirect('/admin/tags');
  },
  Delete: async (req, res) => {
    await Tag.deleteTag(req, res);
    req.flash('success', 'با موفقیت حذف شد');
    res.redirect('/admin/tags');
  },

};

