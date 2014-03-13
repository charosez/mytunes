// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td class="queueButton">Add to Queue</td>'),

  events: {
    // Not necessary because play functionality handled by songQueue
    // 'click': function() {
    //   this.model.play();
    // },
    'click td': function() {
      console.log(this.model.get('artist'));
      this.model.play();
    },
    'click td.queueButton': function() {
      this.model.enqueue();
    }

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
