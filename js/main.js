


var x = document.getElementById("input");
var b = document.getElementById("btn");
var ul = document.createElement("ul");
var cont = document.querySelector(".content"); 
var inp = document.createElement("input");
var tasks = ["Погулять по Москве", "Покурить", "Написать ToDo", "Поймать рыбу", "Выпить чай", "Нарисовать картину", "Заняться делом", "Завоевать мир"];

function getTask (array) {
	function getRandomArbitary(min, max) {
  		return Math.random() * (max - min) + min;
	}
	var maxInt = array.length;
	var taskIndex =  Math.floor(getRandomArbitary(0, maxInt));
	var task = array[taskIndex];
	return task;
}
var arrTask = getTask(tasks);
function insertTask () {
 		var elemTask = document.querySelector('#taskArr');
		elemTask.innerHTML = 'Например, ' + arrTask; 	
		elemTask.className = "animated fadeIn";	
}
insertTask();

function validate(inputName, button) {
	incorrect = false;
	var value = inputName.value.trim();
	if (!value) {
		var alertSpan = document.createElement('span');
		alertSpan.innerHTML = 'Incorrect task';
		button.parentNode.appendChild(alertSpan);
		incorrect = true;
		setTimeout(function() {
  			alertSpan.remove();
		}, 1100);
	}
}
function getTime () {
			var now = new Date(); 
			var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
			return time;
}

b.addEventListener('click', function() {
	validate(x, this);
	if (incorrect) {
		return;
	}
	var edit = document.createElement('button');
	edit.className = 'edit';
	var del = document.createElement('button');
	del.className = 'del';
	var complete = document.createElement('button');
	complete.className = 'complete';
	var editInp = document.createElement('input');
	editInp.className = 'editInp';
	var time = getTime();
	var li = document.createElement('li');
	li.className = "animated fadeInUp";
	li.innerHTML = "<span class='time'>" + time + "</span>" + "<div class='text'>" + "<span class='task'>" + x.value + "</span>" + "</div>";
	li.appendChild(edit);
	li.appendChild(del);
	li.appendChild(complete);
	ul.appendChild(li);
	cont.appendChild(ul);
	x.value = '';
	var parent = edit.parentNode;
	parent.appendChild(editInp);


	function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
  editInp.oninput = function() {
    edit.style.display = 'inline-block';
    edit.style.opacity = '1';
  };
  editInp.onblur = function() {
  	setTimeout(function() {
  		edit.style.display = 'none';	
	}, 300);
  	
  }
li.addEventListener('click', function (e) {
    if (hasClass(e.target, 'edit')) {
    	inpet = this.getElementsByTagName('input')[0];
		validate(inpet, e.target);
			if (incorrect) {
				return;
			}
			this.querySelector('.text').innerHTML = inpet.value;
			inpet.value = '';
			var taskTime = getTime();
			this.querySelector('.time').innerHTML = taskTime;
    } else if (hasClass(e.target, 'del')) {
    	this.className = "animated fadeOut";
    	var _this = this;
    	setTimeout(function() {
    		_this.remove();
    	}, 1000)
    } else if (hasClass(e.target, 'complete')) {
    	this.className = "complete_task";
    }
}, false);

})


});



