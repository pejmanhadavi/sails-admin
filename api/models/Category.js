/**
 * Category.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  
  schema: true,

  attributes: {
    
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: 'string',
      description: 'name of the category',
      required: true,
      maxLength: 128,
      example: 'avengers movie',
    },
    slug: {
      type: 'string',
      description: 'url-friendly name of the category',
      required: true,
      maxLength: 128,
      example: 'avengers-movie',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    posts: {collection: 'Post', via: 'category', description: 'posts related to this category'},

  },

  addCategory: async (req, res) => {
    const name = req.body.name;
    const slug = req.body.slug;

    return await Category.create({name: name, slug: slug});
  },

  editCategory: async (req, res) => {
    const name = req.body.name || undefined;
    const slug = req.body.slug || undefined;

    return await Category.updateOne({id: req.param('id')})
      .set({
        name: name,
        slug: slug
      });
  },

  deleteCategory: async (req, res) => {
    return await Category.destroy({id: req.param('id')});
  },

};

