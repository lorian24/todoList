'use strict';
//фокус инпутов

$(document).ready(function () {
	
	$('#taskName')
		.focus(function () {
			$('#taskName').css('background', '#f9f9f9');
		})
		.blur(function () {
			$('#taskName').css('background', '#fcfcfc');
		});
		
	$('#textarea')
		.focus(function () {
			$('#textarea').css('background', '#f9f9f9');
		})
		.blur(function () {
			$('#textarea').css('background', '#fcfcfc');
		});
	
		
	$('.add-task').click(function () {
		$('#taskList p').remove();
		var taskValue = $('.input-task').val();
		var descValue = $('.textarea-task').val();
		
		var $addNewListItem = $(`<li><span class="title">${taskValue}</span><span class="closeBtn"></span><span class="description">${descValue}</span><span class="arrow"></span></li>`);
		$('.listItem').append($addNewListItem);
		$('.input-task, .textarea-task').val('');
	});
	
	$(document).on('click', '.closeBtn', function () {
		$(this).parent().remove();
	})
	
});


	