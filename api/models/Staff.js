/**
 * Staff.js
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
      example: 'Pejman Hadavi',
      maxLength: 128,
    },
    role: {
      type: 'string',
      required: true,
      example: 'Android Developer',
      maxLength: 128,
    },
    about: {
      type: 'string',
      required: true,
      description: 'some sentences about staff',
      maxLength: 512,
    },
    avatar: {
      type: 'string',
      description: 'probably an 420*420 px image',
      example: 'uploads/image.png'
    },
    githubUrl: {
      type: 'string',
      required: true,
      isURL: true,
    },
    twitterUrl: {
      type: 'string',
      isURL: true,
    },
    email: {
      type: 'string',
      isEmail: true,
      required: true,
      maxLength: 200,
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },


  addStaff: async (req, res) => {
    const fullName = req.body.fullName;
    const role = req.body.role;
    const about = req.body.about;
    const githubUrl = req.body.githubUrl;
    const twitterUrl = req.body.twitterUrl;
    const email = req.body.email;

    const avatar = await sails.uploadOne(req.file('avatar'), {
      maxBytes: 10000000
    })
    .intercept((err)=>new Error('The photo upload failed: '+util.inspect(err)));

    return await Staff.create({
      fullName: fullName,
      role: role,
      avatar: avatar.fd,
      about: about,
      githubUrl: githubUrl,
      twitterUrl: twitterUrl,
      email: email,
    });
  },
  editStaff: async (req, res) => {
    const fullName = req.body.fullName || undefined;
    const role = req.body.role || undefined;
    const about = req.body.about || undefined;
    const githubUrl = req.body.githubUrl || undefined;
    const twitterUrl = req.body.twitterUrl || undefined;
    const email = req.body.email || undefined;
    const avatar = await sails.uploadOne(req.file('avatar'), {
      maxBytes: 10000000
    })
    .intercept((err)=>new Error('The photo upload failed: '+util.inspect(err)));
    return await Staff.updateOne({id: req.param('id')}, {
      fullName: fullName,
      role: role,
      avatar: avatar ? avatar.fd: undefined,
      about: about,
      githubUrl: githubUrl,
      twitterUrl: twitterUrl,
      email: email,
    });
  },

  deleteStaff: async (req, res) => {
    return await Staff.destroy({id: req.param('id')});
  },

};

