/**
 * VideoCast.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    link: {
      type: 'string',
      isURL: true,
    },
    content: {
      type: 'string',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      description: ' an 80x80 px image used as post thumbnail',
      example:'/image.png'
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
      via: 'videoCast',
      description: 'video comments ref from Comment collection'
    },

  },


  addVideo: async (req, res) => {
    const title = req.body.title;
    const slug = req.body.slug;
    const content = req.body.content;
    const link = req.body.link;
    const tags = req.body.tags;
    const published = req.body.published? true: false;

    const thumbnail = await sails.uploadOne(req.file('thumbnail'), {
      maxBytes: 10000000
    })
    .intercept((err)=>new Error('The photo upload failed: '+util.inspect(err)));

    return await VideoCast.create({
      title: title,
      slug: slug,
      content: content,
      link: link,
      tags: tags,
      published: published,
      thumbnail: thumbnail.fd
    });

  },

  editVideo: async (req, res) => {
    const title = req.body.title || undefined;
    const slug = req.body.slug || undefined;
    const content = req.body.content || undefined;
    const link = req.body.link || undefined;
    const tags = req.body.tags || undefined;
    const published = req.body.published? true: false;

    const thumbnail = await sails.uploadOne(req.file('thumbnail'), {
      maxBytes: 10000000
    })
    .intercept((err)=>new Error('The photo upload failed: '+util.inspect(err)));
    return await VideoCast.updateOne({id: req.param('id')},
      {
        title: title,
        slug: slug,
        content: content,
        link: link,
        tags: tags,
        published: published,
        thumbnail: thumbnail? thumbnail.fd: undefined,
      }
    );
  },
  deleteVideo: async (req, res) => {
    return await VideoCast.destroy({id: req.param('id')});
  },

};

