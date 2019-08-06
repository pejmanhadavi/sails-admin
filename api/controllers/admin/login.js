module.exports = {


  friendlyName: 'Login',


  description: 'Login admin using email and password',


  inputs: {
    email: {
      description: 'The email to try in this attempt, e.g. "irl@example.com".',
      type: 'string',
      required: true
    },
    password: {
      description: 'The unencrypted password to try in this attempt, e.g. "passwordlol".',
      type: 'string',
      required: true
    },
    rememberMe: {
      description: 'Whether to extend the lifetime of the user\'s session.',
      type: 'boolean'},
  },


  exits: {
    success: {
      description: 'The requesting user agent has been successfully logged in.',
    },

    badCombo: {
      description: `The provided email and password combination does not
      match any user in the database.`,
      responseType: 'unauthorized',
    },
    redirect: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal login page.'
    },
  },


  fn: async function (inputs, exits) {

    const user = await User.findOne({
      email: inputs.email.toLowerCase(),
    });


    if (!user){
      this.req.flash('error', 'کاربر یافت نشد');
      throw 'badCombo';
    }


    await sails.helpers.passwords.checkPassword(inputs.password, user.password)
    .intercept('incorrect', 'badCombo');

    if (inputs.rememberMe) {
      this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
    }

    this.req.session.userId = user.id;

    // return exits.success();
    return exits.redirect('/admin/dashboard');

  }


};
