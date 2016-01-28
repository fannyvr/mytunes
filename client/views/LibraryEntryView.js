// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  // var ourTemplate = _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  // ourTemplate({artist: 'John Lennon', title: 'something'})
  // - > <td> John Lennon </td> <td> something </td>

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
