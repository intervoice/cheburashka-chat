// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  define(function(require) {
    var Backbone, Message, MessagesCollection;
    Backbone = require('backbone');
    Message = require('models/message');
    return MessagesCollection = Backbone.Collection.extend({
      model: Message
    });
  });

}).call(this);
