module.exports = {


  friendlyName: 'Download portfolio image',


  description: 'Download portfolio image file (returning a stream).',


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

    const portfolio = await Portfolio.findOne({id});
    if (!portfolio) { throw 'notFound'; }

    var downloading = await sails.startDownload(portfolio.image);
    // All done.
    return downloading;

  }


};
