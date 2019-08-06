module.exports = {


  friendlyName: 'View dashboard',


  description: 'Display "Dashboard" page.',

  exits: {
    success: {
      viewTemplatePath: 'admin/dashboard',
    },
  },



  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
