/**
 * Post.js
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

    title: {
      type: 'string',
      description: 'title of the post',
      required: true,
      maxLength: 128,
      example: 'thanos is dead',
    },
    slug: {
      type: 'string',
      description: 'url-friendly title of the post',
      required: true,
      unique: true,
      maxLength: 128,
      example: 'thanos-is-dead',
    },
    description: {
      type: 'string',
      required: true,
      maxLength: 512
    },
    content: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      description: ' an 80x80 px image used as post thumbnail',
      example: 'uploads/image.png'
    },
    image: {
      type: 'string',
      description: 'probably an 720x360 px image',
      example: 'uploads/image.png'
    },
    published: {
      type: 'boolean',
      description: 'if published is false this can not be seen by public after admin confirmed it',
      defaultsTo: false,
    },
    tags: {
      type: 'string',
      required: true,
      description: 'tags of posts',
      example: 'node,pejman,mamad',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    comments: {
      collection: 'Comment',
      via: 'post',
      description: 'posts comments ref from Comment collection'
    },
    category: {
      model: 'Category',
      description: 'category of this post ref from another collection'
    },

  },


  //ADD POST
  addPost: async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const slug = req.body.slug;
    const content = req.body.content;
    const published = req.body.published? true: false;
    const category = req.body.category;
    const tags = req.body.tags;
    let image = null;
    let thumbnail = null;

    require('async').map(['image', 'thumbnail'], async (field) => {
      const file = await sails.uploadOne(req.file(field), {
        maxBytes: 10000000
      })
      .intercept((err)=>new Error('The photo upload failed: '+util.inspect(err)));
      return file.fd;
    }, async function doneUploading(err, files) {

      if (err) {return res.serverError(err);}


      image = files[0];
      thumbnail = files[1];

      return await Post.create({title: title,
        description: description,
        image: image,
        thumbnail: thumbnail,
        slug: slug,
        tags: tags,
        content: content,
        published: published,
        category: category,
      });
    });
  },

  //EDIT POST
  editPost: async (req, res) => {
    const title = req.body.title || undefined;
    const description = req.body.description || undefined;
    const slug = req.body.slug || undefined;
    const content = req.body.content || undefined;
    const published = req.body.published? true: false;
    const category = req.body.category || undefined;
    const tags = req.body.tags || undefined;

    require('async').map(['image', 'thumbnail'], async (field) => {
      const file = await sails.uploadOne(req.file(field), {
        maxBytes: 10000000
      })
      .intercept((err)=>new Error('The photo upload failed: '+util.inspect(err)));
      return file? file.fd: undefined;
    }, async function doneUploading(err, files) {

      if (err) {return res.serverError(err);}


      image = files[0];
      thumbnail = files[1];

      return await Post.updateOne(
        {id: req.param('id')},
        {
          title: title,
          description: description,
          image: image,
          thumbnail: thumbnail,
          slug: slug,
          tags: tags,
          content: content,
          published: published,
          category: category,
        });
    });
  },

  //DELETE POST
  deletePost: async (req, res) => {
    return await Post.destroy({id: req.param('id')});
  },

};

