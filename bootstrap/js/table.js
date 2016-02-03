function Table(){
	this.constructor.apply(this,arguments)
}


Table.prototype.constructor = function(JSONData){
	this.table = document.createElement('table');
	this.table.setAttribute('class','table-striped');
	this.table.setAttribute('class','table	');
	this.data = JSONData;
	this.table.appendChild(this.generateTableHeader());
	this.table.setAttribute('border',1);
	this.table.appendChild(this.generateTableBody());
}


Table.prototype.generateTableHeader = function(){
	var header = document.createElement('thead');
	var headerLine = document.createElement('tr');
	header.appendChild(headerLine);
	for( campo in this.data[0]){
		var th = document.createElement('th');
		th.textContent = 
		headerLine.appendChild(this.generateCell(campo,'th'));
	}
	return header;
}

Table.prototype.generateTableBody= function(){
	var body = document.createElement('tbody');
	this.data.forEach(function(data){
		console.log(this)
		body.appendChild(this.generateLine(data));
	}.bind(this))
	return body
}

Table.prototype.generateLine = function(data){
	var line = document.createElement('tr');
	for(campo in data){
		line.appendChild(this.generateCell(data[campo],'td'))
	}
	return line
}


Table.prototype.generateCell = function(data,type){

	var cell = document.createElement(type);
	cell.textContent = data
	return cell
}
