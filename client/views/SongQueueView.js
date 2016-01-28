// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  // this.collection should now be songQueue

  tagName: "table",

  initialize: function() {
    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('remove', function() {
      this.render();
    }, this);

    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        // need to change this to songqueueentryview
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },
});
