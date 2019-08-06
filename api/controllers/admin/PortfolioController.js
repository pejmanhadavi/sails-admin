/**
 * PortfolioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  viewAdd: async (req, res) => {
    return res.view('admin/portfolio/add');
  },
  Add: async (req, res) => {
    await Portfolio.addPortfolio(req, res);
    req.flash('success', 'با موفقیت زخیره شد');
    res.redirect('/admin/portfolio/add');
  },
  viewList: async (req, res) => {
    const portfolio = await Portfolio.find();
    return res.view('admin/portfolio/list', {portfolio: portfolio});
  },
  viewEdit: async (req, res) => {
    const portfolio = await Portfolio.findOne({id: req.param('id')});
    return res.view('admin/portfolio/edit', { portfolio: portfolio });
  },
  Edit: async (req, res) => {
    await Portfolio.editPortfolio(req, res);
    req.flash('success', 'با موفقیت زخیره شد');
    res.redirect('/admin/portfolio');
  },
  Delete: async (req, res) => {
    await Portfolio.deletePortfolio(req, res);
    req.flash('success', 'با موفقیت حذف شد');
    res.redirect('/admin/portfolio');
  },

};

