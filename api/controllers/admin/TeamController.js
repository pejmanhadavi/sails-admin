/**
 * TeamController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  viewAdd: async (req, res) => {
    return res.view('admin/team-members/add');
  },
  Add: async (req, res) => {
    await Staff.addStaff(req, res);
    req.flash('success', 'با موفقیت زخیره شد');
    res.redirect('/admin/team-members/add');
  },
  viewList: async (req, res) => {
    const staffs = await Staff.find();
    return res.view('admin/team-members/list', {staffs: staffs});
  },
  viewEdit: async (req, res) => {
    const staff = await Staff.findOne({id: req.param('id')});
    return res.view('admin/team-members/edit', {staff: staff});
  },
  Edit: async (req, res) => {
    await Staff.editStaff(req, res);
    req.flash('success', 'با موفقیت زخیره شد');
    res.redirect('/admin/team-members');
  },
  Delete: async (req, res) => {
    await Staff.deleteStaff(req, res);
    req.flash('success', 'با موفقیت حذف شد');
    res.redirect('/admin/team-members');
  },

};

