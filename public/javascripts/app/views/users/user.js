// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  define(function(require) {
    var Backbone, User, UserView, userTemplate;
    Backbone = require('backbone');
    User = require('models/user');
    userTemplate = require('templates/users/user');
    return UserView = Backbone.View.extend({
      tagName: 'li',
      template: userTemplate,
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      }
    });
  });

}).call(this);