module.exports = {


  friendlyName: 'Download staff avatar',


  description: 'Download staff avatar file (returning a stream).',


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
    const staff = await Staff.findOne({id});
    if (!staff) { throw 'notFound'; }

    var downloading = await sails.startDownload(staff.avatar);
    // All done.
    return downloading;

  }


};
