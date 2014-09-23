// Collection view. 
// Adds event listeners for collectoin (new & fetch). 
// Instantiaded in router.js. 
// this.collection gets passed as property in router.js. 
window.TodosView = Backbone.View.extend({

  tagName: 'ul',

  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
  },

  render: function(){
    this.addAll();
    return this;
  },

  addAll: function(){
    this.$el.empty();
    // We are going through each model in the collection
    // The second 'this' parameter points to the view context
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(todoItem){
    var todoView = new TodoView({model: todoItem});
    this.$el.append(todoView.render().el); 
  }
});
