
var x = document.getElementById("input");
var b = document.getElementById("btn");
var ul = document.createElement('ul');
var cont = document.getElementById("content"); 
var inp = document.createElement('input');



var validate = function(inputName, button) {
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


b.addEventListener('click', function() {
	validate(x, this);
	if (incorrect) {
		return;
	}
	var edit = document.createElement('button');
	edit.className = 'edit';
	var del = document.createElement('button');
	del.className = 'del';
	var editInp = document.createElement('input');
	editInp.className = 'editInp';
	edit.innerHTML = 'Edit';
	del.innerHTML = 'Delete';
	var now = new Date(); 
	var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	var li = document.createElement('li');
	li.innerHTML = "<span>" + x.value + "    " + time + "</span>";
	li.appendChild(edit);
	li.appendChild(del);
	ul.appendChild(li);
	cont.appendChild(ul);
	x.value = '';
	var parent = edit.parentNode;
	parent.appendChild(editInp);


	function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
li.addEventListener('click', function (e) {
    if (hasClass(e.target, 'edit')) {
    	inpet = this.getElementsByTagName('input')[0];
    	console.log(inpet)
		validate(inpet, e.target);
			if (incorrect) {
				return;
			}
			this.firstChild.innerHTML = inpet.value;
			inpet.value = '';
    } else if (hasClass(e.target, 'del')) {
    	console.log(this);
        this.remove();
    }
}, false);

})
/*var editBtn = document.getElementsByClassName('edit');
	editBtn.addEventListener('click', function() {
		validate(editInp, this);
		if (incorrect) {
			return;
		}
		this.parentNode.firstChild.innerHTML = editInp.value;
		editInp.value = '';
		
	})
	del.addEventListener('click', function() {
        this.parentNode.remove();
		
	})	*/






