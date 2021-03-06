// SongModel.js - Defines a backbone model class for songs.

var SongModel = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  removeSong: function(){
    this.trigger('removeSong', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }
});
