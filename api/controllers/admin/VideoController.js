/**
 * VideoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  viewAdd: async (req, res) => {
    return res.view('admin/videos/add');
  },
  Add: async (req, res) => {
    await VideoCast.addVideo(req, res);
    req.flash('success', 'با موفقیت ثبت شد');
    res.redirect('/admin/videos/add');
  },
  viewList: async (req, res) => {
    const videos = await VideoCast.find();
    return res.view('admin/videos/list', {videos: videos});
  },
  viewEdit: async (req, res) => {
    const video = await VideoCast.findOne({id: req.param('id')});
    return res.view('admin/videos/edit', {video: video});
  },
  Edit: async (req, res) => {
    await VideoCast.editVideo(req, res);
    req.flash('success', 'با موفقیت زخیره شد');
    res.redirect('/admin/videos');
  },
  Delete: async (req, res) => {
    await VideoCast.deleteVideo(req, res);
    req.flash('success', 'با موفقیت حذف شد');
    res.redirect('/admin/videos');
  }

};

