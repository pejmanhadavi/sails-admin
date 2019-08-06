module.exports = {


  friendlyName: 'View dashboard or redirect',


  description: 'Display or redirect to the appropriate dashboard, depending on login status.',


  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show login page.',
      viewTemplatePath: 'admin/login'
    },

    redirect: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal login page.'
    },

  },


  fn: async function (inputs, exits) {

    if (this.req.me) {
      throw {  redirect:  this.req.me ? '/admin/dashboard' : '/admin/login'  };
    }

    return exits.success();

  }


};
