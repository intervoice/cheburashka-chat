'use strict'
define (require) ->

  Backbone        = require 'backbone'
  Message         = require 'models/message'
  messageTemplate = require 'templates/message'

  MessageView = Backbone.View.extend
    tagName: 'li'

    template: messageTemplate

    render: () ->
      @.$el.html @.template(@.model.attributes)
      return @
