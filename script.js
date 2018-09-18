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
		$('#taskList p').hide();
		var taskValue = $('.input-task').val() || 'Без названия';
		var descValue = $('.textarea-task').val() ;
		
		
		var $addNewListItem = $(`<li><span class="title">${taskValue}</span><span class="closeBtn"></span><span class="wrap"><span class="descriptionContainer"<span class="description">${descValue}</span><span class="moreLink">Подробнее</span></span></span><span class="arrow"></span></li>`);
		$('.listItem').append($addNewListItem);
		$('.input-task, .textarea-task').val('');
		
	});
	
	$(document).on('click', '.closeBtn', function () {
		$(this).parent().remove();
		
		if ( ! $('.listItem li').length ) {
			$('#taskList p').show();
		}
	});
	
	$(document).on('click', '.arrow', function () {
		if ($(this).parent().find('.wrap').is(':hidden')){
			$(this).removeClass('revert').parent().find('.wrap').show();
		} else {
			$(this).addClass('revert').parent().find('.wrap').hide();
		}
	});
	
	
	function openPopup(title, description) {
		$('.popup').fadeIn(500);
		$('.container .content').html(`<h1>${title}</h1><p>${description}</p>`);
		$('body').toggleClass('preventScroll');
	}
	
	function closePopup() {
		$('.popup').fadeOut(200);
		$('body').toggleClass('preventScroll', false);
	}
	
	$(document).on('click','.moreLink', function (){
		var taskValue = $(this).closest('li').find('.title').text();
		var descValue = $(this).closest('li').find('.descriptionContainer').text();
		openPopup(taskValue, descValue);
	});
	
	
	$('.popup').click(function (event) {
		if( ! event.target.closest('.container')) {
			closePopup()
		}
	});
	
	$('.popup-btn').click(function (event) {
		closePopup()
	})
	
});


	