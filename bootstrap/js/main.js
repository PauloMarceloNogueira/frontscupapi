
$(document).ready(function(){

	createMenu();

	$('#changeMonitoramento').on('change keyup paste',function(data){
		var value = $(this).val();
		console.log(value);
		$('ul.nav li a').data('monitoramento',value);
	});



	function createMenu(){
		console.log('lala');
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
			closeConfig()
			$(".conteudo").html("");
			var action = $(this).data('action');

			var monitoramento = $(this).data('monitoramento');

			if(action === 'config'){
				openConfig()
				$('#config').submit(function(data){
					var publickey = $('#addPublickey').val();
					var privatekey = $('#addPrivatekey').val();
					sendConfig(publickey, privatekey);
				})
			}else{
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
			}	
		})
	}

	function openConfig(){
		$('.config').removeClass('hiden');
	}

	function closeConfig(){
		$('.config').addClass('hiden');
	}

	function sendConfig(publickey, privatekey){
		$.ajax({
			url: "http://localhost:8080/config/"+publickey+'/'+privatekey,
			dataType: "application/json",
			contentType: "text/plain",
			complete: function(results){
				closeConfig()
			}
		})
	}

});


