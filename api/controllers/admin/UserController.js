/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  viewAdd: async (req, res) => {
    return res.view('admin/users/add');
  },
  Add: async (req, res) => {
    await User.addUser(req, res);
    req.flash('success', 'با موفقیت ثبت شد');
    res.redirect('/admin/users/add');
  },
  viewList: async (req, res) => {
    const users = await User.find();
    return res.view('admin/users/list', {users: users});
  },
  viewEdit: async (req, res) => {
    const user = await User.findOne({id: req.param('id')});
    return res.view('admin/users/edit', {user: user});
  },

  Edit: async (req, res) => {
    await User.editUser(req, res);
    req.flash('success', 'با موفقیت ثبت شد');
    res.redirect('/admin/users');
  },
  Delete: async (req, res) => {
    await User.deleteUser(req, res);
    req.flash('success', 'با موفقیت حذف شد');
    res.redirect('/admin/users');
  },

};

