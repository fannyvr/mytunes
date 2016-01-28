// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  // makes this.el a dom table
  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      // append a row for each song in the collection
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      }) // [<tr>...</tr>, etc..]
    );
  }

});
