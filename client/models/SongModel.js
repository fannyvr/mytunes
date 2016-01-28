// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  // attributes {url, artist, title}

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  }
});
