module.exports = {


  friendlyName: 'Download post image',


  description: 'Download post image file (returning a stream).',


  inputs: {
    id: {
      description: 'The id of the item whose post\'s photo we\'re downloading.',
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      outputDescription: 'The streaming bytes of the specified thing\'s photo.',
      outputType: 'ref'
    },

    notFound: { responseType: 'notFound' }
  },


  fn: async function ({id}) {
    const post = await Post.findOne({id});
    if (!post) { throw 'notFound'; }

    var downloading = await sails.startDownload(post.image);
    // All done.
    return downloading;

  }


};
