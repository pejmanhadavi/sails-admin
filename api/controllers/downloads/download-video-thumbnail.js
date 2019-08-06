module.exports = {


  friendlyName: 'Download video thumbnail',


  description: 'Download video thumbnail file (returning a stream).',


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

    notFound: { responseType: 'notFound' },
  },


  fn: async function ({id}) {
    const video = await VideoCast.findOne({id});
    if(!video){ throw 'notFound'; }

    var downloading = await sails.startDownload(video.thumbnail);
    // All done.
    return downloading;

  }


};
