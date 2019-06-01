
// Поворот карты по двойному клику
$('.card-block').dblclick( function() {
	if($(this).find('.card').hasClass('flip')) { 
		$(this).find('.card').removeClass('flip')

	} else {
		$(this).find('.card').addClass('flip')
	}
})

// Поворот карты по ховеру
// $('.card-block').hover( function() {
// 	$(this).find('.card').addClass('flip')
// },
// function() {
// 	$(this).find('.card').removeClass('flip')
// })

$(function() {
	
	$('.draggable').draggable();
	
});
