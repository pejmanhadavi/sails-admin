/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },



  /*
 █████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗    ██████╗  █████╗ ███╗   ██╗███████╗██╗
██╔══██╗██╔══██╗████╗ ████║██║████╗  ██║    ██╔══██╗██╔══██╗████╗  ██║██╔════╝██║
███████║██║  ██║██╔████╔██║██║██╔██╗ ██║    ██████╔╝███████║██╔██╗ ██║█████╗  ██║
██╔══██║██║  ██║██║╚██╔╝██║██║██║╚██╗██║    ██╔═══╝ ██╔══██║██║╚██╗██║██╔══╝  ██║
██║  ██║██████╔╝██║ ╚═╝ ██║██║██║ ╚████║    ██║     ██║  ██║██║ ╚████║███████╗███████╗
╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝
*/
  //LOGIN
  'GET /admin':         { action: 'admin/view-dashboard-or-redirect', locals: { layout: '' } },
  'GET /admin/login':         { action: 'admin/view-login', locals: { layout: '' } },
  'GET /admin/dashboard':         { action: 'admin/view-dashboard' , locals: { layout: '' }} ,
  //USER
  'GET /admin/users':             { controller: 'admin/UserController', action: 'viewList', locals: {layout: ''}},
  'GET /admin/users/add':          { controller: 'admin/UserController', action: 'viewAdd', locals: {layout: ''}},
  'GET /admin/users/edit/:id':             { controller: 'admin/UserController', action: 'viewEdit', locals: {layout: ''}},
  //Category
  'GET /admin/categories':             { controller: 'admin/CategoryController', action: 'viewList', locals: {layout: ''}},
  'GET /admin/categories/add':             { controller: 'admin/CategoryController', action: 'viewAdd', locals: {layout: ''}},
  'GET /admin/categories/edit/:id':             { controller: 'admin/CategoryController', action: 'viewEdit', locals: {layout: ''}},
  //TAG
  'GET /admin/tags':             { controller: 'admin/TagController', action: 'viewList', locals: {layout: ''}},
  'GET /admin/tags/add':             { controller: 'admin/TagController', action: 'viewAdd', locals: {layout: ''}},
  'GET /admin/tags/edit/:id':             { controller: 'admin/TagController', action: 'viewEdit', locals: {layout: ''}},
  //POST
  'GET /admin/posts':             { controller: 'admin/PostController', action: 'viewList', locals: {layout: ''}},
  'GET /admin/posts/add':             { controller: 'admin/PostController', action: 'viewAdd', locals: {layout: ''}},
  'GET /admin/posts/edit/:id':             { controller: 'admin/PostController', action: 'viewEdit', locals: {layout: ''}},
  //VIDEO CAST
  'GET /admin/videos':             { controller: 'admin/videoController', action: 'viewList', locals: {layout: ''}},
  'GET /admin/videos/add':             { controller: 'admin/videoController', action: 'viewAdd', locals: {layout: ''}},
  'GET /admin/videos/edit/:id':             { controller: 'admin/videoController', action: 'viewEdit', locals: {layout: ''}},
  //PORTFOLIO
  'GET /admin/portfolio':             { controller: 'admin/portfolioController', action: 'viewList', locals: {layout: ''}},
  'GET /admin/portfolio/add':             { controller: 'admin/portfolioController', action: 'viewAdd', locals: {layout: ''}},
  'GET /admin/portfolio/edit/:id':             { controller: 'admin/portfolioController', action: 'viewEdit', locals: {layout: ''}},
  //TEAM MEMBERS
  'GET /admin/team-members':             { controller: 'admin/teamController', action: 'viewList', locals: {layout: ''}},
  'GET /admin/team-members/add':             { controller: 'admin/teamController', action: 'viewAdd', locals: {layout: ''}},
  'GET /admin/team-members/edit/:id':             { controller: 'admin/teamController', action: 'viewEdit', locals: {layout: ''}},

  //DOWNLOAD FILES
  'GET /posts/images/:id':          {action: 'downloads/download-post-image', skipAssets: false},
  'GET /posts/thumbnails/:id':          {action: 'downloads/download-post-thumbnail', skipAssets: false},
  'GET /videos/thumbnails/:id':          {action: 'downloads/download-video-thumbnail', skipAssets: false},
  'GET /team-members/avatar/:id':          {action: 'downloads/download-staff-avatar', skipAssets: false},
  'GET /portfolio/images/:id':          {action: 'downloads/download-portfolio-image', skipAssets: false},

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  //LOGIN
  'POST /admin/login':      {action: 'admin/login'},
  //USER
  'POST /admin/users/add':           {controller: 'admin/UserController', action: 'Add', locals: {layout: ''}},
  'POST /admin/users/edit/:id':           {controller: 'admin/UserController', action: 'Edit', locals: {layout: ''}},
  'GET /admin/users/delete/:id':           {controller: 'admin/UserController', action: 'Delete', locals: {layout: ''}},
  //CATEGORY
  'POST /admin/categories/add':           {controller: 'admin/CategoryController', action: 'Add', locals: {layout: ''}},
  'POST /admin/categories/edit/:id':           {controller: 'admin/CategoryController', action: 'Edit', locals: {layout: ''}},
  'GET /admin/categories/delete/:id':           {controller: 'admin/CategoryController', action: 'Delete', locals: {layout: ''}},
  //TAG
  'POST /admin/tags/add':           {controller: 'admin/TagController', action: 'Add', locals: {layout: ''}},
  'POST /admin/tags/edit/:id':           {controller: 'admin/TagController', action: 'Edit', locals: {layout: ''}},
  'GET /admin/tags/delete/:id':           {controller: 'admin/TagController', action: 'Delete', locals: {layout: ''}},
  //POST
  'POST /admin/posts/add':           {controller: 'admin/PostController', action: 'Add', locals: {layout: ''}},
  'POST /admin/posts/edit/:id':           {controller: 'admin/PostController', action: 'Edit', locals: {layout: ''}},
  'GET /admin/posts/delete/:id':           {controller: 'admin/PostController', action: 'Delete', locals: {layout: ''}},
  //VIDEO CAST
  'POST /admin/videos/add':           {controller: 'admin/videoController', action: 'Add', locals: {layout: ''}},
  'POST /admin/videos/edit/:id':           {controller: 'admin/videoController', action: 'Edit', locals: {layout: ''}},
  'GET /admin/videos/delete/:id':           {controller: 'admin/videoController', action: 'Delete', locals: {layout: ''}},
  //PORTFOLIO
  'POST /admin/portfolio/add':           {controller: 'admin/portfolioController', action: 'Add', locals: {layout: ''}},
  'POST /admin/portfolio/edit/:id':           {controller: 'admin/portfolioController', action: 'Edit', locals: {layout: ''}},
  'GET /admin/portfolio/delete/:id':           {controller: 'admin/portfolioController', action: 'Delete', locals: {layout: ''}},
  //TEAM MEMEBERS
  'POST /admin/team-members/add':           {controller: 'admin/teamController', action: 'Add', locals: {layout: ''}},
  'POST /admin/team-members/edit/:id':           {controller: 'admin/teamController', action: 'Edit', locals: {layout: ''}},
  'GET /admin/team-members/delete/:id':           {controller: 'admin/teamController', action: 'Delete', locals: {layout: ''}},

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
