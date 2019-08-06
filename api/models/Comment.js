/**
 * Comment.js
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
      description: 'title of the comment',
      required: true,
      maxLength: 128,
      example: 'some Title',
    },
    fullName: {
      type: 'string',
      description: 'sender full name',
      required: true,
      maxLength: 128,
      example: 'Pejman hadavi'
    },
    email: {
      type: 'string',
      example: 'example@example.com',
      description: 'sender email address',
      isEmail: true,
      required: true,
    },
    body: {
      type: 'string',
      description: 'main body and main part of comment',
      example: 'this is some body for the comment',
      maxLength: 1024,
      required: true,
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    post: {
      model: 'Post',
      description: 'if it is a post comment here should be fill / this Attribute is allow null by default'
    },

    videoCast: {
      model: 'VideoCast',
      description: 'if it is a video comment here should be fill / this Attribute is allow null by default'
    },

  },

};

