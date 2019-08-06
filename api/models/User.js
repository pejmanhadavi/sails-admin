/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    fullName: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name',
      maxLength: 128,
      example: 'Lisa Microwave van der Jenny'
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'carol.reyna@microsoft.com'
    },
    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },
    isSuperAdmin: {
      type: 'boolean',
      required: true,
      description: 'extra permission to edit users(admins)',
      protect: true,
    }
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

  addUser: async (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = await sails.helpers.passwords.hashPassword(req.body.password);
    const isSuperAdmin = req.body.isSuperAdmin? true: false;


    return await User.create({fullName: fullName, email: email, password: password, isSuperAdmin: isSuperAdmin});
  },


  editUser: async (req, res) => {
    const fullName = req.body.fullName || undefined;
    const email = req.body.email || undefined;
    const password = req.body.password? await sails.helpers.passwords.hashPassword(req.body.password): undefined;
    const isSuperAdmin = req.body.isSuperAdmin ? true: false;

    return await User.updateOne({id: req.param('id')})
      .set({fullName: fullName,
        email: email,
        password: password,
        isSuperAdmin: isSuperAdmin});
  },

  deleteUser: async (req, res) => {
    return await User.destroy({id: req.param('id')});
  },

};

