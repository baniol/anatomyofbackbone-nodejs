// Singular item view. 
// Responsible for binding events to an item & rendering it. 
// Contains an html template. 
// Instantiated in collection view, in addOne method. 
// this.model is passed as a property in collection view (todos_view.js). 
window.TodoView = Backbone.View.extend({

  tagName: 'li',

  template: _.template(
    '<h3 class="<%= status %>">' + 
      '<input type=checkbox <%= status == "complete" ? "checked=checked" : "" %>/>' +
      '<%= description %>' +
      '<a href="/#todos/<%= id %>">☞</a>' +
    '</h3>'
    ),

  events: {
    'change input': 'toggleStatus'
  },

  // This method is called whenever a new instance is created
  initialize: function(){
    // Listen on any change of the model, ex. checking the checkbox, and re-renders the view. 
    // The third 'this' argument refers to the view context (todoView instance)
    this.model.on('change', this.render, this);
    this.model.on('destroy hide', this.remove, this);
  },

  render: function(){
    // 'this.$el' is a sort of a shortcut for '$(TodoView.el)'
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  remove: function(){
    this.$el.remove();
  },

  toggleStatus: function(){
    this.model.toggleStatus();
  }
});
