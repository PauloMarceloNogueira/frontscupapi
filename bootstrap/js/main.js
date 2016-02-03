
$(document).ready(function(){

	createMenu();

	$('#changeMonitoramento').on('change keyup paste',function(data){
		var value = $(this).val();
		console.log(value);
		$('ul.nav li a').data('monitoramento',value);
	});


	function createMenu(){
		$.ajax({
			url: "http://localhost:8080/modules",
			dataType: "application/json",
			contentType: "text/plain",
			complete: function(results){
				var response = JSON.parse(results.responseText)
				menu = new Menu(response);
				document.querySelector('.container').appendChild(menu.menu);
				addMenuClick();
			}
		})
	}

	function addMenuClick(){
		$('ul.nav li a').on('click',function(){
			console.log('clicou')
			$(".conteudo").html("");
			var action = $(this).data('action');

			var monitoramento = $(this).data('monitoramento');

			$.ajax({
			    url: "http://localhost:8080/"+action+'/'+monitoramento,
			    dataType: "application/json",
			    contentType: "text/plain",
			    complete: function(results){
			    	var response = JSON.parse(results.responseText)
			        tabela = new Table(response);
			        document.querySelector('.conteudo').appendChild(tabela.table);
			    }
			});
		})
	}

});


