module.exports = {


  friendlyName: 'Upload file',


  description: '',


  inputs: {
    req: {
      type: 'ref',
      description: 'The current incoming request (req).',
      required: true
    },
    field: {
      type: 'string',
      example: 'image/thumbnail',
      description: 'The name of the file input.',
      required: true
    },
    destination: {
      type: 'string',
      example: 'images/thumbnails',
      description: 'The name of the destination folder to save files.',
      required: true
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    inputs.req.file(inputs.field).upload({
      maxBytes: 10000000,
      dirname: require('path').resolve(sails.config.appPath, 'assets/uploads/'+inputs.destination),
    }, (err, uploadedFiles) => {
      if(err){
        exits.error(err);
      }
      if(uploadedFiles.length === 0) {
        exits.error('No file was uploaded');
      }
      exits.success(uploadedFiles[0].fd);
    });
  }
};

