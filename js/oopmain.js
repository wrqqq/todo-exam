(function(){
  'use strict';
  var Todo = {
    defaults: {
      title: 'def',
      resolved: 'def' 
    }
  }; //Model
  var Todos = function() {
    this.collection = [];
    this.addTodo = function (todo) {
      this.collection.push(todo);
    }
    this.deleteTodo = function (todo) {
      this.collection.splice(todo, 1);
    } 
  }; //collection

  var App = function() {
    this.Todos = new Todos();
    this.initEvents();
    return this; //chaining
  };

  App.prototype = {
    addTodo: function() {
      this.Todos.addTodo(object)
    },
    deleteTodo: function() {
      this.Todos.deleteTodo(object)
    },
    render: function() {
      var tmp = '';
      var mass = '';
      this.Todos.collection.forEach(function(elem, i, arr) {
        mass += '<div class="todo_wrap animated fadeIn"><div class="todo animated fadeIn" data-index=' + i + '>' + elem.title + '</div><div class="del"></div></div>';
      })
      tmp = mass;
      mass = '';
      $('#list').html(tmp);
    },
    initEvents: function() {
      // body... 
      var _this = this;
      $(document).on('click', '#btn', function(){return _this.makeTodo()})
      .on('click', '#btn', function(){return _this.clearInp()})
      .on('click', '.del', function(e){return _this.deleteTodo(e)})
    },  
    makeTodo: function() {
      if ($('input').val().trim()) {
        this.Todos.addTodo({
          title: $('input').val(),
          resolved:false,
          rend: false
        });
        this.render();
        console.log(this.Todos.collection);
      }
    },
    clearInp: function() {
      $('input').val('');
    },
    deleteTodo: function(e) {
      e.currentTarget.parentNode.remove();
      var target = e.currentTarget;
      var targetAtr = target.getAttribute('data-index');
      this.Todos.deleteTodo({targetAtr});
    }
  }
    window.app = new App();
})()