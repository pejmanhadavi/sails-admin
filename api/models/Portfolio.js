/**
 * Portfolio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    title: {
      type: 'string',
      required: true,
      description: 'portfolio title',
      example: 'e-commerce',
      maxLength: 128,
    },
    content: {
      type: 'string',
      required: true,
      description: 'portfolio Description',
    },
    duration: {
      type: 'string',
      required: true,
      description: 'develop duration'
    },
    employer: {
      type: 'string',
      required: true,
      description: 'project employer',
      maxLength: 128,
    },
    published: {
      type: 'boolean',
      description: 'if published is false this can not be seen by public after admin confirmed it',
      defaultsTo: false,
    },
    image: {
      type: 'string',
      description: 'probably an 720x360 px image',
      example: 'uploads/image.png'
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },


  addPortfolio: async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const duration = req.body.duration;
    const employer = req.body.employer;
    const published = req.body.published? true: false;

    const image = await sails.uploadOne(req.file('image'), {
      maxBytes: 10000000
    })
    .intercept((err)=>new Error('The photo upload failed: '+util.inspect(err)));

    return await Portfolio.create({
      title: title,
      content: content,
      duration: duration,
      employer: employer,
      published: published,
      image: image.fd,
    });
  },
  editPortfolio: async (req, res) => {
    const title = req.body.title || undefined;
    const content = req.body.content || undefined;
    const duration = req.body.duration || undefined;
    const employer = req.body.employer || undefined;
    const published = req.body.published? true: false;

    const image = await sails.uploadOne(req.file('image'), {
      maxBytes: 10000000
    })
    .intercept((err)=>new Error('The photo upload failed: '+util.inspect(err)));

    return await Portfolio.updateOne({id: req.param('id')}, {
      title: title,
      content: content,
      duration: duration,
      employer: employer,
      published: published,
      image: image? image.fd: undefined,
    });
  },
  deletePortfolio: async (req, res) => {
    return await Portfolio.destroy({id: req.param('id')});
  },

};
