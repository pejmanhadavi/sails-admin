/**
 * Tag.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    name: {
      type: 'string',
      description: 'tag name',
      required: true,
      unique: true,
      maxLength: 128,
      example: 'node js'
    },
    slug: {
      type: 'string',
      description: 'url-friendly title',
      required: true,
      unique: true,
      maxLength: 128,
      example: 'thanos-is-dead',
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // posts: {
    //   collection: 'Post',
    //   via: 'tags',
    //   description: 'This Attribute will be filled in for posts'
    // },

    // videoCasts: {
    //   collection: 'VideoCast',
    //   via: 'tags',
    //   description: 'This Attribute will be filled in for video casts'
    // },

  },

  addTag: async (req, res) => {
    const name = req.body.name;
    const slug = req.body.slug;

    return await Tag.create({name: name, slug: slug});
  },

  editTag: async (req, res) => {
    const name = req.body.name || undefined;
    const slug = req.body.slug || undefined;

    return await Tag.updateOne({id: req.param('id')})
      .set({
        name: name,
        slug: slug
      });
  },

  deleteTag: async (req, res) => {
    return await Tag.destroy({id: req.param('id')});
  },

};

