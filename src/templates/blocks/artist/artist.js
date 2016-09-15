function onCardTabClicked(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  $(evt.target.closest('.card-tabs')).find('.active').removeClass('active');
  //because we can have more than one tablinks on our page
  evt.target.closest('li').className += ' active';

  $('.card-tabs-content').find('.tab-content').hide();
  var blockId = evt.target.closest('li').id + '-block';
  $('#' + blockId).show();
}



(function ($) {

  $(document).ready(function() {
  if ($('.card-tabs li').length > 0) {
	  $('.card-tabs li').click(onCardTabClicked);

  	//open first tab in tabs
  	try {
  		$('.card-tabs li')[0].click();
  	} catch(err) {
  		console.log('cannot open tab, ', err);
  	}
  }

  });

}(jQuery));
