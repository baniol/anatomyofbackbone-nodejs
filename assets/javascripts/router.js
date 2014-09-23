window.TodoApp = new (Backbone.Router.extend({
  routes: {
    "": "index",
    "todos/:id": "show"
  },

  initialize: function(){
    // Collection
    this.todoItems = new TodoItems();
    // List view - renders items in forEach loop
    // Todo item view class is instantiated in collection view.
    // The todos collection is managing a set of todo models
    this.todosView = new TodosView({collection: this.todoItems});
    this.todosView.render();
  },

  index: function(){
    $('#app').html(this.todosView.el);
    this.todoItems.fetch();
  },

  start: function(){
    Backbone.history.start();
  },

  show: function(id){
    this.todoItems.focusOnTodoItem(id);
  }
}))();