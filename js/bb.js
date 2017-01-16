$(function() {
  //model
  var Todo = Backbone.Model.extend({
  
    defaults: function() {
      return {
        title: "Новая задача...",
        done: false
      };
    }  
  });


  //collection

  var TodoList = Backbone.Collection.extend({
    model: Todo,
    localStorage: new Backbone.LocalStorage("todos-backbone"),
  });
  var Todos = new TodoList();





   var TodoView = Backbone.View.extend({


    template: _.template($('#item-template').html()),

   
    events: {
      "click .destroy" : "clear"
    },


    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },


    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    clear: function() {
      this.model.destroy();
      this.remove();
    }


  });

    var AppView = Backbone.View.extend({
    el: '.content',

    events: {
      "keypress #input": "createOnEnter",
      "click #clear-completed": "clearCompleted",
      "click #btn": "clearAll",
    },
    initialize: function() {
      this.$input = this.$("#input");
      this.collection = Todos;
      this.listenTo(Todos, 'add', this.addOne);
      this.listenTo(Todos, 'reset', this.addAll);
      this.listenTo(Todos, 'all', this.render);

      Todos.fetch();
          },

  

    addOne: function(todo) {
      var view = new TodoView({model: todo});
      Todos.add(todo);
      this.$("#todo-list").append(view.render().el);
    },
    addAll: function() {
      Todos.each(this.addOne);
    },
    clearAll: function() {
      this.collection.reset();
      localStorage.removeItem("todos-backbone");
      this.$('#todo-list').html('');

    },
    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      if (!this.$input.val().trim()) {
        alert('Введите значение');
        return;
      }
      Todos.create({title: this.$input.val()});
      this.$input.val('');
    },

  });



  var App = new AppView;
});