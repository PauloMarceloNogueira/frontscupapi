function Menu(){
	
	this.construct.apply(this,arguments);
}


Menu.prototype.construct = function(JSONData){
	this.menu = document.createElement('ul'); 
	this.menu.setAttribute('class','nav nav-pills');
	this.data = JSONData;
	var i = 0;
	this.data.forEach(function(data){
		li = this.menu.appendChild(this.generateMenuLi(i));
		i++;
	}.bind(this))
}

Menu.prototype.generateMenuLi = function(count){
	var li = document.createElement('li');
	if(count === 0){
		li.setAttribute('class','active')
	}
	
	a = li.appendChild(this.generateLink(this.data[count].name))
	var linkText = document.createTextNode(this.data[count].name);
	a.appendChild(linkText);
	a.href = "#";
	a.setAttribute('data-action',this.data[count].path)
	a.setAttribute('data-monitoramento',"")
	
	return li;

}

Menu.prototype.generateLink = function(name){

	var a = document.createElement('a');
	return a;
}